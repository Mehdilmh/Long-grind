import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Renders the small, safe inline markup used in content files:
 * [label](href), **strong** and *emphasis*. No raw HTML is ever injected.
 */
const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;

export function InlineText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN).filter((p) => p !== "");
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (link) {
      const [, label, href] = link as unknown as [string, string, string];
      if (href.startsWith("/")) {
        return (
          <Link key={i} href={href}>
            {label}
          </Link>
        );
      }
      if (href.startsWith("https://")) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            {label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      }
      return <Fragment key={i}>{label}</Fragment>;
    }
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
