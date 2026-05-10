import { describe, expect, it } from "vitest";
import { siteConfig, starterChecklist, starterFeatures } from "@/lib/site";

describe("siteConfig", () => {
  it("uses https links for external documentation", () => {
    expect(new URL(siteConfig.links.nextjs).protocol).toBe("https:");
    expect(new URL(siteConfig.links.bootstrap).protocol).toBe("https:");
  });

  it("keeps the starter copy populated", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
  });
});

describe("starterFeatures", () => {
  it("keeps feature titles unique and descriptions non-empty", () => {
    const titles = starterFeatures.map((feature) => feature.title);

    expect(new Set(titles).size).toBe(titles.length);

    for (const feature of starterFeatures) {
      expect(feature.description).toBeTruthy();
    }
  });
});

describe("starterChecklist", () => {
  it("includes the repository check command", () => {
    expect(starterChecklist).toContain(
      "Run pnpm check before opening a pull request.",
    );
  });
});
