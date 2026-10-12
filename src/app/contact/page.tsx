import Link from "next/link";
import { Mail } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Contact LongGrind",
  absoluteTitle: true,
  description: "How to contact LongGrind with corrections, questions about a guide, privacy requests or partnership enquiries.",
  path: "/contact",
});

/**
 * Deliberately no web form: a form that isn't connected to a real, monitored
 * inbox would silently discard messages. Email is shown once configured.
 */
export default function ContactPage() {
  return (
    <ContentPage title="Contact LongGrind" lead="Corrections, questions about a guide, privacy requests or anything else: we read every message." path="/contact">
      {site.contactEmail ? (
        <div className="not-prose flex flex-col gap-4 border border-charcoal/15 bg-ivory-100 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="kicker text-steel-600">Email</p>
            <p className="mt-1 text-xl font-semibold">{site.contactEmail}</p>
          </div>
          <a href={`mailto:${site.contactEmail}`} className="btn-dark">
            <Mail className="h-4 w-4" aria-hidden="true" /> Send an email
          </a>
        </div>
      ) : (
        <>
          <p>Contact details for LongGrind are being set up and will be listed here shortly.</p>
          <OwnerNotice>
            Set <code>NEXT_PUBLIC_CONTACT_EMAIL</code> to a real, monitored address. No contact form is included on purpose;
            only add one if it delivers to a real inbox.
          </OwnerNotice>
        </>
      )}
      <h2>What to include</h2>
      <ul>
        <li><strong>Corrections:</strong> the page URL, the statement you believe is wrong, and a source if you have one.</li>
        <li><strong>Privacy requests:</strong> what you&apos;d like us to do. See our <Link href="/privacy">privacy policy</Link>.</li>
        <li><strong>Brands and PR:</strong> we don&apos;t accept payment for coverage. Product information is welcome; see our <Link href="/editorial-policy">editorial policy</Link>.</li>
      </ul>
    </ContentPage>
  );
}
