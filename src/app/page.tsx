import Link from "next/link";
import { ArrowRight, BookOpenCheck, FileSearch, Scale, ShieldCheck } from "lucide-react";
import { getArticles, getArticleBySlug, getArticlesInCategory, getCategories, articlePath } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";
import { Illustration } from "@/components/Illustration";
import { PhotoImage } from "@/components/PhotoImage";
import { photos } from "@/content/photos";
import { Newsletter } from "@/components/Newsletter";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: `${site.name} — Desk Setup & Productivity Gear Guides`,
  absoluteTitle: true,
  description:
    "Practical, research-based guides to desk setups, keyboards, monitor arms, cable management and workspace gear for remote workers, students, gamers and creators.",
  path: "/",
});

const principles = [
  { n: "01", title: "Screen first", text: "Set screen height and distance before buying anything else. It changes what else you need.", href: "/desk-workspace/monitor-arm-vs-monitor-stand", illustration: "monitor" },
  { n: "02", title: "One power hub", text: "Mount one strip high and plugged into the wall. Every cable route starts there.", href: "/lighting-organization/how-to-organize-cables-under-desk", illustration: "cables" },
  { n: "03", title: "Right-size the keyboard", text: "Drop the keys you never use and give your mouse hand its space back.", href: "/keyboards-peripherals/mechanical-keyboard-sizes-explained", illustration: "keyboard" },
];

