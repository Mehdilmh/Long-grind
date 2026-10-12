import { Breadcrumbs } from "./Breadcrumbs";
import { formatDate } from "@/lib/text";

/** Layout for trust and legal pages. */
export function ContentPage({
  title,
  lead,
  path,
  lastUpdated,
  children,
}: {
  title: string;
  lead: string;
  path: string;
  lastUpdated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container py-10 md:py-14">
      <Breadcrumbs items={[{ name: title, href: path }]} />
      <div className="mt-8 max-w-3xl">
        <h1 className="font-display text-display-lg font-semibold">{title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-charcoal/80">{lead}</p>
        {lastUpdated && (
          <p className="mt-4 text-sm text-steel-600">
            Last updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time>
          </p>
        )}
        <div className="prose-lg-custom mt-10 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_li]:mt-2 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Inline marker for a value only the owner can supply. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return <mark className="bg-lime/60 px-1 font-semibold">[{children}]</mark>;
}
