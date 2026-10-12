import Link from "next/link";
import { Logo } from "./Logo";
import { legalNav, primaryNav, site, trustNav } from "@/config/site";
import { disclosures } from "@/config/affiliate";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark mt-24 bg-charcoal text-ivory">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs font-display text-2xl leading-snug">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
            Practical guides to desk setups and workspace gear. Research-based, clearly sourced and honest about how we
            make money.
          </p>
        </div>
        <FooterCol title="Sections" items={primaryNav} />
        <FooterCol title="Trust" items={trustNav} />
        <FooterCol title="Legal" items={legalNav} />
      </div>
      <div className="border-t border-ivory/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>
            {disclosures.amazon}{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-ivory">
              Read our affiliate disclosure
            </Link>
            .
          </p>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="md:col-span-2 lg:col-span-2 [&:nth-of-type(1)]:md:col-start-6">
      <h2 className="kicker text-lime">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-ivory/85 hover:text-ivory hover:underline">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
