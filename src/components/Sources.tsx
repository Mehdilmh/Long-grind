import type { Source } from "@/lib/schema";
import { formatDate } from "@/lib/text";

export function Sources({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section aria-labelledby="sources-heading" className="mt-16 border-t border-charcoal/15 pt-8">
      <h2 id="sources-heading" className="font-display text-2xl font-semibold">
        Sources &amp; verification
      </h2>
      <p className="mt-2 text-sm text-steel-600">
        Factual claims in this guide are based on the sources below. Dates show when we last checked each one.
      </p>
      <ol className="mt-5 space-y-4 text-sm">
        {sources.map((s, i) => (
          <li key={`${s.url}-${i}`} className="grid grid-cols-[2rem_1fr] gap-2">
            <span className="font-bold text-steel-600">{i + 1}.</span>
            <div>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-underline font-semibold">
                {s.title}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <span className="text-charcoal/80"> — {s.publisher}. Accessed {formatDate(s.accessed)}.</span>
              {s.supports && <p className="mt-1 text-charcoal/70">Supports: {s.supports}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
