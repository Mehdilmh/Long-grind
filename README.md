# LongGrind.com

**Gear for the long game.** LongGrind is an editorial affiliate publication about desk setups, productivity gear, keyboards, lighting and organization, and the gaming and creator equipment that lives on a desk.

The site is a statically generated Next.js app with typed, validated content and a strict affiliate-link system. Its guides are transparent about methods and sources, and it publishes no invented ratings, prices or testimonials.

> **Status:** the code is built and tested, but the site is **not ready for commercial launch**. Owner configuration, affiliate links, legal review and deployment are still needed; see [`docs/LAUNCH-CHECKLIST.md`](docs/LAUNCH-CHECKLIST.md).

## Stack

| | |
| --- | --- |
| Framework | Next.js 15.5 (App Router), React 19.1, TypeScript 5.9 |
| Styling | Tailwind CSS 3.4, `next/font` (self-hosted Fraunces + Inter Tight) |
| Icons | lucide-react |
| Content | Typed TypeScript content files validated with Zod |
| Images | Original SVG illustrations; OG and Pinterest images generated at build time with `next/og` |
| Tests | Vitest, a content readiness script and an internal link crawler |

No database, CMS or paid API is required. There are no client components: every page is server-rendered and statically generated.

## Getting started

Requirements: Node.js 20.9 or newer (developed on Node 22) and npm.

```bash
npm install
cp .env.example .env.local   # optional — every variable has a safe default
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build. Also validates all content and fails on schema errors |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm test` | Unit tests (affiliate URLs, disclosures, content integrity, sitemap, structured data) |
| `npm run content:check` | Publication readiness: sources, internal links, forbidden claims, product verification, orphans |
| `npm run links:check` | Crawl a running site for broken internal links (`BASE_URL=http://localhost:3000`) |
| `npm run brand:png` | Regenerate logo SVG and PNG assets in `public/brand/` |
| `npm run verify` | typecheck + lint + test + content check |

## Project structure

```
src/
  app/                      Routes (App Router)
    page.tsx                Homepage
    [category]/page.tsx     7 section landing pages
    [category]/[slug]/      Article template, OG image, /pin-image (1000×1500)
    illustrations/[file]/   Static SVG illustrations
    about, editorial-policy, how-we-evaluate, affiliate-disclosure,
    privacy, cookies, terms, contact, not-found
    sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
  components/               Header, footer, cards, article blocks, affiliate + disclosure components
  config/
    site.ts                 Name, URL, navigation, owner flags
    affiliate.ts            Marketplaces, tracking IDs, disclosure text
    redirects.ts            Permanent redirects for changed URLs
  content/                  Articles, products, categories, tags, authors
  lib/                      Schemas, content loader, affiliate builder, SEO, JSON-LD, illustrations, share images
  assets/fonts/             OFL fonts used for generated images (+ license files)
scripts/                    check-content, check-links, build-brand-png
tests/                      Vitest unit tests
docs/                       Workflow, roadmap, SEO, Pinterest, images, launch checklist
public/brand, public/images Brand assets and the image asset manifest
```

## Configuration

All configuration is optional for local development. See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://longgrind.com`, no trailing slash) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shown on `/contact` and in the privacy policy. Must be a real, monitored inbox |
| `AMAZON_DEFAULT_MARKETPLACE` | `US` |
| `AMAZON_ASSOCIATE_TAG_US` | Amazon.com tracking ID (default `gettse00-20`) |
| `AMAZON_CREATORS_API_*` | Placeholders for a future approved API integration (server-only, unused) |
| `NEXT_PUBLIC_ANALYTICS_DOMAIN` / `_SCRIPT_SRC` | Optional cookieless, Plausible-compatible analytics. Nothing loads when unset |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console meta tag |
| `NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY` | Pinterest domain claim meta tag |
| `NEXT_PUBLIC_NEWSLETTER_FORM_ACTION` / `_PROVIDER_NAME` | Newsletter form. **Only renders when set** to a real provider endpoint |
| `SHOW_DRAFTS` | `true` to preview draft and review articles in development (never in production) |

Variables are validated with Zod in `src/lib/env.ts`, and invalid values fail the build. Only `NEXT_PUBLIC_*` values reach the browser; tracking IDs and API credentials stay server-side.

Owner flags in `src/config/site.ts`:
- `legalReviewComplete`: keep this `false` until the legal pages have been reviewed. While it's false, those pages show a visible "Template pending owner review" notice.
- `socialProfiles`: real profile URLs, used in the footer and in Organization structured data.

