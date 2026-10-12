import Link from "next/link";
import { getArticles, getCategories, articlePath } from "@/lib/content";
import { LogoMark } from "@/components/Logo";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  const articles = getArticles().slice(0, 3);
  return (
    <div className="container py-20">
      <LogoMark className="h-14 w-14" />
      <p className="kicker mt-8 text-steel-600">404 · Page not found</p>
      <h1 className="mt-3 max-w-2xl font-display text-display-lg font-semibold">This page took a wrong turn somewhere under the desk.</h1>
      <p className="mt-5 max-w-xl text-lg text-charcoal/80">
        The page may have moved or never existed. Try one of our sections or recent guides instead.
      </p>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <nav aria-labelledby="nf-sections">
          <h2 id="nf-sections" className="kicker text-steel-600">Browse sections</h2>
          <ul className="mt-4 space-y-2">
            {getCategories().map((c) => (
              <li key={c.slug}><Link href={`/${c.slug}`} className="link-underline font-semibold">{c.name}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="nf-recent">
          <h2 id="nf-recent" className="kicker text-steel-600">Recent guides</h2>
          <ul className="mt-4 space-y-3">
            {articles.map((a) => (
              <li key={a.slug}><Link href={articlePath(a)} className="link-underline font-semibold">{a.title}</Link></li>
            ))}
          </ul>
          <Link href="/" className="btn-dark mt-8">Back to the homepage</Link>
        </nav>
      </div>
    </div>
  );
}
