/**
 * Original LongGrind editorial illustrations, generated as SVG strings.
 *
 * These are created for LongGrind and carry no third-party rights (see
 * public/images/ASSET-MANIFEST.json). The same source powers inline article
 * art and the Open Graph / Pinterest image routes, so visuals stay consistent.
 */

export const palette = {
  charcoal: "#151B20",
  ink: "#0D1114",
  slate: "#222B32",
  slate2: "#2C363E",
  lime: "#D9FF70",
  ivory: "#F5F2EB",
  steel: "#8B969C",
  white: "#FFFFFF",
} as const;

const C = palette;

export type IllustrationName =
  | "desk"
  | "cables"
  | "monitor"
  | "keyboard"
  | "keyboard-sizes"
  | "lighting"
  | "productivity"
  | "gaming"
  | "creator"
  | "guides"
  | "hero";

export const illustrationNames: IllustrationName[] = [
  "desk",
  "cables",
  "monitor",
  "keyboard",
  "keyboard-sizes",
  "lighting",
  "productivity",
  "gaming",
  "creator",
  "guides",
  "hero",
];

export function isIllustration(name: string): name is IllustrationName {
  return (illustrationNames as string[]).includes(name);
}

const W = 1200;
const H = 800;

function frame(content: string, opts: { bg?: string; grid?: boolean } = {}) {
  const bg = opts.bg ?? C.charcoal;
  const grid =
    opts.grid === false
      ? ""
      : `<g stroke="#1D252B" stroke-width="1">${Array.from({ length: 13 }, (_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="${H}"/>`).join("")}${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 100}" x2="${W}" y2="${i * 100}"/>`).join("")}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"><rect width="${W}" height="${H}" fill="${bg}"/>${grid}${content}</svg>`;
}

const r = (x: number, y: number, w: number, h: number, fill: string, extra = "") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;

/* ------------------------------------------------------------------ */

function desk(withExtras = true) {
  const top = 520;
  return [
    // floor shadow
    `<ellipse cx="600" cy="735" rx="470" ry="22" fill="${C.ink}" opacity="0.7"/>`,
    // desk
    r(150, top, 900, 22, C.ivory),
    r(180, top + 22, 18, 190, C.steel),
    r(1002, top + 22, 18, 190, C.steel),
    r(170, top + 22, 860, 8, C.slate2),
    // monitor
    r(400, 250, 400, 236, C.slate2, 'rx="6"'),
    r(414, 264, 372, 208, C.ink, 'rx="2"'),
    `<path d="M440 440 L520 360 L580 400 L680 300 L760 340" fill="none" stroke="${C.lime}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>`,
    r(585, 486, 30, 26, C.steel),
    r(530, 510, 140, 10, C.steel, 'rx="3"'),
    // keyboard + mouse
    r(470, 500, 230, 14, C.slate2, 'rx="3"'),
    `<ellipse cx="760" cy="508" rx="18" ry="10" fill="${C.slate2}"/>`,
    withExtras
      ? [
          // lamp
          `<path d="M260 512 L300 380 L360 330" fill="none" stroke="${C.steel}" stroke-width="8" stroke-linecap="round"/>`,
          `<path d="M340 305 L400 345 L378 372 L322 334 Z" fill="${C.lime}"/>`,
          r(236, 506, 60, 14, C.steel, 'rx="4"'),
          // plant
          r(860, 456, 70, 64, C.ivory, 'rx="4"'),
          `<path d="M895 456 C 870 400 850 390 830 380 M895 456 C 900 400 920 370 945 350 M895 456 C 895 420 890 395 885 370" stroke="${C.lime}" stroke-width="8" fill="none" stroke-linecap="round"/>`,
          // mug
          r(330, 478, 34, 42, C.ivory, 'rx="4"'),
          `<path d="M364 488 h10 a8 8 0 0 1 0 22 h-10" stroke="${C.ivory}" stroke-width="5" fill="none"/>`,
        ].join("")
      : "",
  ].join("");
}

