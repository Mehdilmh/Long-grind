import { getCategories, getCategory } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/share-image";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "LongGrind section cover";

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const c = getCategory(category)!;
  return renderOgImage({ title: c.name, kicker: `LongGrind · ${c.kicker}`, illustration: c.illustration });
}
