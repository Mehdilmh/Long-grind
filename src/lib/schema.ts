import { z } from "zod";

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */

export const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD");
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase-kebab-case");

export const editorialStatus = z.enum(["draft", "review", "published"]);
export type EditorialStatus = z.infer<typeof editorialStatus>;

export const sourceSchema = z.object({
  title: z.string().min(3),
  publisher: z.string().min(2),
  url: z.string().url(),
  accessed: isoDate,
  /** What this source supports, shown to readers. */
  supports: z.string().optional(),
});
export type Source = z.infer<typeof sourceSchema>;

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export const productStatus = z.enum([
  /** Not shown publicly. */
  "draft",
  /** Facts checked against sources; may be recommended. CTA only if a destination exists. */
  "verified",
  /** Discontinued or no longer recommended; hidden from new recommendations. */
  "retired",
]);

export const specSchema = z.object({
  label: z.string(),
  value: z.string(),
  /** Index into product.sources supporting this spec. */
  sourceIndex: z.number().int().nonnegative(),
});

export const productSchema = z.object({
  id: slug,
  name: z.string().min(2),
  brand: z.string().min(1),
  category: slug,
  /** One or two sentences of editorial summary (opinion; kept separate from facts). */
  summary: z.string().min(20),
  bestFor: z.string().min(5),
  considerInsteadIf: z.string().optional(),
  benefits: z.array(z.string()).min(1),
  limitations: z.array(z.string()).min(1),
  /** Verified facts only. Every spec must point to a source. */
  specs: z.array(specSchema).default([]),
  image: z
    .object({
      src: z.string(),
      alt: z.string().min(10),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
      /** e.g. "Amazon SiteStripe image (Associates license)", "Manufacturer press kit with written permission". */
      rights: z.string().min(5),
    })
    .optional(),
  affiliate: z
    .object({
      marketplace: z.enum(["US"]),
      /** Copied from Amazon (SiteStripe or product page). Never guessed. */
      destinationUrl: z.string().url(),
      /** When a human last opened the link and confirmed it reaches the right product. */
      verifiedOn: isoDate,
    })
    .optional(),
  sources: z.array(sourceSchema).min(1),
  lastVerified: isoDate,
  status: productStatus,
  /** Variants differ: note anything readers must check before buying. */
  variantNote: z.string().optional(),
});
export type Product = z.infer<typeof productSchema>;

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export const articleType = z.enum([
  "review",
  "best-of",
  "comparison",
  "roundup",
  "budget-guide",
  "setup-guide",
  "how-to",
  "gift-guide",
  "explainer",
]);
export type ArticleType = z.infer<typeof articleType>;

export const evaluationMethod = z.enum([
  /** Based on manufacturer documentation, standards and published guidance; no hands-on testing. */
  "research-based",
  /** Products were physically used by the named author. Requires testingNotes. */
  "hands-on",
]);

const inline = z.string().min(1);

export const blockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("p"), text: inline }),
  z.object({ type: z.literal("h2"), id: slug, text: inline }),
  z.object({ type: z.literal("h3"), id: slug, text: inline }),
  z.object({ type: z.literal("ul"), items: z.array(inline).min(1) }),
  z.object({ type: z.literal("ol"), items: z.array(inline).min(1) }),
  z.object({
    type: z.literal("callout"),
    tone: z.enum(["tip", "note", "warning"]),
    title: z.string(),
    text: inline,
  }),
  z.object({
    type: z.literal("steps"),
    items: z.array(z.object({ title: z.string(), text: inline })).min(2),
  }),
  z.object({
    type: z.literal("table"),
    caption: z.string(),
    columns: z.array(z.string()).min(2),
    rows: z.array(z.array(z.string())).min(1),
    /** First column is a row header. */
    note: z.string().optional(),
  }),
  z.object({
    type: z.literal("productPicks"),
    heading: z.string().optional(),
    picks: z
      .array(
        z.object({
          productId: slug,
          /** Article-specific framing, e.g. "Best for a narrow desk". */
          label: z.string(),
          why: inline,
        }),
      )
      .min(1),
  }),
  z.object({
    type: z.literal("figure"),
    illustration: z.string(),
    alt: z.string().min(10),
    caption: z.string().optional(),
  }),
  z.object({
    type: z.literal("verdict"),
    title: z.string(),
    text: inline,
  }),
  z.object({
    type: z.literal("choice"),
    options: z
      .array(z.object({ title: z.string(), chooseIf: z.array(inline).min(1) }))
      .min(2),
  }),
]);
export type Block = z.infer<typeof blockSchema>;

