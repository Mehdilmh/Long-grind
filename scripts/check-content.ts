/**
 * Publication readiness checks. Run: npm run content:check
 *
 * Errors block publishing; warnings are things an editor should look at.
 * Importing src/lib/content.ts already validates every schema and reference.
 */
import {
  articlePath,
  getAllArticlesUnfiltered,
  getAllProducts,
  getCategories,
  internalLinks,
  wordCount,
} from "../src/lib/content";
import { buildAffiliateUrl } from "../src/lib/affiliate";
import { isIllustration } from "../src/lib/illustrations";
import { site } from "../src/config/site";

const errors: string[] = [];
const warnings: string[] = [];
const today = new Date().toISOString().slice(0, 10);

const articles = getAllArticlesUnfiltered();
const published = articles.filter((a) => a.status === "published");
const staticRoutes = ["/", "/about", "/editorial-policy", "/how-we-evaluate", "/affiliate-disclosure", "/privacy", "/cookies", "/terms", "/contact"];
const validPaths = new Set([
  ...staticRoutes,
  ...getCategories().map((c) => `/${c.slug}`),
  ...published.map(articlePath),
]);
const products = getAllProducts();

// Forbidden claims that would imply fabricated evidence or pricing.
const suspicious: [RegExp, string][] = [
  [/\$\s?\d/, "price"],
  [/\b\d(\.\d)?\s?(out of|\/)\s?(5|10)\b/i, "score/rating"],
  [/★|☆|\bstars?\b rating/i, "star rating"],
  [/\b(we|i) (tested|measured|used it for)\b/i, "first-hand testing claim"],
  [/\bin stock\b|\bonly \d+ left\b|\blimited time\b/i, "stock/urgency claim"],
];

for (const a of articles) {
  const where = `[${a.status}] ${a.slug}`;
  const text = JSON.stringify(a);

  if (a.status !== "draft") {
    if (a.sources.length === 0) errors.push(`${where}: no sources listed`);
    if (wordCount(a) < 800) warnings.push(`${where}: only ${wordCount(a)} words — is it substantive enough?`);
    if (!a.pinterest) warnings.push(`${where}: no Pinterest title/description`);
    if (a.related.length === 0) warnings.push(`${where}: no related articles set`);
    if (a.publishedAt > today) warnings.push(`${where}: publishedAt is in the future`);
  }
  if (a.method === "research-based") {
    for (const [re, label] of suspicious) if (re.test(text)) errors.push(`${where}: contains possible ${label} (${re}) in a research-based article`);
  } else {
    for (const [re, label] of suspicious.filter(([, l]) => l !== "first-hand testing claim"))
      if (re.test(text)) errors.push(`${where}: contains possible ${label} (${re})`);
  }
  if (!isIllustration(a.hero.illustration)) warnings.push(`${where}: hero illustration "${a.hero.illustration}" not found; default used`);
  for (const b of a.body) if (b.type === "figure" && !isIllustration(b.illustration)) errors.push(`${where}: unknown figure illustration ${b.illustration}`);
  for (const s of a.sources) if (s.accessed > today) errors.push(`${where}: source accessed date in the future (${s.url})`);

  for (const href of internalLinks(a)) {
    const path = href.split("#")[0]!;
    if (!validPaths.has(path)) {
      (a.status === "published" ? errors : warnings).push(`${where}: internal link to ${href} does not resolve to a published page`);
    }
  }
  for (const r of a.related) {
    if (!articles.some((x) => x.slug === r)) errors.push(`${where}: related slug "${r}" does not exist`);
  }
  // Recommended products must be publishable.
  if (a.status === "published") {
    for (const b of a.body)
      if (b.type === "productPicks")
        for (const p of b.picks) {
          const prod = products.find((x) => x.id === p.productId);
          if (prod?.status !== "verified") errors.push(`${where}: recommends "${p.productId}" which is ${prod?.status ?? "missing"}`);
        }
  }
}

// Orphan check: every published article should be linked from somewhere other than listings.
for (const a of published) {
  const inbound = published.filter((x) => x.slug !== a.slug && (x.related.includes(a.slug) || internalLinks(x).includes(articlePath(a))));
  if (inbound.length === 0) warnings.push(`${a.slug}: no inbound links from other articles`);
}

for (const p of products) {
  const where = `product ${p.id}`;
  if (p.affiliate) {
    const res = buildAffiliateUrl(p.affiliate.destinationUrl, p.affiliate.marketplace);
    if (!res.ok) errors.push(`${where}: affiliate URL rejected — ${res.reason}`);
  } else if (p.status === "verified") {
    warnings.push(`${where}: no verified affiliate destination yet (CTA hidden)`);
  }
  if (p.status === "verified" && p.specs.length === 0) warnings.push(`${where}: verified but has no sourced specs`);
  if (p.image && !p.image.rights) errors.push(`${where}: image without rights information`);
  const ageDays = (Date.parse(today) - Date.parse(p.lastVerified)) / 86_400_000;
  if (ageDays > 180) warnings.push(`${where}: facts last verified ${p.lastVerified} (>6 months)`);
}

// Owner configuration
if (!site.contactEmail) warnings.push("site: NEXT_PUBLIC_CONTACT_EMAIL is not set (contact page shows a pending notice)");
if (!site.legalReviewComplete) warnings.push("site: legalReviewComplete is false — legal/trust pages show review notices");

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
console.log(`\n${articles.length} articles (${published.length} published), ${products.length} products — ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
