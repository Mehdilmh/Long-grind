import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {
  articlePath,
  getArticles,
  getArticlesInCategory,
  getCategories,
  getCategory,
  getRelatedForCategory,
  isCategoryIndexable,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { Illustration } from "@/components/Illustration";
import { PhotoImage } from "@/components/PhotoImage";
import { getPhoto } from "@/content/photos";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return pageMetadata({
    title: c.seoTitle,
    description: c.description,
    path: `/${c.slug}`,
    // Sections without their own published guides stay out of the index until they have real content.
    noindex: !isCategoryIndexable(c.slug),
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const articles = getArticlesInCategory(c.slug);
  const related = getRelatedForCategory(c.slug, articles);
  const others = getCategories().filter((x) => x.slug !== c.slug);
  const photo = getPhoto(c.photo);

  return (
    <>
      <section className="surface-dark bg-charcoal text-ivory">
        <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Breadcrumbs items={[{ name: c.name, href: `/${c.slug}` }]} tone="dark" />
            <p className="kicker mt-8 text-lime">{c.kicker}</p>
            <h1 className="mt-3 font-display text-display-xl font-semibold">{c.name}</h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ivory/80">
              {c.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            {photo ? (
              <PhotoImage photo={photo} priority sizes="(min-width: 1024px) 500px, 100vw" />
            ) : (
              <Illustration name={c.illustration} alt={`Illustration representing ${c.name.toLowerCase()}.`} priority />
            )}
          </div>
        </div>
      </section>

      <nav aria-label={`${c.name} topics`} className="border-b border-charcoal/10 bg-ivory-100">
        <ul className="container grid gap-px py-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.subtopics.map((s) => {
            const lead = getArticles().find((a) => a.tags.includes(s.tag));
            return (
              <li key={s.name} className="p-3">
                <p className="font-bold">{s.name}</p>
                <p className="mt-1 text-sm text-steel-600">{s.description}</p>
                {lead && (
                  <Link href={articlePath(lead)} className="link-underline mt-2 inline-block text-sm font-semibold">
                    {lead.title.split(":")[0]}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <section id="guides" aria-labelledby="guides-heading" className="container scroll-mt-24 py-16">
        <h2 id="guides-heading" className="font-display text-display-md font-semibold">
          {articles.length ? `${c.shortName} guides` : "Guides in progress"}
        </h2>
        {articles.length ? (
          <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="mt-4 max-w-2xl leading-relaxed text-charcoal/80">
            We&apos;re researching our first guides for this section and only publish once a guide is genuinely useful.
            In the meantime, the primer below and the related guides from other sections cover the essentials.
          </p>
        )}
      </section>

      <section aria-labelledby="primer-heading" className="border-y border-charcoal/10 bg-ivory-100 py-16">
        <div className="container">
          <h2 id="primer-heading" className="font-display text-display-md font-semibold">{c.primer.title}</h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {c.primer.points.map((p, i) => (
              <li key={p.title} className="border-t-4 border-lime pt-4">
                <span className="kicker text-steel-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal/80">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="container py-16">
          <h2 id="related-heading" className="font-display text-display-md font-semibold">Related reading from other sections</h2>
          <div className="mt-6 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </section>
      )}

      {c.comingUp.length > 0 && (
        <section aria-labelledby="planned-heading" className="container pb-4">
          <div className="border border-dashed border-charcoal/30 p-6 md:p-8">
            <h2 id="planned-heading" className="kicker text-steel-600">On our research list</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.comingUp.map((t) => (
                <li key={t} className="border border-charcoal/20 px-3 py-1.5 text-sm">{t}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel-600">Planned topics, not yet published. We don&apos;t publish until a guide adds something useful.</p>
          </div>
        </section>
      )}

      <nav aria-labelledby="other-sections" className="container pt-16">
        <h2 id="other-sections" className="kicker text-steel-600">Other sections</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}`} className="btn-outline">
                {o.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
