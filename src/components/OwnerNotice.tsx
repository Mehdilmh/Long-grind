import { site } from "@/config/site";

/**
 * Visible marker for content the site owner must review or complete before
 * launch. Disappears once site.legalReviewComplete is set to true.
 */
export function OwnerNotice({ children }: { children: React.ReactNode }) {
  if (site.legalReviewComplete) return null;
  return (
    <div role="note" className="my-6 border-2 border-dashed border-charcoal bg-lime/40 p-4 text-sm">
      <strong>Template pending owner review:</strong> {children}
    </div>
  );
}
