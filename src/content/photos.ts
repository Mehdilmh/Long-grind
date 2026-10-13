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
  /** Third-party stock photo credit, shown as a small caption under the image. */
  credit?: PhotoCredit;
}

export interface PhotoCredit {
  /** Photographer name as shown on the photo page. */
  name: string;
  /** The photo's own page (not the CDN file). */
  url: string;
  source: "Unsplash" | "Pexels" | "Pixabay";
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
  "section-desk-workspace": {
    src: "/images/photos/section-desk-workspace.webp",
    share: "src/assets/share/section-desk-workspace.jpg",
    width: 1536,
    height: 1024,
    alt: "A wooden desk by a window with a grey task lamp, a laptop on a stand, a small keyboard, a plant and a mesh office chair.",
    credit: { name: "Samule Sun", url: "https://unsplash.com/photos/grey-desk-lamp-on-top-of-office-desk-U6EXlQCZ938", source: "Unsplash" },
  },
  "section-keyboards": {
    src: "/images/photos/section-keyboards.webp",
    share: "src/assets/share/section-keyboards.jpg",
    width: 1536,
    height: 1024,
    alt: "Close-up of a dark mechanical keyboard with warm orange backlit key legends.",
    credit: { name: "blurrystock", url: "https://unsplash.com/photos/HIbAmybJHVs", source: "Unsplash" },
  },
  "section-lighting-organization": {
    src: "/images/photos/section-lighting-organization.webp",
    share: "src/assets/share/section-lighting-organization.jpg",
    width: 1536,
    height: 1024,
    alt: "A clear white desk against a pale wall with a white desk lamp, a potted plant and a wooden wall clock.",
    credit: { name: "Samantha Gades", url: "https://unsplash.com/photos/white-desk-lamp-beside-green-plant-BlIhVfXbi9s", source: "Unsplash" },
  },
  "section-productivity": {
    src: "/images/photos/section-productivity.webp",
    share: "src/assets/share/section-productivity.jpg",
    width: 1536,
    height: 1024,
    alt: "An open handwritten notebook with green sticky notes beside a laptop and a phone on a desk in afternoon sunlight.",
    credit: { name: "Yen Vu", url: "https://unsplash.com/photos/notebook-and-laptop-sit-on-a-work-desk-TdgfSyDoWBE", source: "Unsplash" },
  },
  "section-gaming": {
    src: "/images/photos/section-gaming.webp",
    share: "src/assets/share/section-gaming.jpg",
    width: 1536,
    height: 1024,
    alt: "High view of a corner desk with a curved monitor on a wooden shelf, a keyboard on a dark desk mat, a game controller, headphones and plants.",
    credit: { name: "minhphuc .workspace", url: "https://www.pexels.com/photo/a-desk-with-a-computer-and-a-plant-on-it-28350931/", source: "Pexels" },
  },
  "section-creator": {
    src: "/images/photos/section-creator.webp",
    share: "src/assets/share/section-creator.jpg",
    width: 1536,
    height: 1024,
    alt: "A condenser microphone with a gold grille in a shock mount, lit against a black background.",
    credit: { name: "Hrayr Movsisyan", url: "https://unsplash.com/photos/black-and-gray-condenser-microphone-pfhld_5yQrs", source: "Unsplash" },
  },
  "section-buying-guides": {
    src: "/images/photos/section-buying-guides.webp",
    share: "src/assets/share/section-buying-guides.jpg",
    width: 1536,
    height: 1024,
    alt: "Flat lay of pastel highlighters, pens and copper spiral paper clips arranged around the edges of a white desk.",
    credit: { name: "Jess Bailey", url: "https://unsplash.com/photos/desk-flat-lay-with-stationery-and-macaron-9byKncZaV0c", source: "Unsplash" },
  },
  "move-screen-first": {
    src: "/images/photos/move-screen-first.webp",
    share: "src/assets/share/move-screen-first.jpg",
    width: 1536,
    height: 1024,
    alt: "A single monitor centred on a plain desk below three framed prints, with a keyboard, a mouse, a plant and a water bottle.",
    credit: { name: "Zarak Khan", url: "https://unsplash.com/photos/monitor-keyboard-and-mouse-on-table-fj31I5HoOIQ", source: "Unsplash" },
  },
  "move-power-hub": {
    src: "/images/photos/move-power-hub.webp",
    share: "src/assets/share/move-power-hub.jpg",
    width: 1536,
    height: 1024,
    alt: "A power strip fixed under a desk with several chargers plugged in and cables running down from it.",
    credit: { name: "Kati (xilophotography.com)", url: "https://unsplash.com/photos/YrdSQ_1gYRE", source: "Unsplash" },
  },
  "move-keyboard": {
    src: "/images/photos/move-keyboard.webp",
    share: "src/assets/share/move-keyboard.jpg",
    width: 1536,
    height: 1024,
    alt: "Close-up of dark keyboard keys with softly glowing legends and shallow depth of field.",
    credit: { name: "Florian Krumm", url: "https://unsplash.com/photos/black-computer-keyboard-1osIUArK5oA", source: "Unsplash" },
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function getPhoto(id: string | undefined): Photo | undefined {
  return id && id in photos ? photos[id as PhotoId] : undefined;
}
