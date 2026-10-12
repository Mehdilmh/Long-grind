import { z } from "zod";
import { allArticles } from "@/content/articles";
import { categories as rawCategories, buyingGuideTypes } from "@/content/categories";
import { products as rawProducts } from "@/content/products";
import { authors as rawAuthors } from "@/content/authors";
import { tags as rawTags } from "@/content/tags";
import { showDrafts } from "@/lib/env";
import {
  articleSchema,
  authorSchema,
  categorySchema,
  productSchema,
  tagSchema,
  type Article,
  type Block,
  type Category,
  type Product,
} from "@/lib/schema";

/* Validate everything once at module load so bad content fails the build with a readable message. */
function parseEach<T extends z.ZodTypeAny>(schema: T, items: readonly unknown[], kind: string): z.output<T>[] {
  return items.map((item, i) => {
    const res = schema.safeParse(item);
    if (res.success) return res.data;
    const rec = item as { slug?: string; id?: string };
    const name = rec.slug ?? rec.id ?? `#${i}`;
    const issues = res.error.issues.map((iss) => `  - ${iss.path.join(".") || "(root)"}: ${iss.message}`).join("\n");
    throw new Error(`Invalid ${kind} "${name}":\n${issues}`);
  });
}

const categoriesList = parseEach(categorySchema, rawCategories, "category");
const productsList = parseEach(productSchema, rawProducts, "product");
const authorsList = parseEach(authorSchema, rawAuthors, "author");
const tagsList = parseEach(tagSchema, rawTags, "tag");
const articlesList = parseEach(articleSchema, allArticles, "article");

const categorySlugs = new Set(categoriesList.map((c) => c.slug));
const tagSlugs = new Set(tagsList.map((t) => t.slug));
const authorIds = new Set(authorsList.map((a) => a.id));
const productIds = new Set(productsList.map((p) => p.id));

for (const a of articlesList) {
  const where = `article "${a.slug}"`;
  if (!categorySlugs.has(a.category)) throw new Error(`${where}: unknown category ${a.category}`);
  if (!authorIds.has(a.authorId)) throw new Error(`${where}: unknown author ${a.authorId}`);
  for (const t of a.tags) if (!tagSlugs.has(t)) throw new Error(`${where}: unknown tag ${t}`);
  for (const b of a.body)
    if (b.type === "productPicks")
      for (const p of b.picks) if (!productIds.has(p.productId)) throw new Error(`${where}: unknown product ${p.productId}`);
}
for (const p of productsList) {
  if (!categorySlugs.has(p.category)) throw new Error(`product "${p.id}": unknown category ${p.category}`);
  for (const s of p.specs)
    if (!p.sources[s.sourceIndex]) throw new Error(`product "${p.id}": spec "${s.label}" cites missing source`);
}
const slugs = articlesList.map((a) => a.slug);
const dupe = slugs.find((s, i) => slugs.indexOf(s) !== i);
if (dupe) throw new Error(`Duplicate article slug ${dupe}`);

/* ------------------------------------------------------------------ */

export function isVisible(a: Article) {
  return a.status === "published" || showDrafts;
}

const byDateDesc = (a: Article, b: Article) =>
  (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt);

export function getArticles(): Article[] {
  return articlesList.filter(isVisible).sort(byDateDesc);
}

/** Every article regardless of status; for tooling only. */
export function getAllArticlesUnfiltered(): Article[] {
  return articlesList;
}