function cables() {
  // Under-desk view: tray, strip, single drop.
  const parts: string[] = [];
  parts.push(r(120, 140, 960, 30, C.ivory)); // desk top edge (front view)
  parts.push(r(150, 170, 20, 520, C.steel));
  parts.push(r(1030, 170, 20, 520, C.steel));
  // tray
  parts.push(`<path d="M300 200 L300 270 L900 270 L900 200" fill="none" stroke="${C.steel}" stroke-width="6"/>`);
  for (let x = 320; x < 900; x += 30) parts.push(`<line x1="${x}" y1="205" x2="${x}" y2="268" stroke="${C.steel}" stroke-opacity="0.45" stroke-width="2"/>`);
  // power strip
  parts.push(r(380, 224, 300, 34, C.slate2, 'rx="6"'));
  for (let i = 0; i < 6; i++) parts.push(r(400 + i * 46, 233, 24, 16, C.ink, 'rx="3"'));
  parts.push(`<circle cx="660" cy="241" r="7" fill="${C.lime}"/>`);
  // cables coming down from desk to strip
  const xs = [250, 520, 600, 760, 840];
  xs.forEach((x, i) => {
    parts.push(`<path d="M${x} 172 C ${x} 205 ${420 + i * 46} 200 ${412 + i * 46} 230" fill="none" stroke="${i === 2 ? C.lime : C.ivory}" stroke-width="5" stroke-linecap="round"/>`);
  });
  // single drop along leg
  parts.push(`<path d="M380 245 C 260 250 190 260 182 330 L182 690" fill="none" stroke="${C.lime}" stroke-width="10" stroke-linecap="round"/>`);
  for (let y = 360; y < 690; y += 70) parts.push(r(170, y, 26, 10, C.ivory, 'rx="3"'));
  // outlet
  parts.push(r(120, 640, 60, 80, C.slate2, 'rx="6"'));
  parts.push(r(136, 660, 8, 16, C.ink));
  parts.push(r(156, 660, 8, 16, C.ink));
  // labels
  parts.push(label(930, 230, "TRAY"));
  parts.push(label(220, 520, "ONE DROP"));
  parts.push(`<ellipse cx="600" cy="735" rx="470" ry="18" fill="${C.ink}" opacity="0.7"/>`);
  return parts.join("");
}

function label(x: number, y: number, text: string, color: string = C.lime) {
  return `<g data-label="1"><rect x="${x}" y="${y - 22}" width="${text.length * 13 + 24}" height="32" fill="${C.ink}" stroke="${color}" stroke-width="2"/><text x="${x + 12}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="18" letter-spacing="2" fill="${color}">${text}</text></g>`;
}

function monitor() {
  const parts: string[] = [];
  // divider
  parts.push(`<line x1="600" y1="80" x2="600" y2="720" stroke="${C.steel}" stroke-opacity="0.35" stroke-width="2" stroke-dasharray="8 10"/>`);
  // left: stand
  parts.push(r(90, 560, 440, 18, C.ivory));
  parts.push(r(150, 300, 320, 190, C.slate2, 'rx="6"'));
  parts.push(r(162, 312, 296, 166, C.ink));
  parts.push(r(295, 490, 30, 50, C.steel));
  parts.push(`<path d="M220 560 L250 538 L370 538 L400 560 Z" fill="${C.steel}"/>`);
  parts.push(r(180, 520, 30, 40, C.steel, 'opacity="0.0"'));
  parts.push(label(110, 150, "STAND", C.ivory));
  // footprint highlight
  parts.push(`<rect x="210" y="545" width="200" height="12" fill="${C.ivory}" opacity="0.0"/>`);
  parts.push(`<path d="M215 590 L405 590" stroke="${C.steel}" stroke-width="3"/><text x="240" y="625" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="${C.steel}" letter-spacing="2">BASE ON DESK</text>`);
  // right: arm
  parts.push(r(670, 560, 440, 18, C.ivory));
  parts.push(r(1080, 540, 26, 70, C.steel)); // clamp
  parts.push(`<path d="M1093 540 L1093 420 L960 360 L860 380" fill="none" stroke="${C.lime}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`);
  parts.push(`<circle cx="1093" cy="420" r="12" fill="${C.ink}" stroke="${C.lime}" stroke-width="5"/><circle cx="960" cy="360" r="12" fill="${C.ink}" stroke="${C.lime}" stroke-width="5"/>`);
  parts.push(r(690, 250, 320, 190, C.slate2, 'rx="6"'));
  parts.push(r(702, 262, 296, 166, C.ink));
  parts.push(label(690, 150, "ARM"));
  parts.push(`<path d="M700 600 L1060 600" stroke="${C.lime}" stroke-width="3"/><text x="760" y="635" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="${C.lime}" letter-spacing="2">SURFACE FREE</text>`);
  return parts.join("");
}