## Affiliate system

- **One builder** (`src/lib/affiliate.ts`) and **one component** (`AffiliateButton` in `src/components/Affiliate.tsx`).
- Full Amazon URLs must contain a real `/dp/<ASIN>` or `/gp/product/<ASIN>` path copied from Amazon. They're normalized to `https://www.amazon.com/dp/<ASIN>?tag=<tracking ID>`, which replaces any other tag. `amzn.to` SiteStripe links pass through unchanged.
- Anything invalid or missing → **no CTA is rendered**. Products can exist with verified facts and no link.
- Links open in a new tab with `rel="sponsored nofollow noopener noreferrer"` and are labeled "Paid link".
- Disclosures:
  - The exact Amazon statement, "As an Amazon Associate I earn from qualifying purchases.", appears in a banner before the first recommendation on any page with affiliate links, in the footer of every page, and on `/affiliate-disclosure`.
  - Link-level text, "As an affiliate, we may earn a commission from qualifying purchases.", appears next to product CTAs.
- No prices, ratings, review counts, stock or discount claims are stored or displayed. There's no scraping and no Amazon images.

Having these features in place **does not by itself make the site compliant**. Read the current Associates Operating Agreement and policies before launch.

## Writing content

See [`docs/CONTENT-WORKFLOW.md`](docs/CONTENT-WORKFLOW.md) for adding products, creating guides, reviewing sources and publishing. In short:

1. Add or verify products in `src/content/products.ts` (sourced specs only).
2. Copy an article template in `src/content/articles/`, write it with `status: "draft"` and register it in `index.ts`.
3. Preview it with `SHOW_DRAFTS=true npm run dev`.
4. Run `npm run content:check` and `npm run verify`, review it against the checklist, then set `status: "published"`.

Further documentation:
- [`docs/EDITORIAL-ROADMAP.md`](docs/EDITORIAL-ROADMAP.md): 20-topic roadmap. Topics are hypotheses, not measured keyword data.
- [`docs/keyword-research-template.csv`](docs/keyword-research-template.csv)
- [`docs/SEO.md`](docs/SEO.md): metadata, structured data, AI discovery, validation steps
- [`docs/PINTEREST.md`](docs/PINTEREST.md): pin templates and the manual pinning workflow
- [`docs/IMAGES.md`](docs/IMAGES.md) and [`public/images/ASSET-MANIFEST.json`](public/images/ASSET-MANIFEST.json)
- [`docs/LAUNCH-CHECKLIST.md`](docs/LAUNCH-CHECKLIST.md): owner actions, test results, known limitations

## Deployment

Any host that runs Next.js 15 works. Every page is static, and the build also needs network access to download Google Fonts.

**Vercel (simplest):** import the repository, keep the default build settings (`npm run build`), add the environment variables from `.env.example`, then attach `longgrind.com` and choose one canonical host (apex or `www`) with a redirect from the other.

**Node server / other platforms (Netlify, Render, Fly, a VPS):** run `npm ci && npm run build`, then `npm start` (port 3000, or set `PORT`) behind HTTPS. Netlify uses its Next.js runtime automatically.

After deploying: submit `/sitemap.xml` in Google Search Console and run the checks listed in the launch checklist.

Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS, COOP) are set in `next.config.ts`. HSTS is set without `preload`; add it only once you're committed to HTTPS on all subdomains.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Build fails with `Invalid article "<slug>"` | The message lists each field that failed validation (for example description length). Fix the content file. |
| Build fails fetching fonts | `next/font/google` downloads fonts at build time. Make sure the build environment can reach `fonts.googleapis.com`, or switch to `next/font/local` using the files in `src/assets/fonts`. |
| A product shows no buy button | Expected until `affiliate.destinationUrl` holds a valid Amazon URL. Run `npm run content:check` to see why a URL was rejected. |
| A section page is `noindex` | It has no published guides of its own yet. Publishing one makes it indexable and adds it to the sitemap. |
| Draft article isn't visible | Set `SHOW_DRAFTS=true` and use `npm run dev`. Drafts are never shown in production builds. |
| `NEXT_PUBLIC_SITE_URL must not end with a slash` | Remove the trailing `/`. |
| OG or pin image looks outdated | Images are generated at build time; rebuild and redeploy. Social platforms also cache images. Use their debuggers to refresh. |

## License

Code and original content © LongGrind. Fonts in `src/assets/fonts` are licensed under the SIL Open Font License 1.1 (license files included).
