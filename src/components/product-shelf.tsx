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
  return (
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
              product={product}
              categoryHref={categoryHref}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
