import Link from "next/link";
import { publicEnv } from "@/lib/env";

/**
 * Renders only when a real provider endpoint is configured. The form posts
 * directly to the provider; LongGrind stores nothing.
 */
export function Newsletter() {
  const action = publicEnv.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;
  if (!action) return null;
  const provider = publicEnv.NEXT_PUBLIC_NEWSLETTER_PROVIDER_NAME ?? "our email provider";
  return (
    <section aria-labelledby="newsletter-heading" className="surface-dark bg-charcoal text-ivory">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:items-end">
        <div>
          <p className="kicker text-lime">Newsletter</p>
          <h2 id="newsletter-heading" className="mt-3 font-display text-display-md font-semibold">
            New guides, when they&apos;re ready.
          </h2>
          <p className="mt-3 text-ivory/75">No daily deals, no countdowns. Unsubscribe anytime.</p>
        </div>
        <form action={action} method="post" target="_blank" className="flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="text-sm font-semibold">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input id="newsletter-email" name="email" type="email" required autoComplete="email" className="min-h-[48px] flex-1 border border-ivory/30 bg-charcoal-900 px-4 text-ivory placeholder:text-steel" placeholder="you@example.com" />
            <button type="submit" className="btn-lime">Subscribe</button>
          </div>
          <p className="text-xs text-steel">
            Your email is sent to {provider} to manage the newsletter. See our <Link href="/privacy" className="underline">privacy policy</Link>.
          </p>
        </form>
      </div>
    </section>
  );
}
