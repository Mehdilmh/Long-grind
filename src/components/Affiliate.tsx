import { ArrowUpRight } from "lucide-react";
import { buildAffiliateUrl } from "@/lib/affiliate";
import { disclosures, marketplaces } from "@/config/affiliate";
import type { Product } from "@/lib/schema";
import Link from "next/link";

/**
 * The single reusable affiliate link. Renders nothing unless the product has a
 * verified destination that passes validation, so a missing or malformed URL
 * can never produce a fake CTA.
 */
export function AffiliateButton({ product, className = "" }: { product: Product; className?: string }) {
  if (!product.affiliate) return null;
  const result = buildAffiliateUrl(product.affiliate.destinationUrl, product.affiliate.marketplace);
  if (!result.ok) return null;
  const store = marketplaces[result.marketplace].label;
  return (
    <a
      href={result.url}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`btn-lime group ${className}`}
      data-affiliate="amazon"
    >
      <span>
        Check current price on {store}
        <span className="sr-only"> (paid link, opens in a new tab)</span>
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      <span aria-hidden="true" className="ml-1 border-l border-charcoal/30 pl-2 text-[0.65rem] font-semibold uppercase tracking-wider opacity-70">
        {disclosures.linkLabel}
      </span>
    </a>
  );
}

export function hasAffiliateLink(p: Product) {
  return Boolean(p.affiliate && buildAffiliateUrl(p.affiliate.destinationUrl, p.affiliate.marketplace).ok);
}

/** Prominent disclosure shown near the top of any article with product recommendations. */
export function DisclosureBanner() {
  return (
    <aside
      aria-label="Affiliate disclosure"
      className="flex gap-3 border-l-4 border-lime bg-charcoal px-4 py-3 text-sm text-ivory"
    >
      <p>
        <strong className="font-semibold">Disclosure:</strong> {disclosures.amazon} LongGrind may earn a commission when
        you buy through links on this page, at no extra cost to you. It never affects what we recommend.{" "}
        <Link href="/affiliate-disclosure" className="link-underline">
          How we make money
        </Link>
      </p>
    </aside>
  );
}

/** Short link-level disclosure placed directly beside product recommendations. */
export function LinkLevelDisclosure({ className = "" }: { className?: string }) {
  return <p className={`text-xs text-steel-600 ${className}`}>{disclosures.linkLevel}</p>;
}
