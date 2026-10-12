import Link from "next/link";
import type { Article } from "@/lib/schema";
import { articlePath, getCategory, readingTime } from "@/lib/content";
import { Cover } from "./Cover";
import { formatDate } from "@/lib/text";

export const typeLabels: Record<Article["type"], string> = {
  review: "Review",
  "best-of": "Buying guide",
  comparison: "Comparison",
  roundup: "Roundup",
  "budget-guide": "Budget guide",
  "setup-guide": "Setup guide",
  "how-to": "How-to",
  "gift-guide": "Gift guide",
  explainer: "Explainer",
};

export function ArticleCard({
  article,
  variant = "standard",
  headingLevel = "h3",
  tone = "light",
}: {
  article: Article;
  variant?: "feature" | "standard" | "compact";
  headingLevel?: "h2" | "h3";
  tone?: "light" | "dark";
}) {
  const H = headingLevel;
  const cat = getCategory(article.category);
  const href = articlePath(article);
  const muted = tone === "dark" ? "text-steel" : "text-steel-600";

  if (variant === "compact") {
    return (
      <article className="group border-t border-current/15 py-5">
        <p className={`kicker ${muted}`}>{typeLabels[article.type]}</p>
        <H className="mt-1.5 text-lg font-bold leading-snug tracking-tight">
          <Link href={href} className="decoration-lime decoration-[3px] underline-offset-4 group-hover:underline">
            {article.title}
          </Link>
        </H>
        <p className={`mt-1 text-sm ${muted}`}>{readingTime(article)} min read</p>
      </article>
    );
  }

  const feature = variant === "feature";
  return (
    <article className={`group relative flex flex-col ${feature ? "lg:grid lg:grid-cols-12 lg:gap-10" : ""}`}>
      <div className={`overflow-hidden ${feature ? "lg:col-span-7" : ""}`}>
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none">
          <Cover hero={article.hero} sizes={feature ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"} />
        </div>
      </div>
      <div className={`flex flex-1 flex-col pt-5 ${feature ? "lg:col-span-5 lg:justify-center lg:pt-0" : ""}`}>
        <p className={`kicker flex flex-wrap gap-x-3 ${muted}`}>
          <span className={tone === "dark" ? "text-lime" : "text-charcoal"}>{typeLabels[article.type]}</span>
          {cat && <span>{cat.shortName}</span>}
        </p>
        <H className={`mt-3 font-display font-semibold tracking-tight ${feature ? "text-display-md" : "text-2xl leading-tight"}`}>
          <Link href={href} className="after:absolute after:inset-0 decoration-lime decoration-[3px] underline-offset-[6px] group-hover:underline">
            {article.title}
          </Link>
        </H>
        <p className={`mt-3 leading-relaxed ${tone === "dark" ? "text-ivory/80" : "text-charcoal/80"} ${feature ? "text-lg" : ""}`}>{article.dek}</p>
        <p className={`mt-4 text-sm ${muted}`}>
          <time dateTime={article.updatedAt ?? article.publishedAt}>{formatDate(article.updatedAt ?? article.publishedAt)}</time>
          {" · "}
          {readingTime(article)} min read
        </p>
      </div>
    </article>
  );
}
