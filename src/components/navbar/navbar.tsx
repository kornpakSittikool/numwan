import Link from "next/link";
import { shopCategories } from "@/lib/site";

export function Navbar() {
  return (
    <header id="shop-header" className="shop-header">
      <div className="shop-header-surface">
        <div className="container">
          <div className="shop-header-main">
            <nav aria-label="Shop categories" className="shop-category-nav">
              {shopCategories.map((item) => (
                <a
                  key={item.label}
                  className="shop-category-link"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Link className="shop-brand" href="/">
              Numwan
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
