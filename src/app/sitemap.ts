import type { MetadataRoute } from "next";
import { articlePath, getAllArticlesUnfiltered, getCategories, isCategoryIndexable } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

/** Only canonical, indexable URLs: published articles, indexable sections and trust pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const published = getAllArticlesUnfiltered().filter((a) => a.status === "published");
  const latest = published.map((a) => a.updatedAt ?? a.publishedAt).sort().at(-1);

  const staticPages = ["/about", "/editorial-policy", "/how-we-evaluate", "/affiliate-disclosure", "/privacy", "/cookies", "/terms", "/contact"];

  return [
    { url: absoluteUrl("/"), lastModified: latest },
    ...getCategories()
      .filter((c) => isCategoryIndexable(c.slug))
      .map((c) => ({ url: absoluteUrl(`/${c.slug}`), lastModified: latest })),
    ...published.map((a) => ({ url: absoluteUrl(articlePath(a)), lastModified: a.updatedAt ?? a.publishedAt })),
    ...staticPages.map((p) => ({ url: absoluteUrl(p) })),
  ];
}