export default function HomePage() {
  const articles = getArticles();
  const feature = getArticleBySlug("mechanical-keyboard-sizes-explained") ?? articles[0];
  const others = articles.filter((a) => a.slug !== feature?.slug).slice(0, 2);
  const comparison = getArticleBySlug("monitor-arm-vs-monitor-stand");
  const categories = getCategories();

  return (
    <>
      {/* Hero */}
      <section className="surface-dark relative overflow-hidden bg-charcoal text-ivory">
        <div className="container grid gap-12 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-12 lg:items-center">
          <div className="animate-rise-in lg:col-span-6">
            <p className="kicker text-lime">Desk setups · Productivity gear · Honest guides</p>
            <h1 className="mt-5 font-display text-display-xl font-semibold">
              Build a desk that&apos;s made for the <em className="font-normal italic text-lime">long game.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
              Practical guides to monitors, keyboards, lighting and organization, written to help you make fewer,
              better purchases. Clear trade-offs, cited sources and no invented scores.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/buying-guides" className="btn-lime">
                Explore buying guides <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/how-we-evaluate" className="btn border border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal">
                How we evaluate products
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div aria-hidden="true" className="absolute -inset-3 translate-x-4 translate-y-4 border border-lime/40" />
              <PhotoImage photo={photos["desk-flatlay"]} className="relative" priority sizes="(min-width: 1024px) 640px, 100vw" />
            </div>
          </div>
        </div>
        <div className="border-t border-ivory/10">
          <ul className="container grid grid-cols-2 gap-y-3 py-5 text-sm text-ivory/75 md:grid-cols-4">
            <li className="flex items-center gap-2"><FileSearch className="h-4 w-4 text-lime" aria-hidden="true" />Sources cited</li>
            <li className="flex items-center gap-2"><Scale className="h-4 w-4 text-lime" aria-hidden="true" />Trade-offs, not hype</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-lime" aria-hidden="true" />No fake ratings</li>
            <li className="flex items-center gap-2"><BookOpenCheck className="h-4 w-4 text-lime" aria-hidden="true" />Methods disclosed</li>
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section aria-labelledby="sections-heading" className="container py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker text-steel-600">Browse by section</p>
            <h2 id="sections-heading" className="mt-2 font-display text-display-lg font-semibold">
              Start where your desk needs help
            </h2>
          </div>
        </div>
        <ul className="mt-10 grid gap-px border border-charcoal/15 bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => {
            const count = getArticlesInCategory(c.slug).length;
            return (
              <li key={c.slug} className={`group relative bg-ivory-100 ${i === 0 ? "sm:col-span-2" : ""}`}>
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none">
                    <Illustration name={c.illustration} alt="" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="kicker text-steel-600">{c.kicker}</p>
                  <h3 className={`mt-1 font-bold tracking-tight ${i === 0 ? "font-display text-3xl" : "text-lg"}`}>
                    <Link href={`/${c.slug}`} className="after:absolute after:inset-0 decoration-lime decoration-[3px] underline-offset-4 group-hover:underline">
                      {c.name}
                    </Link>
                  </h3>
                  {i === 0 && <p className="mt-2 text-charcoal/80">{c.description}</p>}
                  <p className="mt-2 text-sm text-steel-600">{count === 0 ? "Primer & planned guides" : `${count} ${count === 1 ? "guide" : "guides"}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Editor's picks */}
      {feature && (
        <section aria-labelledby="picks-heading" className="border-y border-charcoal/10 bg-ivory-100 py-20">
          <div className="container">
            <p className="kicker text-steel-600">Editor&apos;s picks</p>
            <h2 id="picks-heading" className="mt-2 font-display text-display-lg font-semibold">
              Guides worth reading first
            </h2>
            <div className="mt-12">
              <ArticleCard article={feature} variant="feature" />
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {others.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured comparison */}
      {comparison && (
        <section aria-labelledby="comparison-heading" className="surface-dark bg-charcoal py-20 text-ivory">
          <div className="container grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="kicker text-lime">Featured comparison</p>
              <h2 id="comparison-heading" className="mt-3 font-display text-display-lg font-semibold">
                {comparison.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ivory/80">{comparison.dek}</p>
              <Link href={articlePath(comparison)} className="btn-lime mt-8">
                Read the comparison <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-px bg-ivory/15 text-sm">
                {[
                  ["", "Arm", "Stand"],
                  ["Desk surface", "Freed", "Base takes space"],
                  ["Adjustment", "Height, depth, angle", "Varies by stand"],
                  ["Install", "Clamp or grommet", "None"],
                  ["Needs", "VESA + weight match", "Any stable desk"],
                ].map((row, ri) => (
                  <div key={ri} className="contents">
                    {ri === 0 ? (
                      <>
                        <div className="bg-lime p-4 font-bold text-charcoal">Monitor arm</div>
                        <div className="bg-ivory p-4 font-bold text-charcoal">Monitor stand</div>
                      </>
                    ) : (
                      <>
                        <div className="bg-charcoal-700 p-4"><span className="block text-xs uppercase tracking-wider text-steel">{row[0]}</span>{row[1]}</div>
                        <div className="bg-charcoal-700 p-4"><span className="block text-xs uppercase tracking-wider text-steel">{row[0]}</span>{row[2]}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Workspace inspiration */}
      <section aria-labelledby="inspiration-heading" className="container py-20">
        <p className="kicker text-steel-600">Workspace inspiration</p>
        <h2 id="inspiration-heading" className="mt-2 max-w-3xl font-display text-display-lg font-semibold">
          Three moves that make any desk feel calmer
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <li key={p.n} className="group relative">
              <Illustration name={p.illustration} alt="" />
              <p aria-hidden="true" className="mt-5 inline-block bg-charcoal px-2 py-1 font-display text-2xl font-semibold text-lime">{p.n}</p>
              <h3 className="mt-1 text-xl font-bold">
                <Link href={p.href} className="after:absolute after:inset-0 decoration-lime decoration-[3px] underline-offset-4 group-hover:underline">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-2 leading-relaxed text-charcoal/80">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Recently published + methodology */}
      <section className="container grid gap-16 pb-8 lg:grid-cols-12">
        <div className="lg:col-span-5" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="font-display text-3xl font-semibold">
            Recently published
          </h2>
          <div className="mt-6">
            {articles.slice(0, 5).map((a) => (
              <ArticleCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-7" aria-labelledby="method-heading">
          <div className="h-full border border-charcoal/15 bg-ivory-100 p-8 md:p-10">
            <p className="kicker text-steel-600">How LongGrind works</p>
            <h2 id="method-heading" className="mt-2 font-display text-3xl font-semibold">
              Recommendations you can check
            </h2>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                ["We say how we know", "Every guide states whether it's a research-based overview or based on hands-on use. We never imply testing we didn't do."],
                ["Facts are sourced", "Specifications link to manufacturer documentation or published guidance, with the date we checked."],
                ["No invented numbers", "No star ratings, fake scores, made-up prices or countdown timers. Ever."],
                ["Money is disclosed", "We earn commissions from some links. Disclosures sit next to recommendations, not hidden in a footer."],
              ].map(([t, d]) => (
                <div key={t} className="border-t-2 border-lime pt-3">
                  <dt className="font-bold">{t}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-charcoal/80">{d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/editorial-policy" className="link-underline">Editorial policy</Link>
              <Link href="/how-we-evaluate" className="link-underline">How we evaluate products</Link>
              <Link href="/affiliate-disclosure" className="link-underline">Affiliate disclosure</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Newsletter />
      </div>
    </>
  );
}
