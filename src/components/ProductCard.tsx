import { Check, Minus, ExternalLink } from "lucide-react";
import type { Product } from "@/lib/schema";
import { AffiliateButton, hasAffiliateLink, LinkLevelDisclosure } from "./Affiliate";
import { InlineText } from "./InlineText";
import { formatDate } from "@/lib/text";

/**
 * Editorial product card. Facts (specs) are visually separated from opinion
 * (label, why, best for, consider instead). No prices, ratings or stock info.
 */
export function ProductCard({ product, label, why, index }: { product: Product; label: string; why: string; index: number }) {
  const linked = hasAffiliateLink(product);
  return (
    <article className="grid gap-0 border border-charcoal/15 bg-ivory-100 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]" aria-labelledby={`product-${product.id}`}>
      <div className="relative flex min-h-[200px] flex-col justify-between bg-charcoal p-6 text-ivory">
        <span className="kicker text-lime">
          {String(index + 1).padStart(2, "0")} · {label}
        </span>
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- remote rights-cleared product image; dimensions provided
          <img src={product.image.src} alt={product.image.alt} width={product.image.width} height={product.image.height} loading="lazy" className="mx-auto my-4 max-h-48 w-auto object-contain" />
        ) : (
          <div aria-hidden="true" className="my-6 font-display text-6xl leading-none tracking-tight text-ivory/90">
            {product.brand}
          </div>
        )}
        <p className="text-xs text-steel">{product.image ? product.image.rights : "Product photo not shown until image rights are confirmed."}</p>
      </div>
      <div className="flex flex-col gap-5 p-6">
        <div>
          <h3 id={`product-${product.id}`} className="font-display text-2xl font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="mt-2 leading-relaxed text-charcoal/85">
            <InlineText text={why} />
          </p>
        </div>

        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="border-t-2 border-lime pt-2">
            <dt className="kicker text-charcoal/70">Best for</dt>
            <dd className="mt-1">{product.bestFor}</dd>
          </div>
          {product.considerInsteadIf && (
            <div className="border-t-2 border-charcoal/20 pt-2">
              <dt className="kicker text-charcoal/70">Consider something else if</dt>
              <dd className="mt-1">{product.considerInsteadIf}</dd>
            </div>
          )}
        </dl>

        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <h4 className="kicker text-charcoal/70">Strengths</h4>
            <ul className="mt-2 space-y-1.5">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-charcoal" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="kicker text-charcoal/70">Trade-offs</h4>
            <ul className="mt-2 space-y-1.5">
              {product.limitations.map((b) => (
                <li key={b} className="flex gap-2">
                  <Minus className="mt-0.5 h-4 w-4 shrink-0 text-steel-600" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {product.specs.length > 0 && (
          <details className="group border-t border-charcoal/15 pt-3 text-sm">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              <span className="link-underline">Verified specifications</span>{" "}
              <span className="text-steel-600">(checked {formatDate(product.lastVerified)})</span>
            </summary>
            <table className="mt-3 w-full text-left">
              <caption className="sr-only">Specifications for {product.name}</caption>
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label} className="border-b border-charcoal/10 align-top">
                    <th scope="row" className="py-2 pr-4 font-medium text-charcoal/70">{s.label}</th>
                    <td className="py-2">
                      {s.value}{" "}
                      <a href={product.sources[s.sourceIndex]!.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-xs text-steel-600 underline">
                        source<ExternalLink className="h-3 w-3" aria-hidden="true" />
                        <span className="sr-only">: {product.sources[s.sourceIndex]!.publisher} (opens in a new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {product.variantNote && <p className="mt-3 text-steel-600">Note: {product.variantNote}</p>}
          </details>
        )}

        {linked ? (
          <div className="mt-auto flex flex-col gap-2">
            <AffiliateButton product={product} className="w-full sm:w-auto sm:self-start" />
            <LinkLevelDisclosure />
          </div>
        ) : (
          <p className="mt-auto text-xs text-steel-600">
            We haven&apos;t added a verified retailer link for this product yet. Prices and availability vary; check the
            manufacturer&apos;s site.
          </p>
        )}
      </div>
    </article>
  );
}
