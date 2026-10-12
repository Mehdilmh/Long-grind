# Launch checklist, test results and known limitations

LongGrind is **not ready for commercial launch** until every item under "Owner actions" is done. The code is built and tested. What remains is owner-specific configuration, verification, legal review and content.

## Owner actions (required before launch)

### Affiliate program
- [ ] Confirm the Amazon Associates account for `gettse00-20` is active and in good standing, and that longgrind.com is listed as an approved site in Associates Central.
- [ ] Read the current **Amazon Associates Operating Agreement**, **Program Policies** and **Associates Program IP License**, and confirm that the site's disclosures, link formats and content comply with them. Rules change, and having the features in place doesn't guarantee compliance.
- [ ] Note the qualifying-sales requirement for new Associates accounts, if it applies to yours, and its deadline.
- [ ] Add real product links: for each `verified` product in `src/content/products.ts`, copy the SiteStripe or product URL while signed in, paste it into `affiliate.destinationUrl`, open it once to confirm the product, then run `npm run content:check`. **Until this is done, the site shows no buy buttons.**
- [ ] If you apply for the official Amazon Creators API (or another approved data source), implement it server-side following its current rules on attribution, refresh and caching. Credentials go in env vars only.

### Legal and trust
- [ ] Have the **Privacy Policy**, **Terms of Use** and **Cookie Policy** reviewed by a qualified professional, and fill in every highlighted `[placeholder]` (legal name, address if required, hosting provider, governing law, request process).
- [ ] Review the **Editorial Policy**, **About** and **How We Evaluate** pages so they describe how you actually work.
- [ ] Set `NEXT_PUBLIC_CONTACT_EMAIL` to a real, monitored address.
- [ ] Add real author profiles (with consent) in `src/content/authors.ts`, or keep the editorial-team byline. Never invent people or credentials.
- [ ] After review, set `legalReviewComplete: true` in `src/config/site.ts` to remove the "Template pending owner review" notices.

### Content
- [ ] Re-read the three launch articles and confirm you're comfortable standing behind every statement. Check each source link from a normal browser. The OSHA pages were cited from search results because osha.gov wasn't reachable from the build environment.
- [ ] Validate the next topics with the keyword template before writing (`docs/EDITORIAL-ROADMAP.md`).
- [ ] Optionally add licensed photography (`docs/IMAGES.md`).

### Deployment and accounts
- [ ] Deploy (see README), set `NEXT_PUBLIC_SITE_URL=https://longgrind.com`, point DNS and make sure HTTPS works.
- [ ] Choose one canonical host (`longgrind.com` vs `www.longgrind.com`) and redirect the other to it at the host or DNS level.
- [ ] Google Search Console: verify, submit `/sitemap.xml`, inspect key URLs.
- [ ] Run the Rich Results Test and the Schema Markup Validator on an article and a section page.
- [ ] Run Lighthouse or PageSpeed Insights against the **live** URLs, since hosting affects performance.
- [ ] Optional: analytics (`NEXT_PUBLIC_ANALYTICS_DOMAIN`). If you choose anything that sets cookies or collects personal data, update the privacy and cookie pages and add consent handling that blocks it until visitors agree.
- [ ] Optional: newsletter (`NEXT_PUBLIC_NEWSLETTER_FORM_ACTION`) with a real provider, then update the privacy policy.
- [ ] Pinterest: create a business account, claim the domain (`NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY`) and read the current affiliate and merchant guidelines before pinning.

## Tests and checks that were run (2026-10-12)

