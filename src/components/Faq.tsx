import { Plus } from "lucide-react";
import { InlineText } from "./InlineText";

/** Visible FAQ built on native <details>, so it works without JavaScript. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="faq-heading" className="mt-16 border-t border-charcoal/15 pt-8">
      <h2 id="faq-heading" className="font-display text-display-md font-semibold">
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y divide-charcoal/15 border-y border-charcoal/15">
        {items.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-lg font-semibold leading-snug [&::-webkit-details-marker]:hidden">
              <h3>{f.q}</h3>
              <Plus className="mt-1 h-5 w-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="pb-5 leading-relaxed text-charcoal/85">
              <InlineText text={f.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
