import { Illustration } from "./Illustration";
import { PhotoImage } from "./PhotoImage";
import { getPhoto } from "@/content/photos";

/** Article cover: the photo when one is set, otherwise the original illustration. */
export function Cover({
  hero,
  priority = false,
  sizes,
}: {
  hero: { illustration: string; alt: string; photo?: string };
  priority?: boolean;
  sizes?: string;
}) {
  const photo = getPhoto(hero.photo);
  if (photo) return <PhotoImage photo={photo} priority={priority} sizes={sizes} />;
  return <Illustration name={hero.illustration} alt={hero.alt} priority={priority} />;
}
