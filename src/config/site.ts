import { publicEnv } from "@/lib/env";

export const site = {
  name: "LongGrind",
  domain: "longgrind.com",
  url: publicEnv.NEXT_PUBLIC_SITE_URL,
  tagline: "Gear for the long game.",
  description:
    "LongGrind helps remote workers, students, programmers, gamers and creators build better workspaces with practical buying guides, honest comparisons and clear explanations.",
  locale: "en_US",
  language: "en",
  themeColor: "#151B20",
  /** Publisher logo used in structured data. Must be a crawlable raster or SVG. */
  logoPath: "/brand/longgrind-logo-512.png",
  contactEmail: publicEnv.NEXT_PUBLIC_CONTACT_EMAIL,
  /**
   * OWNER ACTION: add real, owned social profiles here before launch.
   * They are used in Organization structured data (sameAs) and the footer.
   */
  socialProfiles: [] as { label: string; url: string }[],
  /**
   * OWNER ACTION: set to true only after the legal and trust pages have been
   * reviewed and completed. While false, those pages show a visible notice.
   */
  legalReviewComplete: false,
} as const;

export const primaryNav = [
  { label: "Desk & Workspace", href: "/desk-workspace" },
  { label: "Keyboards", href: "/keyboards-peripherals" },
  { label: "Lighting & Organization", href: "/lighting-organization" },
  { label: "Productivity", href: "/productivity-gear" },
  { label: "Gaming", href: "/gaming-setups" },
  { label: "Creators", href: "/creator-equipment" },
  { label: "Guides", href: "/buying-guides" },
] as const;

export const trustNav = [
  { label: "About LongGrind", href: "/about" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "How We Evaluate Products", href: "/how-we-evaluate" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Use", href: "/terms" },
] as const;
