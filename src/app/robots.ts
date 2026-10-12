import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * Allow all crawlers to fetch all public content, including CSS/JS/images
 * needed for rendering. No crawler-specific rules are added; review current
 * crawler documentation before adding any (see docs/SEO.md).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
