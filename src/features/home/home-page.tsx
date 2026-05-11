import type { CSSProperties } from "react";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";
import { Navbar } from "@/components/navbar/navbar";
import {
  bestSellerProducts,
  footerCategories,
  footerProductTypes,
  footerUsefulLinks,
  heroFeature,
  heroPromos,
  newArrivalProducts,
  shippingMessages,
  videoFeatures,
} from "@/lib/site";

export function HomePage() {
  return (
    <main className="beauty-home">
      <Navbar />

      <section className="hero-shell">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-xl-8">
              <article
                className="hero-feature-card"
                style={
                  {
                    "--hero-image": `url("${heroFeature.image}")`,
                  } as CSSProperties
                }
              >
                <div className="hero-feature-copy">
                  {heroFeature.eyebrow ? (
                    <span className="hero-kicker">{heroFeature.eyebrow}</span>
                  ) : null}
                  <h1 className="hero-title mb-3">{heroFeature.title}</h1>
                  <p className="hero-copy mb-4">{heroFeature.description}</p>
                  <a className="btn hero-button" href={heroFeature.href}>
                    {heroFeature.ctaLabel}
                  </a>
                </div>
              </article>
            </div>

            <div className="col-xl-4">
              <div className="row g-4 h-100">
                {heroPromos.map((promo) => (
                  <div key={promo.title} className="col-sm-6 col-xl-12">
                    <article
                      className={`hero-promo-card hero-promo-${promo.theme ?? "light"}`}
                      style={
                        {
                          "--promo-image": `url("${promo.image}")`,
                        } as CSSProperties
                      }
                    >
                      <span className="hero-promo-kicker">{promo.eyebrow}</span>
                      <h2 className="hero-promo-title mb-2">{promo.title}</h2>
                      <p className="hero-promo-copy mb-3">
                        {promo.description}
                      </p>
                      <a className="hero-promo-link" href={promo.href}>
                        {promo.ctaLabel}
                      </a>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="shipping-strip"
        className="shipping-strip"
        aria-label="Store benefits"
      >
        <div className="shipping-track">
          {[...shippingMessages, ...shippingMessages].map((message, index) => (
            <span key={`${message}-${index}`} className="shipping-pill">
              {message}
            </span>
          ))}
        </div>
      </section>

      <section id="week-bestsellers" className="section-shell">
        <div className="container">
          <SectionHeader
            anchorId="industrial-products-heading"
            title="หมวดหมู่สินค้าประเภทอุตสาหกรรม"
          />
          <div className="row g-4">
            {bestSellerProducts.map((product) => (
              <div key={product.name} className="col-md-6 col-xl-3">
                <ProductCard
                  product={product}
                  categoryHref="#industrial-products-heading"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="section-shell">
        <div className="container">
          <SectionHeader
            anchorId="automotive-products-heading"
            title="สินค้าประเภทรถยนต์"
            actionHref="#automotive-products-heading"
            actionLabel="ดูสินค้าทั้งหมด"
          />
          <div className="row g-4">
            {newArrivalProducts.map((product) => (
              <div key={product.name} className="col-md-6 col-xl-3">
                <ProductCard
                  product={product}
                  categoryHref="#automotive-products-heading"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ready-stock" className="section-shell video-section">
        <div className="container">
          <SectionHeader
            anchorId="ready-stock-heading"
            title="สินค้ายอดนิยมพร้อมส่ง"
            actionHref="#ready-stock-heading"
            actionLabel="ดูทั้งหมด"
          />
          <div className="row g-4">
            {videoFeatures.map((video) => (
              <div key={video.title} className="col-md-6 col-xl-4">
                <a
                  className="video-card"
                  href={video.href}
                  style={
                    {
                      "--video-image": `url("${video.image}")`,
                    } as CSSProperties
                  }
                >
                  <span className="video-card-label">พร้อมส่ง</span>
                  <h2 className="video-card-title mb-2">{video.title}</h2>
                  <p className="video-card-copy mb-0">{video.caption}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-panel">
            <div className="site-footer-brand-column">
              <h2 className="site-footer-brand mb-3">NUMWAN.</h2>
              <p className="site-footer-copy mb-4">
                ศูนย์รวมสินค้าอุตสาหกรรม อะไหล่รถยนต์
                และสินค้าพร้อมส่งสำหรับงานจัดซื้อ
              </p>
              <div
                className="site-footer-payments"
                aria-label="Payment methods"
              >
                <span>VISA</span>
                <span>stripe</span>
                <span>PayPal</span>
                <span>G Pay</span>
                <span>Apple Pay</span>
              </div>
            </div>

            <nav className="site-footer-column" aria-label="Popular categories">
              <h3 className="site-footer-heading">Popular Categories</h3>
              <ul className="site-footer-list list-unstyled mb-0">
                {footerCategories.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-column" aria-label="Product type">
              <h3 className="site-footer-heading">Product Type</h3>
              <ul className="site-footer-list list-unstyled mb-0">
                {footerProductTypes.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="site-footer-column" aria-label="Useful links">
              <h3 className="site-footer-heading">Useful Links</h3>
              <ul className="site-footer-list list-unstyled mb-0">
                {footerUsefulLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-footer-rating">
              <strong>4,5/5</strong>
              <span
                className="site-footer-stars"
                aria-label="4.5 out of 5 stars"
              >
                ★★★★★
              </span>
              <span className="site-footer-review-text">
                Based on 374 Google reviews
              </span>
              <a className="site-footer-review-button" href="#shop-header">
                Write A Review
              </a>
            </div>
          </div>

          <div className="site-footer-bottom">
            <p className="mb-0">Numwan theme © 2026 WooCommerce Themes.</p>
            <div className="site-footer-socials" aria-label="Social links">
              {["f", "X", "p", "in", "tg"].map((item) => (
                <a key={item} href="#shop-header" aria-label={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
