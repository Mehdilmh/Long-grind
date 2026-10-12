import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description: "How LongGrind researches, writes, sources, reviews, updates and corrects its guides, and how we keep editorial decisions separate from affiliate revenue.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <ContentPage title="Editorial Policy" lead="The standards every LongGrind guide follows, from the first research note to later updates and corrections." path="/editorial-policy" lastUpdated="2026-10-12">
      <OwnerNotice>Review this policy and confirm it reflects how LongGrind actually operates before launch.</OwnerNotice>
      <h2>Independence</h2>
      <p>
        Editorial decisions are made on the basis of what is useful to readers. Affiliate relationships, commission rates
        and brand requests do not determine which products we cover or how we describe them. We don&apos;t accept payment
        for coverage. If that ever changes for a specific piece, it will be clearly labeled as sponsored.
      </p>
      <h2>Research and sourcing</h2>
      <ul>
        <li>Product specifications come from manufacturer documentation or other primary sources, linked in the article with the date we checked them.</li>
        <li>Health, safety and ergonomics statements are based on published guidance from recognized bodies, and we describe them as guidance, not medical advice.</li>
        <li>When sources disagree, we say so or leave the claim out.</li>
        <li>We don&apos;t copy or paraphrase other publishers&apos; reviews and present them as our own work.</li>
      </ul>
      <h2>Facts, opinions and unknowns</h2>
      <p>
        We keep verified facts (specification tables and sourced statements) visually and structurally separate from
        editorial opinion (&quot;best for&quot;, &quot;consider instead if&quot;, verdicts). When something is not verified, we
        either leave it out or label it clearly.
      </p>
      <h2>Testing claims</h2>
      <p>
        Each guide states its method: a <strong>research-based overview</strong> or a <strong>hands-on review</strong>. We
        never describe a product as tested, used or measured unless the named author actually did so. See{" "}
        <Link href="/how-we-evaluate">how we evaluate products</Link>.
      </p>
      <h2>Use of AI tools</h2>
      <p>
        AI tools may assist with research organization or drafting. Nothing is published automatically: every article
        is reviewed by a person against its sources before publication, and that person is responsible for its accuracy.
      </p>
      <h2>Publishing workflow</h2>
      <ol>
        <li><strong>Draft:</strong> research, sources and outline. Not visible on the site.</li>
        <li><strong>Review:</strong> fact-check every claim against its source, check disclosures and links.</li>
        <li><strong>Published:</strong> live, indexed and listed in the sitemap.</li>
      </ol>
      <h2>Updates and corrections</h2>
      <p>
        We show an &quot;Updated&quot; date only when an article has changed in a meaningful way, such as new information,
        changed recommendations or corrected facts, not for cosmetic edits. If you spot an error, please{" "}
        <Link href="/contact">contact us</Link>. Significant corrections are noted in the article.
      </p>
    </ContentPage>
  );
}
