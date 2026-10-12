import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { OwnerNotice } from "@/components/OwnerNotice";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "LongGrind sets no cookies of its own and loads no advertising trackers. Here's what happens when you follow an affiliate link or enable optional services.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <ContentPage title="Cookie Policy" lead="Short version: LongGrind itself sets no cookies and runs no advertising trackers." path="/cookies" lastUpdated="2026-10-12">
      <OwnerNotice>
        Re-check this page whenever you add a third-party script, embed or service. If anything you add sets non-essential
        cookies, you will likely need a consent mechanism that blocks those scripts until visitors agree.
      </OwnerNotice>
      <h2>Cookies set by LongGrind</h2>
      <p>
        None. The site is built so that pages, navigation and menus work without cookies or local storage. Our optional
        analytics, if enabled, is a cookieless service.
      </p>
      <h2>Third-party cookies</h2>
      <p>
        We don&apos;t embed advertising networks, social media widgets or video players by default. Our &quot;Save to
        Pinterest&quot; link is a plain link: nothing is loaded from Pinterest unless you click it.
      </p>
      <p>
        When you follow an affiliate link to a retailer such as Amazon, that retailer may set cookies on its own site to
        attribute your purchase. Those cookies are governed by the retailer&apos;s policies. See our{" "}
        <Link href="/privacy">privacy policy</Link> and <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>Managing cookies</h2>
      <p>You can block or delete cookies through your browser settings at any time; LongGrind will continue to work.</p>
    </ContentPage>
  );
}
