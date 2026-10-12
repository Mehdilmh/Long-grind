import Link from "next/link";
import { ContentPage, Placeholder } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";
import { publicEnv } from "@/lib/env";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What information LongGrind collects, how optional analytics and affiliate links work, which third parties may receive data and how to contact us about privacy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const analytics = Boolean(publicEnv.NEXT_PUBLIC_ANALYTICS_DOMAIN);
  const newsletter = Boolean(publicEnv.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION);
  return (
    <ContentPage title="Privacy Policy" lead="This policy explains what information is collected when you use LongGrind and how it is used." path="/privacy" lastUpdated="2026-10-12">
      <OwnerNotice>
        This is a starting template, not legal advice. Have it reviewed by a qualified professional for the jurisdictions
        you operate in and target (for example the U.S. states with consumer privacy laws, and the UK/EU if relevant),
        fill in every highlighted placeholder, and update it whenever you add analytics, email or other services.
      </OwnerNotice>
      <h2>Who we are</h2>
      <p>
        LongGrind (longgrind.com) is operated by <Placeholder>legal name of the person or business operating LongGrind</Placeholder>,{" "}
        <Placeholder>business address, if required</Placeholder>. Privacy questions can be sent to{" "}
        {publicEnv.NEXT_PUBLIC_CONTACT_EMAIL ? <a href={`mailto:${publicEnv.NEXT_PUBLIC_CONTACT_EMAIL}`}>{publicEnv.NEXT_PUBLIC_CONTACT_EMAIL}</a> : <Placeholder>privacy contact email</Placeholder>}.
      </p>
      <h2>Information we collect</h2>
      <h3>Server and hosting logs</h3>
      <p>
        Like most websites, our hosting provider (<Placeholder>hosting provider name</Placeholder>) may automatically
        process technical information such as IP address, browser type and requested pages to deliver and secure the
        site. See the hosting provider&apos;s privacy documentation for retention details.
      </p>
      <h3>Analytics</h3>
      {analytics ? (
        <p>
          We use a privacy-focused, cookieless analytics service to count page views and understand which guides are
          useful. It does not use cookies and is designed not to collect personal data or track you across sites.
          <Placeholder>name the analytics provider and link its data policy</Placeholder>
        </p>
      ) : (
        <p>LongGrind does not currently run any analytics scripts.</p>
      )}
      <h3>Email newsletter</h3>
      {newsletter ? (
        <p>
          If you subscribe, your email address is sent to our email provider to deliver the newsletter. You can
          unsubscribe at any time using the link in every email. <Placeholder>name the provider and link its privacy policy</Placeholder>
        </p>
      ) : (
        <p>LongGrind does not currently operate a newsletter or collect email addresses through this site.</p>
      )}
      <h3>Contacting us</h3>
      <p>If you email us, we use your message and address only to reply and keep a record of the conversation.</p>
      <h2>Affiliate links and third-party sites</h2>
      <p>
        When you click an affiliate link (for example to Amazon), you leave LongGrind. The retailer may use cookies or
        similar technologies to attribute purchases to us. That data is controlled by the retailer under its own privacy
        policy; LongGrind does not receive your personal information or purchase details beyond aggregated commission
        reports. See our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>Cookies</h2>
      <p>See our <Link href="/cookies">cookie policy</Link>.</p>
      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete or object to processing of your
        personal information. To make a request, contact us using the details above. <Placeholder>describe the request process and response times required in your jurisdictions</Placeholder>
      </p>
      <h2>Children</h2>
      <p>LongGrind is not directed at children under 13, and we do not knowingly collect their personal information.</p>
      <h2>Changes</h2>
      <p>We&apos;ll update the date at the top of this page whenever this policy changes.</p>
    </ContentPage>
  );
}
