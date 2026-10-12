import type { Metadata } from "next";
import { site } from "@/config/site";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${site.url}${path === "/" ? "" : path}`;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Absolute or root-relative OG image; defaults to the route's opengraph-image. */
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  /** Use the title verbatim instead of appending the brand template. */
  absoluteTitle?: boolean;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path);
  // Route-level opengraph-image files take precedence; this default covers pages without one.
  const images = [input.image ?? { url: "/opengraph-image", width: 1200, height: 630, alt: "LongGrind — gear for the long game" }];
  return {
    title: input.absoluteTitle ? { absolute: input.title } : input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: input.type ?? "website",
      url,
      title: input.title,
      description: input.description,
      siteName: site.name,
      locale: site.locale,
      images,
      ...(input.type === "article"
        ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime ?? input.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: images.map((i) => i.url),
    },
  };
}