/** Schematic keyboards drawn in standard key units (1u). */
function keyboardShape(x: number, y: number, u: number, opts: { fRow: boolean; nav: "cluster" | "column" | "none"; numpad: boolean; arrows: boolean }) {
  const parts: string[] = [];
  const step = 20;
  const keyH = 16;
  const pad = 8;
  const rows = opts.fRow ? 6 : 5;
  const mainW = 15;
  const navW = opts.nav === "cluster" ? 3.25 : opts.nav === "column" ? 1 : 0;
  const numW = opts.numpad ? 4.25 : 0;
  const totalU = mainW + navW + numW;
  const width = totalU * u + pad * 2;
  const height = rows * step + pad * 2 - (step - keyH);
  parts.push(r(x, y, width, height, C.slate2, 'rx="8"'));
  const key = (kx: number, ky: number, kw: number, fill: string = C.ink) => r(kx, ky, kw - 3, keyH, fill, 'rx="2"');
  let row = 0;
  if (opts.fRow) {
    for (let i = 0; i < mainW; i++) parts.push(key(x + pad + i * u, y + pad, u, i === 0 ? C.steel : C.ink));
    row = 1;
  }
  for (let rr = 0; rr < 5; rr++) {
    const ky = y + pad + (row + rr) * step;
    if (rr === 4) {
      parts.push(key(x + pad, ky, u * 1.5));
      parts.push(key(x + pad + u * 1.5, ky, u * 1.5));
      parts.push(key(x + pad + u * 3, ky, u * 7, C.ivory));
      parts.push(key(x + pad + u * 10, ky, u * 1.5));
      parts.push(key(x + pad + u * 11.5, ky, u * 1.5));
    } else {
      for (let i = 0; i < mainW; i++) parts.push(key(x + pad + i * u, ky, u, C.ink));
    }
  }
  const nx = x + pad + mainW * u + (opts.nav === "cluster" ? u * 0.25 : 0);
  if (opts.nav === "cluster") {
    for (let rr = 0; rr < 3; rr++) for (let i = 0; i < 3; i++) if (!(rr > 0 && !opts.fRow)) parts.push(key(nx + i * u, y + pad + (rr + (opts.fRow ? 0 : 0)) * step + (opts.fRow ? step : 0), u));
  }
  if (opts.nav === "column") {
    for (let rr = 0; rr < rows - 1; rr++) parts.push(key(nx, y + pad + rr * step, u));
  }
  if (opts.arrows) {
    const ay = y + pad + (rows - 1) * step;
    const ax = opts.nav === "cluster" ? nx : nx - u * 2;
    if (opts.nav === "cluster") {
      parts.push(key(ax + u, ay - step, u, C.lime));
      [0, 1, 2].forEach((i) => parts.push(key(ax + i * u, ay, u, C.lime)));
    } else {
      parts.push(key(ax + u * 1, ay - step, u, C.lime));
      [0, 1, 2].forEach((i) => parts.push(key(ax + i * u, ay, u, C.lime)));
    }
  }
  if (opts.numpad) {
    const px = nx + 3.25 * u;
    for (let rr = opts.fRow ? 1 : 0; rr < rows; rr++) for (let i = 0; i < 4; i++) parts.push(key(px + i * u, y + pad + rr * step, u, C.steel));
  }
  return { svg: parts.join(""), width, height };
}