export const articleSchema = z
  .object({
    slug,
    title: z.string().min(10).max(110),
    /** <title> override; keep under ~60 characters. */
    seoTitle: z.string().max(65).optional(),
    description: z.string().min(70).max(165),
    /** Short line used on cards and Pinterest. */
    dek: z.string().min(20).max(200),
    type: articleType,
    category: slug,
    tags: z.array(slug).min(1).max(6),
    status: editorialStatus,
    authorId: slug,
    publishedAt: isoDate,
    /** Only set when the content meaningfully changed. */
    updatedAt: isoDate.optional(),
    method: evaluationMethod,
    testingNotes: z.string().optional(),
    hero: z.object({
      illustration: z.string(),
      alt: z.string().min(10),
      /** Optional raster image id from src/content/photos.ts; replaces the illustration as the cover. */
      photo: z.string().optional(),
    }),
    /** Direct answer shown first; written to be quotable. */
    answer: z.string().min(80),
    keyTakeaways: z.array(z.string()).min(2).max(6),
    body: z.array(blockSchema).min(5),
    faq: z.array(z.object({ q: z.string().min(8), a: inline })).default([]),
    sources: z.array(sourceSchema).default([]),
    related: z.array(slug).default([]),
    pinterest: z
      .object({
        title: z.string().max(100),
        description: z.string().max(500),
        board: z.string(),
        /** Visual template for the 2:3 pin image. See docs/PINTEREST.md. */
        template: z
          .enum(["guide", "steps", "comparison", "tips", "roundup", "gift", "inspiration", "before-after"])
          .default("guide"),
        /** Optional portrait photo id (src/content/photos.ts) used as the pin's main image. */
        photo: z.string().optional(),
        /** Required for "before-after": owner's own photos stored in /public. */
        beforeAfter: z.object({ before: z.string().startsWith("/"), after: z.string().startsWith("/") }).optional(),
      })
      .superRefine((p, ctx) => {
        if (p.template === "before-after" && !p.beforeAfter)
          ctx.addIssue({ code: "custom", message: "before-after pins need beforeAfter photo paths" });
      })
      .optional(),
  })
  .superRefine((a, ctx) => {
    if (a.method === "hands-on" && !a.testingNotes) {
      ctx.addIssue({ code: "custom", message: "hands-on articles must document testingNotes" });
    }
    if (a.updatedAt && a.updatedAt < a.publishedAt) {
      ctx.addIssue({ code: "custom", message: "updatedAt cannot precede publishedAt" });
    }
    const ids = a.body.filter((b) => b.type === "h2" || b.type === "h3").map((b) => (b as { id: string }).id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dupes.length) ctx.addIssue({ code: "custom", message: `Duplicate heading ids: ${dupes.join(", ")}` });
  });
export type Article = z.infer<typeof articleSchema>;
/** Shape authored in content files (defaults not yet applied). */
export type ArticleInput = z.input<typeof articleSchema>;

/* ------------------------------------------------------------------ */
/* Taxonomy & people                                                   */
/* ------------------------------------------------------------------ */

export const categorySchema = z.object({
  slug,
  name: z.string(),
  shortName: z.string(),
  seoTitle: z.string().max(65),
  description: z.string().min(70).max(165),
  kicker: z.string(),
  intro: z.array(z.string()).min(1),
  illustration: z.string(),
  /** Optional raster image id from src/content/photos.ts; replaces the illustration on tiles and the section cover. */
  photo: z.string().optional(),
  subtopics: z.array(z.object({ name: z.string(), description: z.string(), tag: slug })).min(2),
  /** Short evergreen primer so the page is useful on its own. */
  primer: z.object({ title: z.string(), points: z.array(z.object({ title: z.string(), text: z.string() })).min(3) }),
  /** Planned coverage shown honestly when few articles exist yet. */
  comingUp: z.array(z.string()).default([]),
});
export type Category = z.infer<typeof categorySchema>;

export const tagSchema = z.object({ slug, name: z.string() });

export const authorSchema = z.object({
  id: slug,
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  /**
   * Only true for a real, identifiable person who has approved their profile.
   * Person structured data is emitted only for verified authors.
   */
  verifiedPerson: z.boolean(),
  url: z.string().optional(),
  sameAs: z.array(z.string().url()).default([]),
});
export type Author = z.infer<typeof authorSchema>;