export function getArticle(category: string, slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug && a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function articlePath(a: Pick<Article, "category" | "slug">) {
  return `/${a.category}/${a.slug}`;
}

export function getCategories(): Category[] {
  return categoriesList;
}

export function getCategory(slug: string) {
  return categoriesList.find((c) => c.slug === slug);
}

export function getArticlesInCategory(slug: string): Article[] {
  if (slug === "buying-guides") {
    return getArticles().filter(
      (a) => a.category === slug || (buyingGuideTypes as readonly string[]).includes(a.type),
    );
  }
  return getArticles().filter((a) => a.category === slug);
}

/** Articles from other sections sharing tags with this category's subtopics. */
export function getRelatedForCategory(slug: string, exclude: Article[]): Article[] {
  const cat = getCategory(slug);
  if (!cat) return [];
  const wanted = new Set(cat.subtopics.map((s) => s.tag));
  const excluded = new Set(exclude.map((a) => a.slug));
  return getArticles()
    .filter((a) => !excluded.has(a.slug) && a.tags.some((t) => wanted.has(t)))
    .slice(0, 6);
}

/** A category is indexable once it has at least one published article of its own. */
export function isCategoryIndexable(slug: string) {
  return articlesList.some(
    (a) =>
      a.status === "published" &&
      (a.category === slug ||
        (slug === "buying-guides" && (buyingGuideTypes as readonly string[]).includes(a.type))),
  );
}

export function getRelatedArticles(a: Article, limit = 3): Article[] {
  const visible = getArticles().filter((x) => x.slug !== a.slug);
  const explicit = a.related
    .map((s) => visible.find((x) => x.slug === s))
    .filter((x): x is Article => Boolean(x));
  const scored = visible
    .filter((x) => !explicit.includes(x))
    .map((x) => ({ x, score: x.tags.filter((t) => a.tags.includes(t)).length + (x.category === a.category ? 1 : 0) }))
    .filter((s) => s.score > 0)
    .sort((p, q) => q.score - p.score)
    .map((s) => s.x);
  return [...explicit, ...scored].slice(0, limit);
}

export function getProduct(id: string): Product | undefined {
  const p = productsList.find((x) => x.id === id);
  if (!p) return undefined;
  if (p.status === "draft" && !showDrafts) return undefined;
  if (p.status === "retired") return undefined;
  return p;
}

export function getAllProducts(): Product[] {
  return productsList;
}

export function getAuthor(id: string) {
  return authorsList.find((a) => a.id === id);
}

export function getTagName(slug: string) {
  return tagsList.find((t) => t.slug === slug)?.name ?? slug;
}

export function getTags() {
  return tagsList;
}

/* ------------------------------------------------------------------ */
/* Derived article data                                               */
/* ------------------------------------------------------------------ */

function blockText(b: Block): string {
  switch (b.type) {
    case "p":
    case "h2":
    case "h3":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(" ");
    case "callout":
    case "verdict":
      return `${b.title} ${b.text}`;
    case "steps":
      return b.items.map((i) => `${i.title} ${i.text}`).join(" ");
    case "table":
      return [b.caption, ...b.columns, ...b.rows.flat()].join(" ");
    case "productPicks":
      return b.picks.map((p) => `${p.label} ${p.why}`).join(" ");
    case "choice":
      return b.options.map((o) => `${o.title} ${o.chooseIf.join(" ")}`).join(" ");
    case "figure":
      return b.caption ?? "";
  }
}

export function wordCount(a: Article) {
  const text = [a.answer, ...a.keyTakeaways, ...a.body.map(blockText), ...a.faq.map((f) => `${f.q} ${f.a}`)].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

/** Reading time at ~230 words per minute. */
export function readingTime(a: Article) {
  return Math.max(1, Math.round(wordCount(a) / 230));
}

export function tableOfContents(a: Article) {
  return a.body
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}

export function articleProducts(a: Article): Product[] {
  const ids = a.body.flatMap((b) => (b.type === "productPicks" ? b.picks.map((p) => p.productId) : []));
  return ids.map(getProduct).filter((p): p is Product => Boolean(p));
}

/** All internal links (href starting with "/") inside an article's inline text. */
export function internalLinks(a: Article): string[] {
  const text = [a.answer, ...a.body.map(blockText), ...a.faq.map((f) => f.a)].join(" ");
  return [...text.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]!);
}
