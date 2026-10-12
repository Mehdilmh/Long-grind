import { describe, expect, it } from "vitest";
import { buildAffiliateUrl, extractAsin } from "@/lib/affiliate";
import { disclosures, marketplaces } from "@/config/affiliate";

describe("buildAffiliateUrl", () => {
  it("uses the configured Amazon.com tracking ID", () => {
    expect(marketplaces.US.trackingId).toBe("gettse00-20");
  });

  it("normalizes a product URL to /dp/ASIN with the configured tag", () => {
    const r = buildAffiliateUrl("https://www.amazon.com/Some-Product-Name/dp/B0ABCDEF12/ref=sr_1_1?keywords=x", "US");
    expect(r).toEqual({ ok: true, url: "https://www.amazon.com/dp/B0ABCDEF12?tag=gettse00-20", marketplace: "US", kind: "product" });
  });

  it("replaces any foreign tracking tag with ours", () => {
    const r = buildAffiliateUrl("https://amazon.com/dp/B0ABCDEF12?tag=someoneelse-20", "US");
    expect(r.ok && r.url).toBe("https://www.amazon.com/dp/B0ABCDEF12?tag=gettse00-20");
  });

  it("accepts /gp/product/ URLs", () => {
    const r = buildAffiliateUrl("https://www.amazon.com/gp/product/B0ABCDEF12", "US");
    expect(r.ok && r.url).toBe("https://www.amazon.com/dp/B0ABCDEF12?tag=gettse00-20");
  });

  it("passes SiteStripe short links through unchanged", () => {
    const r = buildAffiliateUrl("https://amzn.to/3AbCdEf", "US");
    expect(r).toMatchObject({ ok: true, url: "https://amzn.to/3AbCdEf", kind: "short-link" });
  });

  it.each([
    [undefined, "missing"],
    ["", "empty"],
    ["not a url", "invalid"],
    ["http://www.amazon.com/dp/B0ABCDEF12", "non-https"],
    ["https://www.amazon.co.uk/dp/B0ABCDEF12", "wrong marketplace"],
    ["https://www.amazon.com/s?k=keyboard", "search page, no ASIN"],
    ["https://evil.example.com/dp/B0ABCDEF12", "foreign host"],
    ["https://www.amazon.com.evil.io/dp/B0ABCDEF12", "lookalike host"],
    ["https://amzn.to/", "empty short link"],
  ])("rejects %s (%s)", (url, _label) => {
    void _label;
    expect(buildAffiliateUrl(url as string | undefined, "US").ok).toBe(false);
  });
});

describe("extractAsin", () => {
  it("finds ASINs in common paths", () => {
    expect(extractAsin("/x/dp/B0ABCDEF12")).toBe("B0ABCDEF12");
    expect(extractAsin("/dp/b0abcdef12/")).toBe("B0ABCDEF12");
    expect(extractAsin("/dp/SHORT")).toBeNull();
  });
});

describe("disclosures", () => {
  it("keeps the exact Amazon Associates statement", () => {
    expect(disclosures.amazon).toBe("As an Amazon Associate I earn from qualifying purchases.");
  });
});
