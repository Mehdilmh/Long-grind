import Link from "next/link";
import { ContentPage, Placeholder } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "The terms that apply when you use LongGrind, including the informational nature of our guides, affiliate links, intellectual property and limitations.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPage title="Terms of Use" lead="By using longgrind.com you agree to these terms. Please read them alongside our privacy policy." path="/terms" lastUpdated="2026-10-12">
      <OwnerNotice>Template only. Have these terms reviewed by a qualified professional and complete the highlighted fields.</OwnerNotice>
      <h2>About these terms</h2>
      <p>
        These terms govern your use of longgrind.com, operated by <Placeholder>legal name of the operator</Placeholder>.
      </p>
      <h2>Informational content only</h2>
      <p>
        Our guides are general information to help you make your own decisions. They are not professional, medical,
        electrical or safety advice. Ergonomics information reflects published guidance and may not suit your
        circumstances; consult a qualified professional for personal advice. Always follow manufacturers&apos; instructions
        when installing products, and have electrical work done by a qualified person.
      </p>
      <h2>Accuracy</h2>
      <p>
        We work to keep guides accurate and show when facts were last checked, but products change and specifications
        vary by version and region. Confirm details with the manufacturer or retailer before buying.
      </p>
      <h2>Affiliate links and third-party sites</h2>
      <p>
        Some links are affiliate links (see our <Link href="/affiliate-disclosure">affiliate disclosure</Link>). We are not
        responsible for third-party websites, their content, products, pricing, shipping or returns. Purchases are
        between you and the retailer.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Text, illustrations, the LongGrind name and logo are owned by LongGrind unless otherwise noted. You may share
        links and short quotations with attribution. Please don&apos;t republish full articles or illustrations without
        permission. Third-party trademarks belong to their owners and are used for identification only.
      </p>
      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, LongGrind is provided &quot;as is&quot; without warranties, and we are not liable for
        losses arising from your use of the site or reliance on its content. <Placeholder>confirm wording appropriate to your jurisdiction</Placeholder>
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of <Placeholder>state / country</Placeholder>.</p>
      <h2>Changes and contact</h2>
      <p>
        We may update these terms and will change the date above when we do. Questions: see our <Link href="/contact">contact page</Link>.
      </p>
    </ContentPage>
  );
}
