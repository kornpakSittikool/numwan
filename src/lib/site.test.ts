import { describe, expect, it } from "vitest";
import {
  bestSellerProducts,
  footerCategories,
  footerProductTypes,
  footerUsefulLinks,
  heroFeature,
  heroPromos,
  newArrivalProducts,
  shippingMessages,
  shopCategories,
  siteConfig,
  videoFeatures,
} from "@/lib/site";

describe("siteConfig", () => {
  it("uses https links for external references", () => {
    expect(new URL(siteConfig.links.bootstrap).protocol).toBe("https:");
    expect(new URL(siteConfig.links.reference).protocol).toBe("https:");
  });

  it("keeps the storefront metadata populated", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
    expect(heroFeature.title).toBeTruthy();
  });
});

describe("navigation data", () => {
  it("keeps shop categories populated and unique", () => {
    expect(shopCategories.length).toBeGreaterThan(0);

    expect(new Set(shopCategories.map((item) => item.label)).size).toBe(
      shopCategories.length,
    );
  });
});

describe("product data", () => {
  it("keeps product shelves populated with unique names", () => {
    const products = [...bestSellerProducts, ...newArrivalProducts];

    expect(bestSellerProducts.length).toBeGreaterThanOrEqual(18);
    expect(newArrivalProducts.length).toBeGreaterThanOrEqual(18);
    expect(new Set(products.map((product) => product.name)).size).toBe(
      products.length,
    );

    for (const product of products) {
      expect(product.category).toBeTruthy();
      expect(product.price).toBeTruthy();
      expect(product.price.startsWith("THB ")).toBe(true);
      expect(product.quantity).toBeGreaterThan(0);
      expect(product.rating).toBeTruthy();
      expect(product.image).toContain("https://");
    }
  });
});

describe("supporting storefront collections", () => {
  it("keeps promo and ready-stock arrays populated", () => {
    expect(heroPromos.length).toBeGreaterThan(0);
    expect(shippingMessages.length).toBeGreaterThan(0);
    expect(videoFeatures.length).toBeGreaterThan(0);
    expect(footerCategories.length).toBeGreaterThan(0);
    expect(footerProductTypes.length).toBeGreaterThan(0);
    expect(footerUsefulLinks.length).toBeGreaterThan(0);
  });
});
