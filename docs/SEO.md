# SEO, structured data and AI discovery

## What's implemented

| Area | Implementation |
| --- | --- |
| Titles and descriptions | Unique per page via `pageMetadata()` in `src/lib/seo.ts`. Article titles use `seoTitle` when set. |
| Canonicals | Absolute canonical URL on every page, built from `NEXT_PUBLIC_SITE_URL`. |
| Trailing slashes | None. `/about/` redirects with a 308 to `/about` (`trailingSlash: false`). |
| Robots meta | `index, follow` for published content. `noindex, follow` for the 404 page, draft and review previews, and **sections with no published guides of their own**. Those sections become indexable automatically once they have one. |
| Sitemap | `/sitemap.xml` (`src/app/sitemap.ts`) lists only the homepage, indexable sections, published articles and trust pages. |
| robots.txt | `/robots.txt` allows all crawlers to fetch everything, including CSS, JS and images, and points to the sitemap. Drafts are not blocked by robots.txt; they simply aren't built in production. |
| Redirects | `src/config/redirects.ts`, served as permanent (308) redirects. |
| 404 | Custom `not-found.tsx` with section and article links, served with HTTP 404. |
| Open Graph / X | Per-page OG metadata. Generated 1200×630 images for the home page, each section and each article. |
| Headings | One `<h1>` per page, logical H2 and H3 order. Checked automatically on 17 routes at 5 widths. |
| Breadcrumbs | Visible breadcrumbs plus `BreadcrumbList` JSON-LD on sections, articles and trust pages. |
| Internal links | Section → articles, article → related guides, inline contextual links, a "related reading" block on sections, and "keep reading" on articles. `npm run content:check` warns about orphans. |
| Language | `<html lang="en-US">`, UTF-8. |
| Performance | All pages are statically generated, with no client components and about 103 kB shared first-load JS (mostly the Next.js and React runtime). Illustrations are small cacheable SVG files with explicit dimensions (no layout shift) and lazy loading below the fold. Fonts are self-hosted by `next/font`. |

## Structured data

| Type | Where | Notes |
| --- | --- | --- |
| `Organization` | Every page | Name, URL, logo. `sameAs` is added when `site.socialProfiles` is filled in. |
| `WebSite` | Every page | No `SearchAction`, because the site has no search results page. |
| `BreadcrumbList` | Sections, articles, trust pages | Matches the visible breadcrumbs. |
| `Article` | Articles | Credits the **Organization** as author, because no verified individual author exists yet. When a real author is added with `verifiedPerson: true`, a `Person` is emitted instead. |

Deliberately **not** emitted: `Product`, `Review`, `AggregateRating`, `Offer` and `FAQPage`. The site doesn't publish ratings, prices or hands-on reviews, and structured data must match visible content. FAQs remain visible for readers.

### Validation still required (needs a public URL)

1. Deploy, then run key URLs through Google's [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/).
2. In Google Search Console, submit `https://longgrind.com/sitemap.xml` and inspect a few URLs.
3. Locally we verified that every JSON-LD block parses and contains the expected `@type`s (see the launch checklist).

## AI discovery and answer engines

The same practices that help people help AI systems understand and cite a page:

- **A direct answer first.** Each article opens with "The short answer", a self-contained summary of the main question.
- **Question-shaped headings** that match how people phrase the problem.
- **Sourced facts** with publisher, link and access date, kept separate from opinions.
- **Method labels** ("Research-based overview") and visible publication and update dates.
- **Server-rendered HTML.** All content is in the initial HTML, with no client-side rendering.

What we have **not** done, on purpose:

- No `llms.txt`. It isn't a ranking requirement for Google and doesn't replace conventional SEO. Add one only if a specific service you care about documents using it.
- No crawler-specific rules in `robots.txt`. If you later want to allow or block specific AI crawlers, check each operator's current documentation for user-agent names and behaviour before adding rules, and be aware that blocking some crawlers can affect visibility in the corresponding products.
- No AI-only landing pages, mass FAQ pages or fake expert quotes.

Neither search rankings nor AI citations are guaranteed.

## Owner checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production origin. It must be HTTPS with no trailing slash.
- [ ] Verify the domain in Google Search Console (set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, or use DNS verification) and submit the sitemap.
- [ ] Optionally verify in Bing Webmaster Tools.
- [ ] Add real social profile URLs to `site.socialProfiles` once they exist.
- [ ] Run the Rich Results Test on one article and one section after deployment.
