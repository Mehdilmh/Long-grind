# Content workflow

LongGrind content lives in typed TypeScript files validated with [Zod](https://zod.dev). There is no database or CMS. Every build validates every article, product, category and author, and fails with a readable message if something is wrong.

| What | Where |
| --- | --- |
| Articles | `src/content/articles/<slug>.ts`, registered in `src/content/articles/index.ts` |
| Products | `src/content/products.ts` |
| Categories | `src/content/categories.ts` |
| Tags (allowed list) | `src/content/tags.ts` |
| Authors | `src/content/authors.ts` |
| Schemas and rules | `src/lib/schema.ts` |
| Readiness checks | `scripts/check-content.ts` (`npm run content:check`) |

## Editorial states

| Status | Visible on site | Indexed | In sitemap |
| --- | --- | --- | --- |
| `draft` | Only locally with `SHOW_DRAFTS=true` in development | No | No |
| `review` | Only locally with `SHOW_DRAFTS=true` in development | No | No |
| `published` | Yes | Yes | Yes |

Drafts are never built in production. Nothing is published automatically. A person changes `status` to `published` after the review checklist below.

## Adding a product

1. **Research the facts.** Use the manufacturer's own product page, manual or datasheet. Retailer listings are a fallback only, and conflicts between sources must be resolved or left out.
2. **Add an entry to `src/content/products.ts`.**
   - Every item in `specs` must have a `sourceIndex` pointing to an entry in `sources`.
   - Put opinions in `summary`, `bestFor`, `considerInsteadIf`, `benefits` and `limitations`. Keep them out of `specs`.
   - Record any version or region differences in `variantNote`.
   - Set `lastVerified` to the date you checked the sources.
   - **Never** add prices, ratings, review counts, stock or shipping information.
3. **Affiliate link (optional).** Sign in to Amazon Associates, open the exact product page, and copy the link from **SiteStripe**, or copy the product page URL containing `/dp/<ASIN>`. Paste it into `affiliate.destinationUrl` and set `verifiedOn`. Open the link once to confirm it reaches the right product. Never type or guess an ASIN.
   - Full URLs are normalized to `https://www.amazon.com/dp/<ASIN>?tag=<configured tracking ID>`.
   - `amzn.to` short links are passed through unchanged. Generate them while signed in to the `gettse00-20` account.
   - If no valid link exists, the product shows **no** buy button. That is the intended behaviour.
4. **Image (optional).** Only add `image` if you hold the rights, for example through an Amazon-approved image source used within its terms, or written permission from the manufacturer. Fill in `image.rights` and add an entry to `public/images/ASSET-MANIFEST.json`. Never download Amazon product images to the repo.
5. Set `status: "verified"` once the facts are checked. Use `"draft"` until then; drafts never appear publicly.

## Creating an article

1. **Pick a topic from the roadmap** (`docs/EDITORIAL-ROADMAP.md`) and fill in the keyword research template (`docs/keyword-research-template.csv`). Don't start writing until you can say what this article will do better than the pages already ranking.
2. **Copy an existing article** with the closest type:
   - `how-to`: `how-to-organize-cables-under-desk.ts`
   - `comparison`: `monitor-arm-vs-monitor-stand.ts`
   - `explainer`: `mechanical-keyboard-sizes-explained.ts`

   Types `review`, `best-of`, `roundup`, `budget-guide`, `setup-guide`, `gift-guide` use the same template and block set.
3. **Fill in the metadata.**
   - `title`: matches the search intent, 10 to 110 characters. `seoTitle` is 65 characters at most.
   - `description` is 70 to 165 characters and is the meta description.
   - `dek` is the one-line summary used on cards and Pinterest.
   - `category` must be one of the seven category slugs. `tags` must come from `src/content/tags.ts`.
   - `method`: `"research-based"` unless the named author physically used the products. `"hands-on"` requires `testingNotes`.
   - `answer` is a direct two-to-five-sentence answer to the main question, shown first. Write it so it could be quoted on its own.
4. **Write the body with blocks.**

   | Block | Use |
   | --- | --- |
   | `p` | Paragraph text |
   | `h2` | Heading, with a unique `id`. `h2` blocks build the table of contents |
   | `h3` | Subheading, with a unique `id` |
   | `ul` / `ol` | Lists |
   | `callout` | `tip`, `note` or `warning` box |
   | `steps` | Numbered step cards |
   | `table` | Responsive comparison table. The first column is the row header. No scores or prices |
   | `productPicks` | Product cards from the catalog, with a `label` and `why` for this article |
   | `choice` | "Choose X if… / Choose Y if…" cards |
   | `figure` | One of the original illustrations, with alt text |
   | `verdict` | Closing summary |

   Inline text supports `[link text](/internal/path)`, `[text](https://external)`, `**bold**` and `*italic*`. No raw HTML.
5. **Link internally.** Link to related guides using descriptive anchor text, and set `related` to two or three slugs. Informational articles should link to the relevant buying guide or comparison.
6. **Sources.** Add every source with `accessed` dates and a short `supports` note saying what it backs up.
7. **FAQ.** Only include questions real readers ask. FAQs are visible on the page; we don't add FAQ structured data.
8. **Pinterest.** Add `pinterest.title`, `description`, `board` and `template` (see `docs/PINTEREST.md`).
9. **Register the file** in `src/content/articles/index.ts` with `status: "draft"`.

## Review checklist (before setting `status: "published"`)

- [ ] Every factual claim matches its cited source, and sources are reachable.
- [ ] No invented testing, experience, quotes, prices, ratings, scores, stock or discount claims.
- [ ] Opinions are framed as opinions. Unverified points are removed or labeled.
- [ ] The method label is correct (research-based vs hands-on).
- [ ] Recommended products are `verified`, and any affiliate links were opened and checked.
- [ ] Headings follow a logical H2/H3 order, and every illustration has meaningful alt text.
- [ ] Internal links resolve. `npm run content:check` passes with no errors.
- [ ] The article adds something the current top results don't: clearer structure, original comparison, better decision help or sources.
- [ ] Any AI-assisted drafting was rewritten and fact-checked by a person.
- [ ] `npm run verify` and `npm run build` pass.

## Updating an article

- Change `updatedAt` only for meaningful updates: new facts, changed recommendations or corrections.
- Re-verify product facts and update `lastVerified`. The content check warns after 180 days.
- If you change a slug or category, add a permanent redirect in `src/config/redirects.ts`.