function keyboardSizes() {
  const u = 26;
  const boards = [
    { name: "FULL-SIZE", pct: "100%", o: { fRow: true, nav: "cluster" as const, numpad: true, arrows: true } },
    { name: "TENKEYLESS", pct: "~80%", o: { fRow: true, nav: "cluster" as const, numpad: false, arrows: true } },
    { name: "75%", pct: "75%", o: { fRow: true, nav: "column" as const, numpad: false, arrows: true } },
    { name: "65%", pct: "65%", o: { fRow: false, nav: "column" as const, numpad: false, arrows: true } },
    { name: "60%", pct: "60%", o: { fRow: false, nav: "none" as const, numpad: false, arrows: false } },
  ];
  const parts: string[] = [];
  let y = 40;
  const x0 = 330;
  for (const b of boards) {
    const k = keyboardShape(x0, y, u, b.o);
    parts.push(k.svg);
    parts.push(`<text x="70" y="${y + k.height / 2 + 4}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24" letter-spacing="2" fill="${C.ivory}">${b.name}</text>`);
    parts.push(`<line x1="70" y1="${y + k.height / 2 + 18}" x2="${70 + b.name.length * 17}" y2="${y + k.height / 2 + 18}" stroke="${C.lime}" stroke-width="3"/>`);
    parts.push(`<line x1="${x0 + k.width + 14}" y1="${y + k.height / 2}" x2="${x0 + k.width + 40}" y2="${y + k.height / 2}" stroke="${C.steel}" stroke-width="2"/>`);
    y += k.height + 24;
  }
  return parts.join("");
}

function keyboardHero() {
  const parts: string[] = [];
  parts.push(`<ellipse cx="600" cy="610" rx="460" ry="26" fill="${C.ink}" opacity="0.7"/>`);
  const k = keyboardShape(250, 350, 40, { fRow: true, nav: "column", numpad: false, arrows: true });
  parts.push(`<g transform="translate(-40 0)">${k.svg}</g>`);
  parts.push(`<rect x="940" y="420" width="90" height="140" rx="45" fill="${C.slate2}"/><line x1="985" y1="430" x2="985" y2="480" stroke="${C.lime}" stroke-width="4"/>`);
  parts.push(label(210, 300, "75% LAYOUT"));
  return parts.join("");
}

function lighting() {
  return [
    `<path d="M640 120 L380 640 L900 640 Z" fill="${C.lime}" opacity="0.10"/>`,
    `<path d="M640 120 L470 640 L810 640 Z" fill="${C.lime}" opacity="0.10"/>`,
    r(140, 640, 920, 22, C.ivory),
    r(170, 662, 18, 100, C.steel),
    r(1012, 662, 18, 100, C.steel),
    `<path d="M300 636 L360 380 L560 150" fill="none" stroke="${C.steel}" stroke-width="10" stroke-linecap="round"/>`,
    `<circle cx="360" cy="380" r="12" fill="${C.ink}" stroke="${C.steel}" stroke-width="5"/>`,
    `<path d="M560 150 L700 100 L720 140 L590 190 Z" fill="${C.lime}"/>`,
    r(250, 626, 110, 16, C.steel, 'rx="4"'),
    r(520, 590, 240, 50, C.slate2, 'rx="4"'),
    r(540, 600, 200, 6, C.steel),
    r(540, 616, 160, 6, C.steel),
  ].join("");
}

function productivity() {
  return [
    r(140, 600, 920, 22, C.ivory),
    // laptop on stand
    `<path d="M300 600 L360 470 L420 470 L380 600 Z" fill="${C.steel}"/>`,
    r(330, 300, 300, 190, C.slate2, 'rx="6"'),
    r(342, 312, 276, 166, C.ink),
    ...[0, 1, 2, 3].map((i) => r(362, 336 + i * 32, 180 - i * 30, 12, i === 0 ? C.lime : C.steel, 'rx="3"')),
    // notebook
    r(700, 560, 180, 36, C.ivory, 'rx="3" transform="rotate(-4 790 578)"'),
    r(700, 548, 180, 14, C.lime, 'rx="3" transform="rotate(-4 790 555)"'),
    // timer
    `<circle cx="960" cy="520" r="62" fill="${C.slate2}"/><circle cx="960" cy="520" r="48" fill="${C.ink}"/>`,
    `<path d="M960 520 L960 482 A38 38 0 0 1 994 538 Z" fill="${C.lime}"/>`,
  ].join("");
}

