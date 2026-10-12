import { articleProducts, getArticle, getArticles, getCategory, getProduct, tableOfContents } from "@/lib/content";
import { renderPinImage, type PinBody } from "@/lib/share-image";
import type { Article } from "@/lib/schema";
import { plainText } from "@/lib/text";

/** 1000×1500 (2:3) Pinterest-ready image for each article. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

const firstSentence = (s: string) => plainText(s).split(/(?<=\.)\s/)[0]!.replace(/\.$/, "");

function pinBody(a: Article): PinBody {
  const template = a.pinterest?.template ?? "guide";
  const headings = tableOfContents(a).map((t) => t.text);
  switch (template) {
    case "steps": {
      const steps = headings.filter((h) => /^Step \d+/i.test(h)).map((h) => h.replace(/^Step \d+:\s*/i, ""));
      return { kind: "steps", steps: steps.length >= 3 ? steps : headings };
    }
    case "comparison": {
      const choice = a.body.find((b) => b.type === "choice");
      if (choice && choice.type === "choice" && choice.options.length >= 2) {
        const [x, y] = choice.options as [typeof choice.options[0], typeof choice.options[0]];
        const short = (t: string) => { const s = t.replace(/\s*(if|when)…?$/i, "").replace(/^Choose an? /i, ""); return s.charAt(0).toUpperCase() + s.slice(1); };
        return {
          kind: "comparison",
          a: { title: short(x.title), points: x.chooseIf.map(plainText).filter((p) => p.length < 60) },
          b: { title: short(y.title), points: y.chooseIf.map(plainText).filter((p) => p.length < 60) },
        };
      }
      break;
    }
    case "tips":
      return { kind: "tips", tips: a.keyTakeaways.map(firstSentence) };
    case "roundup":
    case "gift": {
      const picks = a.body.flatMap((b) => (b.type === "productPicks" ? b.picks : []));
      const items = picks
        .map((p) => ({ label: p.label, name: getProduct(p.productId)?.name }))
        .filter((i): i is { label: string; name: string } => Boolean(i.name));
      if (items.length && articleProducts(a).length) {
        return { kind: "products", heading: template === "gift" ? "Gift ideas inside" : "Examples inside", items: items.map((i) => ({ ...i, label: i.label.replace(/ (reference|example)$/i, "") })) };
      }
      break;
    }
    case "inspiration":
      return { kind: "inspiration", dek: a.dek };
    case "before-after":
      if (a.pinterest?.beforeAfter) return { kind: "before-after", ...a.pinterest.beforeAfter, dek: a.dek };
      break;
  }
  return { kind: "guide", dek: a.dek, inside: headings.filter((t) => t.length <= 48) };
}

export async function GET(_req: Request, { params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const a = getArticle(category, slug);
  if (!a) return new Response("Not found", { status: 404 });
  return renderPinImage({
    title: a.pinterest?.title ?? a.title,
    kicker: getCategory(a.category)?.name ?? "LongGrind",
    illustration: a.hero.illustration,
    body: pinBody(a),
  });
}
