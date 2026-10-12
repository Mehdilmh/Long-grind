import { ogSize, renderOgImage } from "@/lib/share-image";
import { site } from "@/config/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "LongGrind — gear for the long game";

export default async function Image() {
  return renderOgImage({ title: "Desk setups built for the long game.", kicker: site.tagline, illustration: "hero" });
}
