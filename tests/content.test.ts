import { describe, expect, it } from "vitest";
import {
  articlePath,
  getAllArticlesUnfiltered,
  getAllProducts,
  getArticles,
  getCategories,
  getProduct,
  internalLinks,
  isCategoryIndexable,
  readingTime,
} from "@/lib/content";
import { hasAffiliateLink } from "@/components/Affiliate";
import sitemap from "@/app/sitemap";
import { articleJsonLd } from "@/lib/structured-data";
import { getAuthor } from "@/lib/content";
import type { Product } from "@/lib/schema";

describe("content integrity", () => {
  it("has three published launch articles", () => {
    expect(getAllArticlesUnfiltered().filter((a) => a.status === "published")).toHaveLength(3);
  });

  it("has all seven required categories", () => {
    expect(getCategories().map((c) => c.slug)).toEqual([
      "desk-workspace",
      "keyboards-peripherals",
      "lighting-organization",
      "productivity-gear",
      "gaming-setups",
      "creator-equipment",
      "buying-guides",
    ]);
  });

  it("only links internally to pages that exist", () => {
    const paths = new Set(getArticles().map(articlePath));
    for (const a of getArticles()) for (const l of internalLinks(a)) expect(paths.has(l.split("#")[0]!)).toBe(true);
  });

  it("computes a reading time", () => {
    for (const a of getArticles()) expect(readingTime(a)).toBeGreaterThan(3);
  });

  it("hides draft products from the public site", () => {
    expect(getAllProducts().some((p) => p.status === "draft")).toBe(true);
    expect(getProduct("ergotron-lx-desk-arm")).toBeUndefined();
  });
});

describe("affiliate CTAs", () => {
  it("never renders a CTA for products without a verified destination", () => {
    for (const p of getAllProducts()) if (!p.affiliate) expect(hasAffiliateLink(p)).toBe(false);
  });

  it("renders a CTA only for valid destinations", () => {
    const base = getAllProducts()[0]!;
    const good: Product = { ...base, affiliate: { marketplace: "US", destinationUrl: "https://www.amazon.com/dp/B0ABCDEF12", verifiedOn: "2026-10-12" } };
    const bad: Product = { ...base, affiliate: { marketplace: "US", destinationUrl: "https://www.amazon.com/s?k=keyboards", verifiedOn: "2026-10-12" } };
    expect(hasAffiliateLink(good)).toBe(true);
    expect(hasAffiliateLink(bad)).toBe(false);
  });

  it("stores no prices, ratings or review counts in the product catalog", () => {
    const json = JSON.stringify(getAllProducts());
    expect(json).not.toMatch(/\$\s?\d|rating|reviewCount|stars?\b|in stock/i);
  });
});

describe("SEO", () => {
  it("sitemap contains only published articles and indexable sections", () => {
    const urls = sitemap().map((e) => new URL(e.url).pathname);
    for (const a of getAllArticlesUnfiltered()) {
      expect(urls.includes(articlePath(a))).toBe(a.status === "published");
    }
    for (const c of getCategories()) expect(urls.includes(`/${c.slug}`)).toBe(isCategoryIndexable(c.slug));
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("Article JSON-LD has no ratings/offers and credits an Organization for unverified authors", () => {
    for (const a of getArticles()) {
      const ld = articleJsonLd(a, getAuthor(a.authorId), articlePath(a));
      const json = JSON.stringify(ld);
      expect(json).not.toMatch(/"(aggregateRating|reviewRating|offers|price|review)"/);
      expect((ld.author[0] as { "@type": string })["@type"]).toBe("Organization");
    }
  });
});
