import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { illustrationDataUri, palette as C } from "@/lib/illustrations";
import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
/** 2:3 vertical format recommended for Pinterest. */
export const pinSize = { width: 1000, height: 1500 };

async function fonts() {
  const dir = join(process.cwd(), "src/assets/fonts");
  const [display, sans, sansBold] = await Promise.all([
    readFile(join(dir, "Fraunces-600.ttf")),
    readFile(join(dir, "InterTight-500.ttf")),
    readFile(join(dir, "InterTight-800.ttf")),
  ]);
  return [
    { name: "Fraunces", data: display, weight: 600 as const, style: "normal" as const },
    { name: "Inter Tight", data: sans, weight: 500 as const, style: "normal" as const },
    { name: "Inter Tight", data: sansBold, weight: 800 as const, style: "normal" as const },
  ];
}

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill={C.charcoal} />
      <path d="M18 13 V49 H36 A16 16 0 0 0 52 33 H40" fill="none" stroke={C.lime} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="17" r="4.5" fill={C.ivory} />
    </svg>
  );
}

function Brand({ size = 34, light = true }: { size?: number; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Mark size={size + 10} />
      <div style={{ display: "flex", fontFamily: "Inter Tight", fontWeight: 800, fontSize: size, letterSpacing: -1, color: light ? C.ivory : C.charcoal }}>
        Long<span style={{ color: light ? C.lime : C.charcoal }}>Grind</span>
      </div>
    </div>
  );
}

interface ShareInput {
  title: string;
  kicker: string;
  illustration: string;
  /** Repo-relative JPEG path; used instead of the illustration when set. */
  photo?: string;
  dek?: string;
  /** Section headings listed on Pinterest images ("Inside this guide"). */
  inside?: string[];
}

export async function renderOgImage({ title, kicker, illustration, photo }: ShareInput) {
  const side = photo ? await fileDataUri(photo) : null;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: C.charcoal }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640, padding: "56px 56px 48px" }}>
          <div style={{ display: "flex", fontFamily: "Inter Tight", fontWeight: 800, fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: C.lime }}>{kicker}</div>
          <div style={{ display: "flex", fontFamily: "Fraunces", fontWeight: 600, fontSize: title.length > 60 ? 50 : 60, lineHeight: 1.05, letterSpacing: -1.5, color: C.ivory }}>{title}</div>
          <Brand />
        </div>
        <div style={{ display: "flex", width: 560, height: "100%", overflow: "hidden", borderLeft: `8px solid ${C.lime}` }}>
          {side ? (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img src={side} width={560} height={630} style={{ width: 560, height: 630, objectFit: "cover" }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img src={illustrationDataUri(illustration)} width={945} height={630} style={{ width: 945, height: 630, marginLeft: -192 }} />
          )}
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}

export type PinBody =
  | { kind: "guide"; dek: string; inside: string[] }
  | { kind: "steps"; steps: string[] }
  | { kind: "comparison"; a: { title: string; points: string[] }; b: { title: string; points: string[] } }
  | { kind: "tips"; tips: string[] }
  | { kind: "products"; heading: string; items: { label: string; name: string }[] }
  | { kind: "inspiration"; dek: string }
  | { kind: "before-after"; before: string; after: string; dek: string };

const text = (size: number, weight: 500 | 800, color: string, extra: Record<string, unknown> = {}) => ({
  display: "flex",
  fontFamily: "Inter Tight",
  fontWeight: weight,
  fontSize: size,
  lineHeight: 1.3,
  color,
  ...extra,
});

function Bullet() {
  return <div style={{ display: "flex", flexShrink: 0, width: 14, height: 14, marginTop: 10, background: C.lime, border: `2px solid ${C.charcoal}` }} />;
}

