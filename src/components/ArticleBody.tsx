import { AlertTriangle, Info, Lightbulb, CheckCircle2 } from "lucide-react";
import type { Block } from "@/lib/schema";
import { getProduct } from "@/lib/content";
import { InlineText } from "./InlineText";
import { Illustration } from "./Illustration";
import { ProductCard } from "./ProductCard";
import { hasAffiliateLink, LinkLevelDisclosure } from "./Affiliate";

const calloutStyles = {
  tip: { icon: Lightbulb, cls: "border-lime bg-lime/25", label: "Tip" },
  note: { icon: Info, cls: "border-steel bg-ivory-300/60", label: "Note" },
  warning: { icon: AlertTriangle, cls: "border-charcoal bg-charcoal text-ivory surface-dark", label: "Safety" },
} as const;

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-lg-custom">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.type) {
    case "p":
      return (
        <p className="mt-5">
          <InlineText text={b.text} />
        </p>
      );
    case "h2":
      return (
        <h2 id={b.id} className="mt-16 scroll-mt-28 border-t border-charcoal/15 pt-8 font-display text-display-md font-semibold">
          <InlineText text={b.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 id={b.id} className="mt-10 scroll-mt-28 text-xl font-bold tracking-tight">
          <InlineText text={b.text} />
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {b.items.map((item) => (
            <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-2 before:w-2 before:bg-lime before:ring-1 before:ring-charcoal">
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-5 space-y-3 [counter-reset:item]">
          {b.items.map((item) => (
            <li key={item} className="relative pl-10 [counter-increment:item] before:absolute before:left-0 before:top-0.5 before:flex before:h-7 before:w-7 before:items-center before:justify-center before:bg-charcoal before:text-xs before:font-bold before:text-lime before:content-[counter(item)]">
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      );
    case "callout": {
      const s = calloutStyles[b.tone];
      const Icon = s.icon;
      return (
        <aside className={`mt-8 border-l-4 p-5 ${s.cls}`} aria-label={`${s.label}: ${b.title}`}>
          <p className="flex items-center gap-2 font-bold">
            <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
            {b.title}
          </p>
          <p className="mt-2 text-[0.98rem] leading-relaxed">
            <InlineText text={b.text} />
          </p>
        </aside>
      );
    }
    case "steps":
      return (
        <ol className="mt-8 grid gap-px border border-charcoal/15 bg-charcoal/15 sm:grid-cols-2">
          {b.items.map((s, i) => (
            <li key={s.title} className="bg-ivory-100 p-5">
              <span className="kicker text-steel-600">Step {i + 1}</span>
              <p className="mt-1 font-bold">{s.title}</p>
              <p className="mt-1.5 text-[0.98rem] leading-relaxed text-charcoal/85">
                <InlineText text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <figure className="mt-8">
          {/* Scrollable region so wide tables work on phones without breaking the layout. */}
          <div className="overflow-x-auto border border-charcoal/15 bg-ivory-100" role="region" aria-label={b.caption} tabIndex={0}>
            <table className="w-full min-w-[640px] border-collapse text-left text-[0.92rem] leading-snug">
              <caption className="sr-only">{b.caption}</caption>
              <thead>
                <tr className="bg-charcoal text-ivory">
                  {b.columns.map((c) => (
                    <th key={c} scope="col" className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, ri) => (
                  <tr key={ri} className="border-t border-charcoal/10 align-top even:bg-ivory/60">
                    {row.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row" className="px-4 py-3 font-semibold">
                          {cell}
                        </th>
                      ) : (
                        <td key={ci} className="px-4 py-3">
                          <InlineText text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="mt-2 text-sm text-steel-600">
            {b.caption}
            {b.note ? ` — ${b.note}` : ""}
          </figcaption>
        </figure>
      );
    case "productPicks": {
      const picks = b.picks
        .map((p) => ({ ...p, product: getProduct(p.productId) }))
        .filter((p): p is typeof p & { product: NonNullable<typeof p.product> } => Boolean(p.product));
      if (!picks.length) return null;
      return (
        <section className="not-prose mt-10" aria-label={b.heading ?? "Product recommendations"}>
          {b.heading && <h3 className="text-xl font-bold tracking-tight">{b.heading}</h3>}
          {picks.some((p) => hasAffiliateLink(p.product)) && <LinkLevelDisclosure className="mt-1" />}
          <div className="mt-5 space-y-6">
            {picks.map((p, i) => (
              <ProductCard key={p.productId} product={p.product} label={p.label} why={p.why} index={i} />
            ))}
          </div>
        </section>
      );
    }
    case "figure":
      return (
        <figure className="mt-10">
          <Illustration name={b.illustration} alt={b.alt} />
          {b.caption && <figcaption className="mt-2 text-sm text-steel-600">{b.caption}</figcaption>}
        </figure>
      );
    case "verdict":
      return (
        <aside className="surface-dark mt-12 bg-charcoal p-6 text-ivory md:p-8" aria-label={b.title}>
          <p className="kicker flex items-center gap-2 text-lime">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {b.title}
          </p>
          <p className="mt-3 font-display text-xl leading-snug md:text-2xl [&_a]:text-lime">
            <InlineText text={b.text} />
          </p>
        </aside>
      );
    case "choice":
      return (
        <div className={`mt-8 grid gap-4 ${b.options.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {b.options.map((o, i) => (
            <section key={o.title} className={`border-t-4 p-5 ${i === 0 ? "border-lime bg-charcoal text-ivory" : "border-charcoal bg-ivory-100"}`}>
              <h3 className="text-lg font-bold">{o.title}</h3>
              <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed">
                {o.chooseIf.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden="true" className={i === 0 ? "text-lime" : ""}>→</span>
                    <span>
                      <InlineText text={c} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      );
  }
}
