/**
 * Generates LongGrind brand assets into public/brand:
 *  - longgrind-logo.svg / -light.svg  (wordmark outlined to paths; no font dependency)
 *  - longgrind-mark.svg               (symbol only)
 *  - PNG exports for structured data, manifest and social profiles
 *
 * Run with: npm run brand:png
 */
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "public/brand");
mkdirSync(out, { recursive: true });

const C = { charcoal: "#151B20", lime: "#D9FF70", ivory: "#F5F2EB" };
const fontBold = readFileSync(join(root, "src/assets/fonts/InterTight-800.ttf"));

const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${C.charcoal}"/><path d="M18 13 V49 H36 A16 16 0 0 0 52 33 H40" fill="none" stroke="${C.lime}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="17" r="4.5" fill="${C.ivory}"/></svg>`;
const markUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

async function wordmark(light: boolean) {
  const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });
  const tree = h("div", { display: "flex", alignItems: "center", gap: 18, width: 620, height: 128, padding: "0 16px", background: "transparent" }, [
    { type: "img", props: { src: markUri, width: 96, height: 96 } },
    h("div", { display: "flex", fontFamily: "Inter Tight", fontWeight: 800, fontSize: 84, letterSpacing: -3.4, color: light ? C.ivory : C.charcoal }, [
      "Long",
      h("span", { color: light ? C.lime : C.charcoal, ...(light ? {} : { backgroundImage: `linear-gradient(transparent 62%, ${C.lime} 62%)` }) }, "Grind"),
    ]),
  ]);
  // satori outlines text as SVG paths, so the logo renders identically everywhere.
  return satori(tree as never, { width: 620, height: 128, fonts: [{ name: "Inter Tight", data: fontBold, weight: 800, style: "normal" }] });
}

function png(svg: string, width: number, file: string, background?: string) {
  const r = new Resvg(svg, { fitTo: { mode: "width", value: width }, ...(background ? { background } : {}) });
  writeFileSync(join(out, file), r.render().asPng());
}

async function main() {
  const dark = await wordmark(false);
  const light = await wordmark(true);
  writeFileSync(join(out, "longgrind-logo.svg"), dark);
  writeFileSync(join(out, "longgrind-logo-light.svg"), light);
  writeFileSync(join(out, "longgrind-mark.svg"), markSvg);

  png(dark, 1240, "longgrind-logo.png");
  png(light, 1240, "longgrind-logo-light.png", C.charcoal);
  png(markSvg, 512, "longgrind-mark-512.png");
  png(markSvg, 192, "longgrind-mark-192.png");
  png(markSvg, 180, "../../src/app/apple-icon.png");
  // Square publisher logo for structured data (mark centered on ivory).
  const square = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="${C.ivory}"/><image href="${markUri}" x="96" y="96" width="320" height="320"/></svg>`;
  png(square, 512, "longgrind-logo-512.png");
  console.log("Brand assets written to public/brand");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