async function fileDataUri(relPath: string) {
  const buf = await readFile(join(process.cwd(), relPath));
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

async function publicImage(path: string) {
  const buf = await readFile(join(process.cwd(), "public", path));
  const ext = path.split(".").pop()?.toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

async function PinMiddle({ body }: { body: PinBody }) {
  switch (body.kind) {
    case "guide":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={text(32, 500, "#3A444B")}>{body.dek}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {body.inside.slice(0, 4).map((t) => (
              <div key={t} style={{ ...text(28, 800, C.charcoal), gap: 16 }}>
                <Bullet />
                {t}
              </div>
            ))}
          </div>
        </div>
      );
    case "steps":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {body.steps.slice(0, 6).map((t, i) => (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ ...text(24, 800, C.lime), width: 48, height: 48, alignItems: "center", justifyContent: "center", background: C.charcoal }}>{i + 1}</div>
              <div style={text(29, 800, C.charcoal)}>{t}</div>
            </div>
          ))}
        </div>
      );
    case "comparison":
      return (
        <div style={{ display: "flex", gap: 20 }}>
          {[body.a, body.b].map((side, i) => (
            <div key={side.title} style={{ display: "flex", flexDirection: "column", flex: 1, padding: 24, gap: 12, background: i === 0 ? C.charcoal : "#FBFAF6", borderTop: `10px solid ${i === 0 ? C.lime : C.charcoal}` }}>
              <div style={text(30, 800, i === 0 ? C.lime : C.charcoal)}>{side.title}</div>
              {side.points.slice(0, 3).map((p) => (
                <div key={p} style={text(23, 500, i === 0 ? C.ivory : C.charcoal)}>→ {p}</div>
              ))}
            </div>
          ))}
        </div>
      );
    case "tips":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {body.tips.slice(0, 4).map((t) => (
            <div key={t} style={{ ...text(28, 500, C.charcoal), gap: 16 }}>
              <Bullet />
              {t}
            </div>
          ))}
        </div>
      );
    case "products":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={text(22, 800, "#5D676D", { letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 })}>{body.heading}</div>
          {body.items.slice(0, 5).map((it, i) => (
            <div key={it.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderTop: `2px solid ${C.charcoal}` }}>
              <div style={text(29, 800, C.charcoal)}>{`${String(i + 1).padStart(2, "0")}  ${it.name}`}</div>
              <div style={{ ...text(20, 800, C.charcoal), padding: "4px 10px", background: C.lime }}>{it.label}</div>
            </div>
          ))}
        </div>
      );
    case "inspiration":
      return <div style={text(34, 500, "#3A444B")}>{body.dek}</div>;
    case "before-after": {
      const [before, after] = await Promise.all([publicImage(body.before), publicImage(body.after)]);
      return (
        <div style={{ display: "flex", gap: 16 }}>
          {[
            ["Before", before],
            ["After", after],
          ].map(([label, src]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", flex: 1, gap: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img src={src} width={420} height={300} style={{ width: 420, height: 300, objectFit: "cover" }} />
              <div style={text(26, 800, C.charcoal)}>{label}</div>
            </div>
          ))}
        </div>
      );
    }
  }
}

/**
 * Pinterest image templates (1000×1500). The brand bar and kicker are shared;
 * the middle section varies by template. See docs/PINTEREST.md.
 */
export async function renderPinImage({ title, kicker, illustration, body, photo }: { title: string; kicker: string; illustration: string; body: PinBody; photo?: string }) {
  const tall = body.kind === "inspiration";
  const imgH = tall ? 900 : body.kind === "before-after" ? 420 : 600;
  const top = photo ? await fileDataUri(photo) : null;
  const middle = await PinMiddle({ body });
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: C.ivory }}>
        <div style={{ display: "flex", width: 1000, height: imgH, overflow: "hidden" }}>
          {top ? (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img src={top} width={1000} height={imgH} style={{ width: 1000, height: imgH, objectFit: "cover" }} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img src={illustrationDataUri(illustration)} width={imgH * 1.5} height={imgH} style={{ width: imgH * 1.5, height: imgH, marginLeft: (1000 - imgH * 1.5) / 2 }} />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "44px 60px 0", borderTop: `14px solid ${C.lime}`, gap: 22 }}>
          <div style={text(22, 800, "#5D676D", { letterSpacing: 5, textTransform: "uppercase" })}>{kicker}</div>
          <div style={{ display: "flex", fontFamily: "Fraunces", fontWeight: 600, fontSize: title.length > 55 ? 60 : 70, lineHeight: 1.04, letterSpacing: -2, color: C.charcoal }}>{title}</div>
          {middle}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "30px 60px", background: C.charcoal }}>
          <Brand size={34} />
          <div style={text(26, 500, C.steel)}>{site.domain}</div>
        </div>
      </div>
    ),
    { ...pinSize, fonts: await fonts() },
  );
}
