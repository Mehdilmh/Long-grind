import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/seo";
import { disclosures } from "@/config/affiliate";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: "LongGrind earns commissions through affiliate links, including as an Amazon Associate. Here's how affiliate links work on this site and how we label them.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <ContentPage title="Affiliate Disclosure" lead="LongGrind is reader-supported. Here's exactly how we earn money and how we label it." path="/affiliate-disclosure" lastUpdated="2026-10-12">
      <div className="not-prose border-l-4 border-lime bg-charcoal p-6 text-ivory">
        <p className="text-xl font-semibold">{disclosures.amazon}</p>
      </div>
      <h2>How affiliate links work</h2>
      <p>
        Some links on LongGrind are affiliate links. If you click one and make a qualifying purchase, the retailer may
        pay LongGrind a commission. You don&apos;t pay anything extra. LongGrind is a participant in the Amazon Services
        LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn
        advertising fees by advertising and linking to Amazon.com.
      </p>
      <h2>How we label them</h2>
      <ul>
        <li>Articles that contain affiliate links show a disclosure near the top, before the first recommendation.</li>
        <li>A short disclosure appears next to product recommendations: &quot;{disclosures.linkLevel}&quot;</li>
        <li>Affiliate buttons are marked &quot;{disclosures.linkLabel}&quot; and open the retailer in a new tab.</li>
        <li>Affiliate links are tagged <code>rel=&quot;sponsored&quot;</code> so search engines can identify them.</li>
      </ul>
      <h2>What affiliate relationships don&apos;t change</h2>
      <p>
        Commissions don&apos;t influence which products we cover, how we describe them or whether we recommend them. We
        recommend products without affiliate links when they&apos;re the better fit, and we often recommend not buying
        anything at all. See our <Link href="/editorial-policy">editorial policy</Link>.
      </p>
      <h2>Prices and availability</h2>
      <p>
        We don&apos;t display prices, discounts or availability, because they change frequently. Always check the
        retailer&apos;s page for the current price and availability before buying.
      </p>
      <h2>Questions</h2>
      <p>
        If anything about how we earn money is unclear, please <Link href="/contact">contact us</Link>.
      </p>
    </ContentPage>
  );
}
