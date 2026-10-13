import Image from "next/image";
import type { Photo, PhotoCredit } from "@/content/photos";

/**
 * Raster image in a fixed-ratio box (no layout shift), responsive via
 * next/image. AI-generated images carry a visible label; stock photos show
 * their credit as a small caption under the image.
 */
export function PhotoImage({
  photo,
  alt = photo.alt,
  priority = false,
  className = "",
  ratio = "aspect-[3/2]",
  sizes = "(min-width: 1280px) 1200px, 100vw",
  showCredit = true,
}: {
  photo: Photo;
  /** Set false when the caller renders <PhotoCaption> itself (e.g. outside a zoom-on-hover wrapper). */
  showCredit?: boolean;
  /** Override the photo's alt text, e.g. "" where a visible heading already describes it. */
  alt?: string;
  priority?: boolean;
  className?: string;
  ratio?: string;
  sizes?: string;
}) {
  const credit = showCredit ? photo.credit : undefined;
  const box = (
    <div className={`relative w-full overflow-hidden bg-charcoal ${ratio} ${credit ? "" : className}`}>
      <Image src={photo.src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      {photo.label && (
        <span className="absolute bottom-2 right-2 bg-charcoal/80 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory">
          {photo.label}
        </span>
      )}
    </div>
  );
  if (!credit) return box;

  return (
    <figure className={className}>
      {box}
      <PhotoCaption credit={credit} />
    </figure>
  );
}

/** Small "Photo: name / source" credit linking to the photo's own page. Use as="p" outside a <figure>. */
export function PhotoCaption({
  credit,
  as: Tag = "figcaption",
  className = "",
}: {
  credit: PhotoCredit;
  as?: "figcaption" | "p";
  className?: string;
}) {
  return (
    <Tag className={`mt-1.5 text-[0.7rem] leading-snug opacity-70 ${className}`}>
      Photo:{" "}
      {/* relative z-10 keeps the link above stretched card links (after:inset-0) */}
      <a href={credit.url} target="_blank" rel="noopener noreferrer" className="relative z-10 underline-offset-2 hover:underline">
        {credit.name} / {credit.source}
      </a>
    </Tag>
  );
}
