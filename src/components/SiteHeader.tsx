import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { primaryNav } from "@/config/site";

/**
 * Sticky header. The mobile menu uses <details>, so navigation works with
 * JavaScript disabled and ships no client JS.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur supports-[backdrop-filter]:bg-ivory/75">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory">
        Skip to content
      </a>
      <div className="container flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.9rem] font-semibold">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="relative px-2.5 py-2 after:absolute after:inset-x-2.5 after:bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:bg-lime after:transition-transform hover:after:scale-x-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="group lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-charcoal/20 [&::-webkit-details-marker]:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden h-5 w-5 group-open:block" aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile" className="surface-dark absolute inset-x-0 top-16 border-t border-charcoal bg-charcoal px-4 pb-8 pt-4 text-ivory shadow-2xl">
            <ul className="divide-y divide-ivory/10">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-[48px] items-center text-lg font-semibold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="flex min-h-[48px] items-center text-steel">
                  About LongGrind
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
