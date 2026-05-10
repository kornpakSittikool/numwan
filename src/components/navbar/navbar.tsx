import Link from "next/link";

export function Navbar() {
  return (
    <header className="material-navbar">
      <nav className="navbar py-0">
        <div className="material-navbar-frame">
          <div className="material-navbar-shell">
            <Link className="navbar-brand material-brand mb-0" href="/">
              Numwan
            </Link>
            <form
              action="/"
              className="material-navbar-search"
              method="get"
              role="search"
            >
              <label className="visually-hidden" htmlFor="navbar-product-query">
                ค้นหาสินค้า
              </label>
              <input
                aria-label="ค้นหาสินค้า"
                className="form-control material-navbar-input"
                id="navbar-product-query"
                name="q"
                placeholder="ค้นหาสินค้า"
                type="search"
              />
              <button className="btn material-navbar-button" type="submit">
                ค้นหาสินค้า
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
