import type { ArticleInput } from "@/lib/schema";
import cables from "./how-to-organize-cables-under-desk";
import monitorArm from "./monitor-arm-vs-monitor-stand";
import keyboardSizes from "./mechanical-keyboard-sizes-explained";

/** Register every article file here. Order doesn't matter; lists sort by date. */
export const allArticles: ArticleInput[] = [cables, monitorArm, keyboardSizes];
