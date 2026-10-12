import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How We Evaluate Products",
  description: "The criteria and evidence behind LongGrind recommendations, what research-based means, and why we don't publish star ratings or invented scores.",
  path: "/how-we-evaluate",
});

export default function HowWeEvaluatePage() {
  return (
    <ContentPage title="How We Evaluate Products" lead="What our recommendations are based on, what they're not based on, and how to read them." path="/how-we-evaluate" lastUpdated="2026-10-12">
      <h2>Two kinds of guide</h2>
      <h3>Research-based overview</h3>
      <p>
        Most LongGrind guides are research-based. We study manufacturer specifications and documentation, relevant
        standards (such as VESA mounting patterns) and published guidance (such as OSHA&apos;s computer workstation
        eTool). We then explain how those facts translate into real decisions about a desk. A research-based guide does
        not involve physically testing the products, and we label it that way at the top of the article.
      </p>
      <h3>Hands-on review</h3>
      <p>
        A hands-on review means the named author has used the product. These reviews describe how long and in what
        setup the product was used, and they still separate measured facts from impressions. We won&apos;t publish a
        hands-on label without those notes.
      </p>
      <h2>What we look at</h2>
      <ul>
        <li><strong>Fit:</strong> does it suit the desk, room and person it&apos;s recommended for?</li>
        <li><strong>Problem solved:</strong> what specific friction does it remove?</li>
        <li><strong>Compatibility:</strong> standards, mounting, connectivity and operating system support.</li>
        <li><strong>Trade-offs:</strong> what you give up compared with the alternatives.</li>
        <li><strong>Clarity of documentation:</strong> are the manufacturer&apos;s specs complete and consistent? When they conflict, we say so.</li>
      </ul>
      <h2>What we deliberately don&apos;t publish</h2>
      <ul>
        <li><strong>Star ratings and numerical scores.</strong> A single number hides the trade-offs that actually matter.</li>
        <li><strong>Prices and stock levels.</strong> They change constantly; check the retailer for current information.</li>
        <li><strong>Customer review excerpts or star averages from retailers.</strong></li>
        <li><strong>Performance claims we can&apos;t source.</strong></li>
      </ul>
      <h2>Product examples</h2>
      <p>
        When a guide names specific products, they&apos;re examples chosen because their published specifications
        illustrate a point clearly, or because they suit a particular reader. Each product card shows the specifications
        we verified, the source and the date we checked it. Variants and regional versions differ, so always check the
        exact model before buying.
      </p>
      <p>
        Affiliate relationships never determine which products appear. See our <Link href="/affiliate-disclosure">affiliate disclosure</Link>{" "}
        and <Link href="/editorial-policy">editorial policy</Link>.
      </p>
    </ContentPage>
  );
}
