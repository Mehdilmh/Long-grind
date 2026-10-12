import Image from "next/image";
import type { Photo } from "@/content/photos";

/**
 * Raster image in a fixed-ratio box (no layout shift), responsive via
 * next/image. AI-generated images carry a visible label.
 */
export function PhotoImage({
  photo,
  priority = false,
  className = "",
  ratio = "aspect-[3/2]",
  sizes = "(min-width: 1280px) 1200px, 100vw",
}: {
  photo: Photo;
  priority?: boolean;
  className?: string;
  ratio?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-charcoal ${ratio} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {photo.label && (
        <span className="absolute bottom-2 right-2 bg-charcoal/80 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory">
          {photo.label}
        </span>
      )}
    </div>
  );
}
