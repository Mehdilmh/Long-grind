import { serverEnv } from "@/lib/env";

/**
 * Central Amazon Associates configuration.
 *
 * Each marketplace has its own tracking ID. Only add a marketplace after the
 * owner has been approved for that country's Associates program.
 */
export type MarketplaceKey = "US";

export interface Marketplace {
  key: MarketplaceKey;
  label: string;
  /** Hostnames accepted as product destinations for this marketplace. */
  hosts: readonly string[];
  /** Canonical host used when normalizing links. */
  canonicalHost: string;
  /** Short-link hosts produced by Amazon's own link tools (SiteStripe). */
  shortLinkHosts: readonly string[];
  trackingId: string;
}

export const marketplaces: Record<MarketplaceKey, Marketplace> = {
  US: {
    key: "US",
    label: "Amazon.com",
    hosts: ["www.amazon.com", "amazon.com", "smile.amazon.com"],
    canonicalHost: "www.amazon.com",
    shortLinkHosts: ["amzn.to"],
    trackingId: serverEnv.AMAZON_ASSOCIATE_TAG_US,
  },
};

export const defaultMarketplace: MarketplaceKey = serverEnv.AMAZON_DEFAULT_MARKETPLACE;

export const disclosures = {
  /** Required Amazon Associates statement. Keep wording exact. */
  amazon: "As an Amazon Associate I earn from qualifying purchases.",
  /** Short, link-level disclosure placed next to product recommendations. */
  linkLevel: "As an affiliate, we may earn a commission from qualifying purchases.",
  /** Small label rendered inside or beside each affiliate button. */
  linkLabel: "Paid link",
} as const;
