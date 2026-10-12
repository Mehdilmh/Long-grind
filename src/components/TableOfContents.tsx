export function TableOfContents({ items }: { items: { id: string; text: string }[] }) {
  if (items.length < 3) return null;
  return (
    <nav aria-labelledby="toc-heading" className="text-sm">
      <h2 id="toc-heading" className="kicker text-steel-600">
        In this guide
      </h2>
      <ol className="mt-3 space-y-2 border-l border-charcoal/15">
        {items.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="-ml-px block border-l-2 border-transparent pl-3 leading-snug text-charcoal/80 hover:border-lime hover:text-charcoal">
              {t.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
