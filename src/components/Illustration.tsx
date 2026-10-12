/**
 * Original LongGrind illustration, served as a static SVG file
 * (/illustrations/<name>.svg). Explicit dimensions and a fixed 3:2 box
 * prevent layout shift. Pass alt="" for purely decorative use, and
 * priority for the main above-the-fold image.
 */
export function Illustration({
  name,
  alt,
  className = "",
  priority = false,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[3/2] w-full overflow-hidden bg-charcoal ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG; next/image adds nothing for vector art */}
      <img
        src={`/illustrations/${name}.svg`}
        alt={alt}
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-full w-full object-cover"
      />
    </div>
  );
}
