/**
 * Raster images used on the site. Every entry must also be recorded in
 * public/images/ASSET-MANIFEST.json with its provenance and license.
 *
 * `share` points at a JPEG copy used when generating Open Graph / Pinterest
 * images at build time (the image renderer does not read WebP).
 */
export interface Photo {
  src: string;
  share: string;
  width: number;
  height: number;
  alt: string;
  /** Shown on the image so AI art is never mistaken for a product photo. */
  label?: string;
}

const AI_LABEL = "AI-generated illustration";

export const photos = {
  "desk-flatlay": {
    src: "/images/photos/desk-flatlay.webp",
    share: "src/assets/share/desk-flatlay.jpg",
    width: 1536,
    height: 1024,
    alt: "Top-down view of a tidy desk mat with headphones, a compact keyboard, a mouse, a lime-green notebook, a pen, a coffee mug and a plant.",
    label: AI_LABEL,
  },
  "cover-cable-management": {
    src: "/images/photos/cover-cable-management.webp",
    share: "src/assets/share/cover-cable-management.jpg",
    width: 1536,
    height: 1024,
    alt: "Underside of a desk with a metal cable tray holding a power strip, cables bundled with ties, and one sleeve running down the leg to a wall outlet.",
    label: AI_LABEL,
  },
  "pin-cable-management": {
    src: "/images/photos/pin-cable-management.webp",
    share: "src/assets/share/pin-cable-management.jpg",
    width: 1024,
    height: 1536,
    alt: "A clean desk with no visible cables on top and a cable tray underneath, against an ivory wall.",
    label: AI_LABEL,
  },
  "cover-monitor-arm-vs-stand": {
    src: "/images/photos/cover-monitor-arm-vs-stand.webp",
    share: "src/assets/share/cover-monitor-arm-vs-stand.jpg",
    width: 1536,
    height: 1024,
    alt: "Two identical monitors on one desk: the left on its own stand, the right on a clamp-mounted arm leaving the desk surface clear.",
    label: AI_LABEL,
  },
  "pin-monitor-arm": {
    src: "/images/photos/pin-monitor-arm.webp",
    share: "src/assets/share/pin-monitor-arm.jpg",
    width: 1024,
    height: 1536,
    alt: "A monitor floating on a black arm above a clear charcoal desk with a keyboard and a mug.",
    label: AI_LABEL,
  },
  "cover-keyboard-sizes": {
    src: "/images/photos/cover-keyboard-sizes.webp",
    share: "src/assets/share/cover-keyboard-sizes.jpg",
    width: 1536,
    height: 1024,
    alt: "Four dark keyboards of decreasing width stacked on a desk mat, from a full-size board with number pad down to a compact board.",
    label: AI_LABEL,
  },
  "pin-compact-keyboard": {
    src: "/images/photos/pin-compact-keyboard.webp",
    share: "src/assets/share/pin-compact-keyboard.jpg",
    width: 1024,
    height: 1536,
    alt: "A compact keyboard and mouse on a felt desk mat with plenty of free space, a mug, a plant and a yellow notebook.",
    label: AI_LABEL,
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function getPhoto(id: string | undefined): Photo | undefined {
  return id && id in photos ? photos[id as PhotoId] : undefined;
}
