import type { Author } from "@/lib/schema";

/**
 * OWNER ACTION: LongGrind currently publishes under an editorial-team byline.
 * Add real authors here (with their consent) and set verifiedPerson: true only
 * for real, identifiable people. Never invent names, credentials or experience.
 */
export const authors: Author[] = [
  {
    id: "longgrind-editors",
    name: "LongGrind Editorial Team",
    role: "Editorial team",
    bio: "LongGrind guides are researched and written by the LongGrind editorial team. Unless an article says otherwise, our guides are research-based: they draw on manufacturer documentation, published standards and public guidance, and they do not claim hands-on testing.",
    verifiedPerson: false,
    url: "/about#editorial-team",
    sameAs: [],
  },
];
