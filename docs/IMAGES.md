# Images and licensing

## What the site uses today

All imagery is **original**:

- **Brand:** the LongGrind logo, mark and favicon. Generate them with `npm run brand:png`; the files are in `public/brand/` and `src/app/icon.svg` / `apple-icon.png`.
- **Editorial illustrations:** SVG artwork generated in `src/lib/illustrations.ts` (desk, cables, monitor, keyboard, keyboard sizes, lighting, productivity, gaming, creator, guides, hero). They're served as static, cacheable files at `/illustrations/<name>.svg` with explicit dimensions and a fixed 3:2 box (no layout shift), lazy-loaded below the fold, and rasterized into OG and Pinterest images.

Stock photo sites (Unsplash, Pexels, Pixabay) were not reachable from the build environment, so **no third-party photos are included**. That's why the asset manifest's `thirdPartyPhotos` list is empty.

The full provenance record is `public/images/ASSET-MANIFEST.json`.

## Adding a photo (owner workflow)

1. **Choose a source** whose license allows your use: [Unsplash](https://unsplash.com/license), [Pexels](https://www.pexels.com/license/) or [Pixabay](https://pixabay.com/service/license-summary/). Read the current license page. All three have restrictions, for example on implying endorsement by recognizable people or brands, or selling unaltered copies.
2. **Download** the image from the photo's own page (not via image search or hotlinking).
3. **Optimize** it: export a 1600 px wide JPEG or WebP at about 75–80% quality, and add a smaller 800 px version if you want.
4. **Save** it under `public/images/photos/` with a descriptive filename.
5. **Record it** in `ASSET-MANIFEST.json` using the `template` entry: page URL, photographer, license, date checked, restrictions, where it's used, and alt text.
6. **Render it** with `next/image`, with explicit `width`/`height`, `priority` only for the above-the-fold hero, and lazy loading elsewhere (the default).

## Product images

- Don't use Amazon product images as decoration or hero photos.
- Don't download, cache or re-host Amazon product images unless the program you use explicitly permits it. If you integrate an approved Amazon data source, follow its current rules on image use, attribution, refresh and caching.
- Manufacturer press images require the manufacturer's permission. Record it in the manifest and in `product.image.rights`.
- When rights are unclear, product cards show a typographic brand panel instead. This is intentional.

## Alt text

- **Illustrations:** describe what the image shows and why it matters, for example "Diagram of an under-desk layout: a tray along the back edge…".
- **Decorative duplicates** (category tiles that repeat a visible heading) use empty alt text so screen readers don't repeat the heading.
