import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, FlaskConical, Hand } from "lucide-react";
import {
  articlePath,
  articleProducts,
  getArticle,
  getArticles,
  getAuthor,
  getCategory,
  getRelatedArticles,
  getTagName,
  readingTime,
  tableOfContents,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/structured-data";
import { formatDate } from "@/lib/text";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cover } from "@/components/Cover";
import { ArticleBody } from "@/components/ArticleBody";
import { TableOfContents } from "@/components/TableOfContents";
import { Faq } from "@/components/Faq";
import { Sources } from "@/components/Sources";
import { JsonLd } from "@/components/JsonLd";
import { ArticleCard, typeLabels } from "@/components/ArticleCard";
import { DisclosureBanner, hasAffiliateLink } from "@/components/Affiliate";
import { PinterestSave } from "@/components/PinterestSave";
import { InlineText } from "@/components/InlineText";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  const a = getArticle(category, slug);
  if (!a) return {};
  return pageMetadata({
    title: a.seoTitle ?? a.title,
    description: a.description,
    path: articlePath(a),
    type: "article",
    publishedTime: a.publishedAt,
    modifiedTime: a.updatedAt,
    noindex: a.status !== "published",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const a = getArticle(category, slug);
  if (!a) notFound();
  const cat = getCategory(a.category)!;
  const author = getAuthor(a.authorId);
  const path = articlePath(a);
  const toc = tableOfContents(a);
  const hasAffiliateLinks = articleProducts(a).some(hasAffiliateLink);
  const related = getRelatedArticles(a, 3);

  return (
    <article>
      {a.status !== "published" && (
        <div role="status" className="bg-lime px-4 py-2 text-center text-sm font-bold">
          {a.status.toUpperCase()} preview — not indexed and not listed in the sitemap.
        </div>
      )}
      <header className="border-b border-charcoal/10">
        <div className="container pt-8">
          <Breadcrumbs items={[{ name: cat.name, href: `/${cat.slug}` }, { name: a.title, href: path }]} />
        </div>
        <div className="container grid gap-10 pb-12 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="kicker flex flex-wrap items-center gap-3">
              <span className="bg-charcoal px-2 py-1 text-lime">{typeLabels[a.type]}</span>
              <Link href={`/${cat.slug}`} className="text-steel-600 hover:underline">{cat.name}</Link>
            </p>
            <h1 className="mt-5 font-display text-display-lg font-semibold">{a.title}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-charcoal/80">{a.dek}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-steel-600">
              <span>
                By{" "}
                {author?.url ? (
                  <Link href={author.url} className="font-semibold text-charcoal hover:underline">{author.name}</Link>
                ) : (
                  <span className="font-semibold text-charcoal">{author?.name}</span>
                )}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Published <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
              </span>
              {a.updatedAt && (
                <span>
                  Updated <time dateTime={a.updatedAt}>{formatDate(a.updatedAt)}</time>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {readingTime(a)} min read
              </span>
            </div>
            <MethodLabel method={a.method} />
          </div>
        </div>
        <div className="container pb-12">
          <Cover hero={a.hero} priority />
        </div>
      </header>

      <div className="container grid gap-12 py-12 lg:grid-cols-12">
        <aside className="order-2 lg:order-1 lg:col-span-3">
          <div className="space-y-8 lg:sticky lg:top-24">
            <TableOfContents items={toc} />
            <div className="hidden lg:block">
              <PinterestSave path={path} description={a.pinterest?.description ?? a.description} />
            </div>
          </div>
        </aside>

        <div className="order-1 min-w-0 lg:order-2 lg:col-span-8 lg:col-start-4">
          {hasAffiliateLinks && <DisclosureBanner />}

          <section aria-labelledby="short-answer" className="mt-8 border-l-4 border-lime bg-ivory-100 p-6">
            <h2 id="short-answer" className="kicker text-steel-600">The short answer</h2>
            <p className="mt-3 text-lg leading-relaxed">
              <InlineText text={a.answer} />
            </p>
          </section>

          <section aria-labelledby="takeaways" className="mt-8">
            <h2 id="takeaways" className="kicker text-steel-600">Key takeaways</h2>
            <ul className="mt-3 space-y-2.5">
              {a.keyTakeaways.map((k) => (
                <li key={k} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-charcoal" />
                  <span><InlineText text={k} /></span>
                </li>
              ))}
            </ul>
          </section>

          <ArticleBody blocks={a.body} />
          <Faq items={a.faq} />

          <section aria-labelledby="method-heading" className="mt-16 border-t border-charcoal/15 pt-8">
            <h2 id="method-heading" className="font-display text-2xl font-semibold">How we researched this guide</h2>
            <p className="mt-3 leading-relaxed text-charcoal/85">
              {a.method === "research-based"
                ? "This is a research-based overview. We did not physically test the products or setups described. Facts come from the manufacturer documentation, standards and public guidance listed below; recommendations are our editorial judgment based on those facts. "
                : a.testingNotes}
              Read more in <Link href="/how-we-evaluate" className="link-underline">how we evaluate products</Link> and our{" "}
              <Link href="/editorial-policy" className="link-underline">editorial policy</Link>.
            </p>
          </section>

          <Sources sources={a.sources} />

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-charcoal/15 pt-6 text-sm">
            <span className="text-steel-600">Filed under:</span>
            {a.tags.map((t) => (
              <span key={t} className="border border-charcoal/20 px-2.5 py-1">{getTagName(t)}</span>
            ))}
            <span className="ml-auto lg:hidden">
              <PinterestSave path={path} description={a.pinterest?.description ?? a.description} />
            </span>
          </div>

          <section aria-labelledby="author-heading" className="mt-10 flex gap-4 bg-charcoal p-6 text-ivory surface-dark">
            <div aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center bg-lime font-display text-xl font-bold text-charcoal">LG</div>
            <div>
              <h2 id="author-heading" className="font-bold">{author?.name}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ivory/80">{author?.bio}</p>
            </div>
          </section>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-charcoal/10 bg-ivory-100 py-16">
          <div className="container">
            <h2 id="related-heading" className="font-display text-display-md font-semibold">Keep reading</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd data={articleJsonLd(a, author, path)} />
    </article>
  );
}

function MethodLabel({ method }: { method: "research-based" | "hands-on" }) {
  const research = method === "research-based";
  const Icon = research ? FlaskConical : Hand;
  return (
    <p className="mt-6 inline-flex items-center gap-2 border border-charcoal/20 bg-ivory-100 px-3 py-2 text-sm">
      <Icon className="h-4 w-4" aria-hidden="true" />
      <strong>{research ? "Research-based overview" : "Hands-on review"}</strong>
      <span className="text-steel-600">
        {research ? "— not a hands-on test." : "— products used by the author."}{" "}
        <Link href="/how-we-evaluate" className="underline">Our method</Link>
      </span>
    </p>
  );
}
