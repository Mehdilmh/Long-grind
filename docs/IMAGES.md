# Images and licensing

## What the site uses today

- **Brand:** the LongGrind logo, mark and favicon. Generate them with `npm run brand:png`; the files are in `public/brand/` and `src/app/icon.svg` / `apple-icon.png`.
- **Stock photos (third-party):** ten free photos from Unsplash and Pexels in `public/images/photos/section-*.webp` and `move-*.webp`. They're used for the seven section tiles on the homepage, the cover at the top of each section page, and the three "Three moves that make any desk feel calmer" tiles. Each shows a small credit caption under the image ("Photo: name / source", linking to the photo page). Neither licence requires credit; we show it anyway.
- **AI-generated images:** the homepage hero and some article covers and pins (`desk-flatlay`, `cover-*`, `pin-*`). These carry an "AI-generated illustration" label.
- **Editorial illustrations:** original SVG artwork generated in `src/lib/illustrations.ts`. They're still used for the **diagrams inside articles** (figure blocks such as keyboard sizes and cable layout, which show facts and must stay accurate), as fallbacks wherever no photo is set, and in Pinterest images. They're served at `/illustrations/<name>.svg`.

The full provenance record is `public/images/ASSET-MANIFEST.json`: `thirdPartyPhotos` for stock photos, `aiGeneratedImages` for AI images.

## Where photos are wired up

- `src/content/photos.ts` lists every raster image: `src`, a JPEG `share` copy in `src/assets/share/` (the OG renderer can't read WebP), dimensions, descriptive `alt`, and either `label` (AI images) or `credit` (stock photos: photographer, photo page URL, source).
- Categories in `src/content/categories.ts` have an optional `photo` id. When it's set, the homepage tile and the section cover use `PhotoImage` instead of `Illustration`, and the section's Open Graph image uses the photo too.
- `PhotoImage` (`src/components/PhotoImage.tsx`) renders the credit caption. `PhotoCaption` renders it on its own where the image sits inside a hover-zoom wrapper.

## Choosing a stock photo (rules we follow)

- Sources: **Unsplash, Pexels or Pixabay only.** Before each use, read the current licence page and confirm it allows commercial use on a website. Record the date checked.
- No recognisable people, no visible brand logos or trademarked products, and nothing that could be mistaken for a product we recommend (check `src/content/products.ts`: currently Logitech MX Keys S/Mini, Keychron K2/K8 and the Ergotron LX arm). A small, illegible logo may be blurred out; record that under `modifications` in the manifest.
- Style: minimal, calm desk and workspace scenes in charcoal and ivory, with natural light and a little green.
- Skip **Unsplash+** images, which use a paid licence and aren't free to download.

## Adding a photo (owner workflow)

1. **Choose a source** whose licence allows your use: [Unsplash](https://unsplash.com/license), [Pexels](https://www.pexels.com/license/) or [Pixabay](https://pixabay.com/service/license-summary/). Read the current licence page. All three have restrictions, for example on implying endorsement by recognisable people or brands, or selling unaltered copies.
2. **Download** the image from the photo's own page with its download button (not via image search, and never hotlinked).
3. **Optimise** it: crop to 3:2, resize to 1536 px wide (1536×1024), and convert to WebP at about 80% quality. Save it in `public/images/photos/` with a descriptive filename, and save a JPEG copy in `src/assets/share/`.
4. **Register** it in `src/content/photos.ts` with descriptive alt text and a `credit` (photographer name, photo page URL, source). Don't add the AI `label` to real photos.
5. **Record it** in `ASSET-MANIFEST.json` under `thirdPartyPhotos`, using the `template` entry: page URL, photographer, licence and date checked, restrictions, pages used on, and alt text.
6. **Render it** with `PhotoImage` (next/image, fixed ratio box). Use `priority` only for the above-the-fold image.

## Product images

- Don't use Amazon product images as decoration or hero photos.
- Don't download, cache or re-host Amazon product images unless the program you use explicitly permits it. If you integrate an approved Amazon data source, follow its current rules on image use, attribution, refresh and caching.
- Manufacturer press images require the manufacturer's permission. Record it in the manifest and in `product.image.rights`.
- When rights are unclear, product cards show a typographic brand panel instead. This is intentional.

## Alt text

- **Photos:** describe the scene plainly, for example "A clear white desk against a pale wall with a white desk lamp, a potted plant and a wooden wall clock." Don't name brands.
- **Illustrations:** describe what the image shows and why it matters, for example "Diagram of an under-desk layout: a tray along the back edge…".
- **Decorative duplicates** (category tiles that repeat a visible heading) use empty alt text so screen readers don't repeat the heading.