| # | Check | Result |
| --- | --- | --- |
| 1 | Repository inspection | The repo was empty, so the project was created from scratch (Next.js 15.5 App Router, React 19.1, TypeScript 5.9, Tailwind 3.4, Zod). |
| 2–3 | `next build` (production) | ✅ Passes. 52 static routes generated. |
| 4 | `tsc --noEmit`, `eslint .` | ✅ No errors |
| 5 | Unit tests (`vitest run`) | ✅ 26/26 pass: affiliate URL construction, rejection of bad URLs, exact disclosure text, content integrity, sitemap contents, JSON-LD without ratings or offers |
| 6 | Pages respond | ✅ Home, 7 sections, 3 articles, 8 trust/legal pages: 200. Unknown URLs: 404 with a custom page |
| 7 | Responsive layout | ✅ No horizontal overflow at 360, 390, 768, 1024 and 1440 px on representative pages. Screenshots reviewed at desktop and mobile widths |
| 8 | Metadata and canonicals | ✅ Unique titles and descriptions, absolute canonicals, OG type and image. Sections without their own guides are `noindex, follow` |
| 9 | Sitemap and robots | ✅ The sitemap lists only 16 canonical, indexable URLs. robots.txt allows everything and references the sitemap |
| 10 | Affiliate URLs | ✅ Normalized to `https://www.amazon.com/dp/<ASIN>?tag=gettse00-20`; foreign tags replaced; non-Amazon, lookalike, http and search URLs rejected (unit tests) |
| 11 | Disclosure placement | ✅ The banner renders before content on any article with a valid affiliate link, link-level text sits beside each CTA, and the Amazon statement is in the footer on every page. Currently no product has a link, so no CTA or banner shows. This is verified by test |
| 12 | Missing URLs create no CTA | ✅ Unit test; manual check that the pages contain no `amazon.com/dp` links |
| 13 | No invented ratings, prices or reviews | ✅ The content check scans for prices, scores, stars, testing claims and urgency. Tests assert the catalog and JSON-LD contain none |
| 14 | Image provenance | ✅ All images are original (manifest in `public/images/ASSET-MANIFEST.json`). Fonts are OFL with license files included |
| 15 | Accessibility | ✅ axe-core (WCAG 2.1 A/AA plus best practices): 0 violations on 20 routes at 390 px and 1440 px. Keyboard: the skip link is first and focus rings are visible. The mobile menu works without JavaScript. With reduced motion, animations are effectively disabled |
| 16 | Broken internal links | ✅ The crawler checked 31 internal URLs (pages, OG and pin images): 0 broken |
| 17 | Secrets | ✅ No `.env` committed. `.env.example` has placeholders only. No `AMAZON_*` values in `.next/static` client bundles |
| — | Lighthouse 12 (local `next start`, simulated throttling) | Mobile: Performance 94 (home), 93 (article), 97 (section); Accessibility, Best Practices and SEO 100. Desktop: 100 in every category. CLS 0. Local results; re-measure in production |

### Checks that need a live URL or external account (not done)

- Google Rich Results Test, Schema Markup Validator, Search Console coverage
- Field Core Web Vitals (CrUX) and PageSpeed Insights on the production host
- Pinterest URL debugger and domain claim
- Whether Amazon accepts the site and links (Associates Central)
- Real-device testing on iOS Safari and Android Chrome

## Known limitations

- **No affiliate links yet.** Product destinations must be added by the owner from SiteStripe. The site deliberately shows no buy buttons until then.
- **No product photos.** Product cards use a typographic panel until image rights are confirmed.
- **No third-party photography.** Stock photo sites were unreachable from the build environment, so all imagery is original illustration.
- **Four of the seven sections have no guides of their own yet.** They have original intros, primers and related reading, and stay `noindex` until a guide is published in them.
- **Single author byline.** No verified individual authors, so `Article` structured data credits the organization.
- **Research-based only.** No hands-on testing has been done, and none is claimed.
- **Some source caveats.** Several sources were verified through search-result excerpts because the publishers' sites (for example osha.gov) were unreachable from the build environment. The owner should open each source link and confirm the cited statements.
- **No search, newsletter or contact form.** These are intentionally absent until real backends exist.
- **No automated Pinterest posting**, by design.
- **Single marketplace (Amazon.com).** Others can be added in `src/config/affiliate.ts` after approval.
