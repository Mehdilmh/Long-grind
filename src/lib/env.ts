import { z } from "zod";

/**
 * Environment validation. Every variable is optional so the site runs locally
 * without credentials; invalid values fail fast at build time.
 */
const emptyToUndefined = (v: unknown) => (typeof v === "string" && v.trim() === "" ? undefined : v);
const optionalString = z.preprocess(emptyToUndefined, z.string().optional());
const optionalUrl = z.preprocess(emptyToUndefined, z.string().url().optional());

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .url()
      .refine((v) => !v.endsWith("/"), "NEXT_PUBLIC_SITE_URL must not end with a slash")
      .default("https://longgrind.com"),
  ),
  NEXT_PUBLIC_CONTACT_EMAIL: z.preprocess(emptyToUndefined, z.string().email().optional()),
  NEXT_PUBLIC_ANALYTICS_DOMAIN: optionalString,
  NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC: optionalUrl,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: optionalString,
  NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY: optionalString,
  NEXT_PUBLIC_NEWSLETTER_FORM_ACTION: optionalUrl,
  NEXT_PUBLIC_NEWSLETTER_PROVIDER_NAME: optionalString,
});

const serverSchema = z.object({
  AMAZON_DEFAULT_MARKETPLACE: z.preprocess(emptyToUndefined, z.enum(["US"]).default("US")),
  AMAZON_ASSOCIATE_TAG_US: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .regex(/^[a-z0-9-]+-\d{2}$/i, "Amazon tracking IDs look like 'yourname-20'")
      .default("gettse00-20"),
  ),
  SHOW_DRAFTS: z.preprocess(emptyToUndefined, z.enum(["true", "false"]).default("false")),
});

// Next.js inlines NEXT_PUBLIC_* only when referenced literally, so list them explicitly.
export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NEXT_PUBLIC_ANALYTICS_DOMAIN: process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN,
  NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC: process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY: process.env.NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY,
  NEXT_PUBLIC_NEWSLETTER_FORM_ACTION: process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION,
  NEXT_PUBLIC_NEWSLETTER_PROVIDER_NAME: process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER_NAME,
});

/** Server-side values. Pages are server components, so these never reach client bundles. */
export const serverEnv = serverSchema.parse({
  AMAZON_DEFAULT_MARKETPLACE: process.env.AMAZON_DEFAULT_MARKETPLACE,
  AMAZON_ASSOCIATE_TAG_US: process.env.AMAZON_ASSOCIATE_TAG_US,
  SHOW_DRAFTS: process.env.SHOW_DRAFTS,
});

export const showDrafts = process.env.NODE_ENV !== "production" && serverEnv.SHOW_DRAFTS === "true";
