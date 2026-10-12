import { illustrationNames, illustrationSvg, isIllustration } from "@/lib/illustrations";

/** Original illustrations served as static, cacheable SVG files: /illustrations/<name>.svg */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return illustrationNames.map((n) => ({ file: `${n}.svg` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const name = file.replace(/\.svg$/, "");
  if (!isIllustration(name)) return new Response("Not found", { status: 404 });
  return new Response(illustrationSvg(name).replace('role="img"', 'aria-hidden="true"'), {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
