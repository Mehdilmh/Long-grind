import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/seo";
import type { Article, Author } from "@/lib/schema";
import { plainText } from "@/lib/text";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: { "@type": "ImageObject", url: absoluteUrl(site.logoPath), width: 512, height: 512 },
    slogan: site.tagline,
    ...(site.socialProfiles.length ? { sameAs: site.socialProfiles.map((s) => s.url) } : {}),
  };
}

export function websiteJsonLd() {
  // No SearchAction: the site has no internal search results page.
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": orgId },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

/**
 * Article markup. Author is a Person only for verified, real authors;
 * otherwise the publishing Organization is credited. No ratings, prices or
 * review markup are emitted because the site doesn't publish them.
 */
export function articleJsonLd(a: Article, author: Author | undefined, path: string) {
  const authorNode =
    author?.verifiedPerson
      ? { "@type": "Person", name: author.name, ...(author.url ? { url: absoluteUrl(author.url) } : {}), ...(author.sameAs.length ? { sameAs: author.sameAs } : {}) }
      : { "@type": "Organization", name: author?.name ?? site.name, url: absoluteUrl("/about") };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: a.title,
    description: a.description,
    image: [absoluteUrl(`${path}/opengraph-image`)],
    datePublished: a.publishedAt,
    dateModified: a.updatedAt ?? a.publishedAt,
    author: [authorNode],
    publisher: { "@id": orgId },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en-US",
    articleSection: a.category,
    keywords: a.tags.join(", "),
    abstract: plainText(a.answer),
    isPartOf: { "@id": websiteId },
  };
}
