import type { CSSProperties } from "react";
import type { Product } from "@/types/site";

type ProductDetailModalProps = Readonly<{
  product: Product;
  categoryHref: string;
  titleId: string;
  descriptionId: string;
  onClose: () => void;
}>;

function buildProductSummary(product: Product): string {
  return `${product.name} อยู่ในหมวด ${product.category} สถานะ ${product.rating} พร้อมแสดงราคาและจำนวนคงเหลือสำหรับใช้ตัดสินใจก่อนเลือกสินค้า`;
}

export function ProductDetailModal({
  product,
  categoryHref,
  titleId,
  descriptionId,
  onClose,
}: ProductDetailModalProps) {
  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="product-modal-dialog"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label={`Close details for ${product.name}`}
          className="product-modal-close"
          type="button"
          onClick={onClose}
        >
          ×
        </button>

        <div className="product-modal-layout">
          <div
            className="product-modal-media"
            style={
              {
                "--product-modal-image": `url("${product.image}")`,
              } as CSSProperties
            }
          />

          <div className="product-modal-body">
            {product.badge ? (
              <span className="product-modal-badge">{product.badge}</span>
            ) : null}

            <p className="product-modal-kicker mb-2">{product.category}</p>
            <h2 id={titleId} className="product-modal-title mb-2">
              {product.name}
            </h2>
            <p id={descriptionId} className="product-modal-copy mb-4">
              {buildProductSummary(product)}
            </p>

            <div className="product-modal-price-row">
              <div className="product-modal-price-stack">
                {product.compareAt ? (
                  <span className="product-modal-compare">
                    {product.compareAt}
                  </span>
                ) : null}
                <strong className="product-modal-price">{product.price}</strong>
              </div>
              <span className="product-modal-quantity">
                คงเหลือ {product.quantity} ชิ้น
              </span>
            </div>

            <div className="product-modal-meta">
              <div className="product-modal-meta-item">
                <span className="product-modal-meta-label">หมวดหมู่</span>
                <a className="product-modal-meta-value" href={categoryHref}>
                  {product.category}
                </a>
              </div>
              <div className="product-modal-meta-item">
                <span className="product-modal-meta-label">สถานะ</span>
                <span className="product-modal-meta-value">
                  {product.rating}
                </span>
              </div>
              <div className="product-modal-meta-item">
                <span className="product-modal-meta-label">ราคา</span>
                <span className="product-modal-meta-value">
                  {product.price}
                </span>
              </div>
              <div className="product-modal-meta-item">
                <span className="product-modal-meta-label">จำนวน</span>
                <span className="product-modal-meta-value">
                  {product.quantity} ชิ้น
                </span>
              </div>
            </div>

            <div className="product-modal-actions">
              <a className="product-modal-link" href={categoryHref}>
                ดูหมวดหมู่
              </a>
              <button
                className="product-modal-dismiss"
                type="button"
                onClick={onClose}
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
