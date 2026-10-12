import Script from "next/script";
import { publicEnv } from "@/lib/env";

/**
 * Optional, cookieless analytics (Plausible-compatible). Loads nothing unless
 * NEXT_PUBLIC_ANALYTICS_DOMAIN is set. Because it sets no cookies and collects
 * no personal data by design, no consent banner is required for it in most
 * jurisdictions — the owner must confirm this for their own setup.
 */
export function Analytics() {
  const domain = publicEnv.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  const src = publicEnv.NEXT_PUBLIC_ANALYTICS_SCRIPT_SRC;
  if (!domain || !src) return null;
  return <Script defer data-domain={domain} src={src} strategy="afterInteractive" />;
}
