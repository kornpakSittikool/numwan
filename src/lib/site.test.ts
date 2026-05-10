import { describe, expect, it } from "vitest";
import {
  collectionHighlights,
  heroSignals,
  heroStats,
  searchKeywords,
  siteConfig,
  starterChecklist,
  starterFeatures,
} from "@/lib/site";

describe("siteConfig", () => {
  it("uses https links for external references", () => {
    expect(new URL(siteConfig.links.bootstrap).protocol).toBe("https:");
    expect(new URL(siteConfig.links.materialKit).protocol).toBe("https:");
  });

  it("keeps the landing page copy populated", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
  });
});

describe("heroStats", () => {
  it("keeps labels unique and descriptions non-empty", () => {
    const labels = heroStats.map((stat) => stat.label);

    expect(new Set(labels).size).toBe(labels.length);

    for (const stat of heroStats) {
      expect(stat.value).toBeTruthy();
      expect(stat.description).toBeTruthy();
    }
  });
});

describe("starterFeatures", () => {
  it("keeps feature titles unique and required fields populated", () => {
    const titles = starterFeatures.map((feature) => feature.title);

    expect(new Set(titles).size).toBe(titles.length);

    for (const feature of starterFeatures) {
      expect(feature.label).toBeTruthy();
      expect(feature.description).toBeTruthy();
      expect(feature.metric).toBeTruthy();
    }
  });
});

describe("landing page arrays", () => {
  it("keeps supporting copy arrays populated", () => {
    expect(heroSignals.length).toBeGreaterThan(0);
    expect(searchKeywords.length).toBeGreaterThan(0);
    expect(starterChecklist.length).toBeGreaterThan(0);
    expect(collectionHighlights.length).toBeGreaterThan(0);
  });
});
