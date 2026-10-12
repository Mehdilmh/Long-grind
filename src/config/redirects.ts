/**
 * Permanent redirects for URLs that have changed. When you rename an article
 * slug or move it to another category, add the old path here so links and
 * search rankings carry over. Example:
 *
 * { source: "/desk-workspace/old-slug", destination: "/desk-workspace/new-slug", permanent: true },
 */
export const redirects: { source: string; destination: string; permanent: boolean }[] = [
  { source: "/home", destination: "/", permanent: true },
  { source: "/guides", destination: "/buying-guides", permanent: true },
  { source: "/disclosure", destination: "/affiliate-disclosure", permanent: true },
];
