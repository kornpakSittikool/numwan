import type { CSSProperties } from "react";
import type { Product } from "@/types/site";

type ProductCardProps = Readonly<{
  product: Product;
  compact?: boolean;
  categoryHref?: string;
}>;

export function ProductCard({
  product,
  compact = false,
  categoryHref = "#industrial-products-heading",
}: ProductCardProps) {
  return (
    <article
      className={`product-card${compact ? " product-card-compact" : ""}`}
    >
      <div
        className="product-media"
        style={
          {
            "--card-image": `url("${product.image}")`,
          } as CSSProperties
        }
      >
        {product.badge ? (
          <span className="product-badge">{product.badge}</span>
        ) : null}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="product-wishlist"
          type="button"
        >
          Wishlist
        </button>
        {compact ? null : (
          <div className="product-media-actions">
            <button className="product-media-action" type="button">
              ดูสินค้า
            </button>
            <button className="product-media-action" type="button">
              รายละเอียด
            </button>
          </div>
        )}
      </div>
      <div className="product-card-body">
        <h3 className={`product-name mb-0${compact ? " h6" : " h5"}`}>
          {product.name}
        </h3>
        <p className="product-rating mb-0">{product.rating}</p>
        <a className="product-category" href={categoryHref}>
          {product.category}
        </a>
        <div className="product-price-row">
          <div className="product-price-stack">
            {product.compareAt ? (
              <span className="product-compare">{product.compareAt}</span>
            ) : null}
            <span className="product-price">{product.price}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
