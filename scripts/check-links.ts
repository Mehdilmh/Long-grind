/**
 * Crawls a running site and reports broken internal links.
 * Usage: npm run build && npm start   (in another terminal)
 *        BASE_URL=http://localhost:3000 npm run links:check
 */
const base = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

async function main() {
  const queue = ["/"];
  const sitemap = await fetch(`${base}/sitemap.xml`).then((r) => r.text());
  for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) queue.push(new URL(m[1]!).pathname);
  const seen = new Set<string>();
  const broken: string[] = [];
  const referrers = new Map<string, string>();

  while (queue.length) {
    const path = queue.shift()!;
    if (seen.has(path)) continue;
    seen.add(path);
    const res = await fetch(base + path, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      broken.push(`${res.status} ${path} (redirect; link directly to the destination) — from ${referrers.get(path) ?? "sitemap"}`);
      continue;
    }
    if (res.status !== 200) {
      broken.push(`${res.status} ${path} — from ${referrers.get(path) ?? "sitemap"}`);
      continue;
    }
    if (!(res.headers.get("content-type") ?? "").includes("text/html")) continue;
    const html = await res.text();
    for (const m of html.matchAll(/\shref="([^"]+)"/g)) {
      const href = m[1]!.replace(/&amp;/g, "&");
      if (!href.startsWith("/") || href.startsWith("//")) continue;
      const clean = href.split("#")[0]!.split("?")[0]!;
      if (!clean || clean.startsWith("/_next/")) continue;
      if (!seen.has(clean)) {
        queue.push(clean);
        if (!referrers.has(clean)) referrers.set(clean, path);
      }
    }
  }
  console.log(`Checked ${seen.size} internal URLs.`);
  if (broken.length) {
    console.error(broken.join("\n"));
    process.exit(1);
  }
  console.log("No broken internal links.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