function gaming() {
  return [
    `<ellipse cx="600" cy="300" rx="420" ry="200" fill="${C.lime}" opacity="0.06"/>`,
    r(140, 600, 920, 22, C.ivory),
    `<path d="M300 180 Q600 140 900 180 L900 470 Q600 440 300 470 Z" fill="${C.slate2}"/>`,
    `<path d="M318 196 Q600 160 882 196 L882 452 Q600 424 318 452 Z" fill="${C.ink}"/>`,
    `<path d="M360 400 L460 330 L520 360 L640 260 L700 300 L840 220" stroke="${C.lime}" stroke-width="6" fill="none" stroke-linecap="round"/>`,
    r(580, 470, 40, 90, C.steel),
    r(500, 556, 200, 12, C.steel, 'rx="3"'),
    // controller
    `<path d="M240 560 q30 -40 90 -40 h60 q60 0 90 40 q20 40 -10 40 q-25 0 -45 -25 h-130 q-20 25 -45 25 q-30 0 -10 -40z" fill="${C.slate2}"/>`,
    `<circle cx="440" cy="550" r="8" fill="${C.lime}"/><circle cx="300" cy="550" r="10" fill="${C.ink}"/>`,
    // mouse pad and mouse
    r(780, 576, 240, 20, C.ink, 'rx="4"'),
    `<ellipse cx="900" cy="575" rx="24" ry="12" fill="${C.steel}"/>`,
  ].join("");
}

function creator() {
  return [
    r(140, 620, 920, 22, C.ivory),
    // mic arm
    r(980, 600, 30, 60, C.steel),
    `<path d="M995 600 L995 470 L860 380 L760 400" fill="none" stroke="${C.steel}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`,
    `<rect x="700" y="360" width="70" height="120" rx="35" fill="${C.lime}"/>`,
    `<g stroke="${C.ink}" stroke-width="3">${[390, 410, 430, 450].map((y) => `<line x1="712" y1="${y}" x2="758" y2="${y}"/>`).join("")}</g>`,
    // camera on monitor
    r(300, 300, 360, 210, C.slate2, 'rx="6"'),
    r(312, 312, 336, 186, C.ink),
    r(450, 270, 60, 32, C.steel, 'rx="6"'),
    `<circle cx="480" cy="286" r="9" fill="${C.lime}"/>`,
    r(465, 510, 30, 110, C.steel),
    // key light
    `<rect x="160" y="220" width="110" height="110" rx="8" fill="${C.ivory}"/>`,
    `<line x1="215" y1="330" x2="215" y2="620" stroke="${C.steel}" stroke-width="8"/>`,
    `<circle cx="480" cy="410" r="44" fill="none" stroke="${C.steel}" stroke-width="3" stroke-dasharray="6 8"/>`,
  ].join("");
}

function guides() {
  const card = (x: number, accent: string, title: string) =>
    [
      r(x, 170, 380, 460, C.slate2, ""),
      r(x, 170, 380, 10, accent),
      `<text x="${x + 30}" y="240" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="30" letter-spacing="3" fill="${C.ivory}">${title}</text>`,
      ...[0, 1, 2, 3, 4].map((i) =>
        [
          `<circle cx="${x + 44}" cy="${300 + i * 62}" r="10" fill="${i < 3 ? accent : C.steel}"/>`,
          r(x + 70, 294 + i * 62, 240 - i * 25, 12, C.steel, 'rx="3"'),
        ].join(""),
      ),
    ].join("");
  return [
    card(150, C.lime, "OPTION A"),
    card(670, C.ivory, "OPTION B"),
    `<circle cx="600" cy="400" r="58" fill="${C.ink}" stroke="${C.lime}" stroke-width="4"/>`,
    `<text x="600" y="414" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="38" fill="${C.lime}">VS</text>`,
  ].join("");
}

function hero() {
  return [
    `<circle cx="930" cy="230" r="150" fill="${C.lime}" opacity="0.12"/>`,
    `<circle cx="930" cy="230" r="90" fill="none" stroke="${C.lime}" stroke-width="3" opacity="0.5"/>`,
    desk(true),
  ].join("");
}

const builders: Record<IllustrationName, () => string> = {
  desk: () => desk(true),
  cables,
  monitor,
  keyboard: keyboardHero,
  "keyboard-sizes": keyboardSizes,
  lighting,
  productivity,
  gaming,
  creator,
  guides,
  hero,
};

export function illustrationSvg(name: string): string {
  const build = isIllustration(name) ? builders[name] : builders.desk;
  return frame(build());
}

/**
 * Data URI for server-side image generation. Text labels are removed because
 * the SVG rasterizer used for social images has no system fonts.
 */
export function illustrationDataUri(name: string): string {
  const svg = illustrationSvg(name)
    .replace(/<g data-label="1">.*?<\/g>/g, "")
    .replace(/<text[^>]*>.*?<\/text>/g, "");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
