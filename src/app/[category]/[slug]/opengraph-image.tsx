import { getArticle, getArticles, getCategory } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/share-image";
import { getPhoto } from "@/content/photos";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "LongGrind guide cover";

export function generateStaticParams() {
  return getArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const a = getArticle(category, slug)!;
  return renderOgImage({ title: a.title, kicker: getCategory(a.category)?.name ?? "LongGrind", illustration: a.hero.illustration, photo: getPhoto(a.hero.photo)?.share });
}
