# Pinterest workflow

LongGrind generates a branded 1000×1500 (2:3) Pin image for every published article at:

```
/<section>/<article-slug>/pin-image
```

Articles also include a **Save to Pinterest** link. It's a plain link to Pinterest's pin-create page: no Pinterest script loads, and nothing is shared unless the reader clicks.

> **No automated pinning is implemented.** The site does not post Pins on your behalf. Publish Pins manually, or through Pinterest's own scheduling tools or an approved partner tool, following Pinterest's current policies.

## Templates

Choose a template per article with `pinterest.template` in the article file. All templates share the brand system: an original illustration on top, a lime divider, section kicker, Fraunces title and the charcoal brand bar with the domain. The brand bar sits at the bottom so it never covers the image.

| Template | Middle section shows | Data source | Best for |
| --- | --- | --- | --- |
| `guide` (default) | Dek and up to 4 "inside this guide" headings | `dek`, H2 headings | Explainers and general guides |
| `steps` | Numbered steps | H2 headings that start with "Step N:" | Step-by-step setup guides |
| `comparison` | Two side-by-side "choose if" panels | First `choice` block | Product-versus-product comparisons |
| `tips` | Up to 4 tips | First sentence of each `keyTakeaways` item | Practical tips |
| `roundup` | Numbered list of product names with labels | `productPicks` blocks | Product roundups |
| `gift` | Same layout, headed "Gift ideas inside" | `productPicks` blocks | Gift guides |
| `inspiration` | Tall illustration and dek | Hero illustration | Desk setup inspiration |
| `before-after` | Two photos labeled Before and After | `pinterest.beforeAfter.before` / `.after` (files in `/public`) | Organization makeovers. **Only use your own real photos.** |

Product Pins show product **names only**. They never show product photos (unless rights are confirmed), prices, ratings or discounts.

## Publishing a Pin (manual checklist)

1. **Destination URL:** the canonical article URL, for example `https://longgrind.com/lighting-organization/how-to-organize-cables-under-desk`.
2. **Image:** download `/…/pin-image` from the live site, or create a new original design. Never use images you don't have rights to.
3. **Title:** `pinterest.title`. It should be unique, descriptive, and not clickbait.
4. **Description:** `pinterest.description`, plus useful context. If the destination page contains affiliate links, include a clear disclosure such as "Contains affiliate links", and follow Pinterest's current guidance on affiliate and commercial content.
5. **Board:** `pinterest.board`. Keep boards topical, for example *Desk Cable Management*, *Desk Setup Ideas* or *Keyboards & Desk Gear*.
6. **Alt text:** describe the image, not the keywords.
7. **Variety, not repetition:** create several genuinely different Pins for a guide over time (different templates or angles) instead of re-posting the same image. Space them out.

## Policies to check before you start (owner)

- Pinterest Community Guidelines, Merchant Guidelines and the current rules on affiliate links and paid partnerships.
- Amazon Associates Program Policies on using Special Links on social media and the disclosure requirements for social posts.

These policies change. Re-read them before launching and periodically afterwards.

## Not allowed

Automated or bulk spam pinning, multiple accounts to amplify reach, engagement manipulation, misleading images (for example a product photo that isn't the product sold) and hidden affiliate relationships.
