import { absoluteUrl } from "@/lib/seo";

/**
 * Plain "Save to Pinterest" link using Pinterest's public pin-create URL.
 * No third-party script is loaded; nothing is shared until the reader clicks.
 */
export function PinterestSave({ path, description }: { path: string; description: string }) {
  const url = new URL("https://www.pinterest.com/pin/create/button/");
  url.searchParams.set("url", absoluteUrl(path));
  url.searchParams.set("media", absoluteUrl(`${path}/pin-image`));
  url.searchParams.set("description", description);
  return (
    <a href={url.toString()} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">
      Save to Pinterest
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
