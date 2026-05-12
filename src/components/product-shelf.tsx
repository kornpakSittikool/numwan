"use client";

import { useEffect, useId, useState } from "react";
import { ProductDetailModal } from "@/components/product-detail-modal";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/site";

type ProductShelfProps = Readonly<{
  products: readonly Product[];
  categoryHref: string;
  ariaLabel: string;
}>;

export function ProductShelf({
  products,
  categoryHref,
  ariaLabel,
}: ProductShelfProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <div className="product-shelf">
      <div
        aria-label={ariaLabel}
        className="product-shelf-scroll"
        role="region"
        tabIndex={0}
      >
        <div className="product-shelf-grid">
          {products.map((product) => (
            <div key={product.name} className="product-shelf-item">
              <ProductCard
                compact
                categoryHref={categoryHref}
                onOpenDetails={setSelectedProduct}
                product={product}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct ? (
        <ProductDetailModal
          categoryHref={categoryHref}
          descriptionId={descriptionId}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
          titleId={titleId}
        />
      ) : null}
    </div>
  );
}
