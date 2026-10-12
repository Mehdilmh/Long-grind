import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "About LongGrind",
  absoluteTitle: true,
  description: "LongGrind publishes practical, research-based guides to desk setups and workspace gear. Here's who we are for, what we cover and how we work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage title="About LongGrind" lead={`${site.tagline} LongGrind helps people build better workspaces through practical buying guides, clear comparisons and honest recommendations.`} path="/about" lastUpdated="2026-10-12">
      <h2>What we do</h2>
      <p>
        LongGrind is an independent publication about desk setups, productivity gear, keyboards, lighting, organization
        and the equipment gamers and creators use at their desks. We write for remote workers, students, programmers,
        gamers and creators who want a workspace that is comfortable, tidy and built to last.
      </p>
      <p>
        Our guides explain trade-offs. Rather than declaring a single &quot;best&quot; product for everyone, we describe
        who an option suits, who should choose something else, and what evidence our advice is based on.
      </p>
      <h2 id="editorial-team">Who writes LongGrind</h2>
      <p>
        Guides are currently published under the LongGrind Editorial Team byline. Unless an article states otherwise,
        our guides are research-based overviews built from manufacturer documentation, published standards and public
        guidance. We do not claim hands-on testing we haven&apos;t done, and we label every guide with the method used.
      </p>
      <OwnerNotice>
        Add real author profiles (name, role and relevant, verifiable experience) to <code>src/content/authors.ts</code> once
        the people writing for LongGrind agree to be named. Do not invent names or credentials.
      </OwnerNotice>
      <h2>How we make money</h2>
      <p>
        LongGrind is supported by affiliate commissions, primarily through the Amazon Associates program. When you buy
        through some of our links, we may earn a commission at no extra cost to you. Commissions never decide what we
        recommend. Read the full <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>What we don&apos;t do</h2>
      <ul>
        <li>Publish invented star ratings, scores, testimonials or review counts.</li>
        <li>Show prices, discounts or stock levels we can&apos;t verify in real time.</li>
        <li>Use fake urgency, countdown timers or disguised ads.</li>
        <li>Accept payment for positive coverage.</li>
      </ul>
      <h2>Learn more</h2>
      <ul>
        <li><Link href="/editorial-policy">Editorial policy</Link></li>
        <li><Link href="/how-we-evaluate">How we evaluate products</Link></li>
        <li><Link href="/contact">Contact LongGrind</Link></li>
      </ul>
    </ContentPage>
  );
}
