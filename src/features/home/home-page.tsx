import { FeatureCard } from "@/components/feature-card";
import { Navbar } from "@/components/navbar/navbar";
import {
  collectionHighlights,
  heroSignals,
  heroStats,
  searchKeywords,
  siteConfig,
  starterChecklist,
  starterFeatures,
} from "@/lib/site";

export function HomePage() {
  return (
    <main className="material-home">
      <Navbar />
      <section className="material-hero">
        <div className="container position-relative">
          <div className="row align-items-center g-5 py-5 min-vh-100">
            <div className="col-lg-7">
              <span className="hero-chip mb-4">
                Material-inspired landing page
              </span>
              <h1 className="hero-title mb-4">
                ค้นหาสินค้าดีไซน์ดี
                <br />
                ได้เร็วขึ้นสำหรับ {siteConfig.name}
              </h1>
              <p className="hero-copy mb-4">
                หน้าแรกนี้ยก mood และจังหวะการจัดวางจาก Material Kit 3 มาใช้กับ
                flow ค้นหาสินค้าแบบจริงจัง โดยตัดเมนูยาวออกและดัน CTA การค้นหา
                ให้กลายเป็นจุดสนใจหลักของหน้า
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  className="btn hero-primary-button btn-lg"
                  href="#product-search"
                >
                  ค้นหาสินค้า
                </a>
                <a
                  className="btn hero-secondary-button btn-lg"
                  href="#collections"
                >
                  ดูคอลเลกชัน
                </a>
              </div>
              <div className="d-flex flex-wrap gap-3">
                {heroSignals.map((signal) => (
                  <span key={signal} className="hero-proof-pill">
                    {signal}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div id="product-search" className="search-showcase-card">
                <span className="search-card-kicker">
                  Search-first experience
                </span>
                <h2 className="h2 text-white mb-3">
                  เริ่มจากคำที่คุณกำลังหาอยู่
                </h2>
                <p className="search-card-copy mb-4">
                  พิมพ์ชื่อสินค้า หมวด หรือ use case เพื่อเริ่ม shortlist
                  สินค้าที่ เหมาะกับงบและสไตล์ของคุณ
                </p>
                <form
                  action="/"
                  className="product-search-panel"
                  method="get"
                  role="search"
                >
                  <label className="visually-hidden" htmlFor="product-query">
                    ค้นหาสินค้า
                  </label>
                  <input
                    aria-label="ค้นหาสินค้า"
                    className="form-control product-search-input"
                    id="product-query"
                    name="q"
                    placeholder="เช่น หูฟังไร้สาย, เก้าอี้ทำงาน, โคมไฟ"
                    type="search"
                  />
                  <button className="btn product-search-button" type="submit">
                    ค้นหาสินค้า
                  </button>
                </form>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {searchKeywords.map((keyword) => (
                    <span key={keyword} className="search-keyword-pill">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-shell">
        <div className="container">
          <div className="row g-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="col-md-6 col-xl-4">
                <div className="stat-card h-100">
                  <p className="stat-value mb-2">{stat.value}</p>
                  <h2 className="h5 mb-2">{stat.label}</h2>
                  <p className="stat-copy mb-0">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading text-center mx-auto">
            <span className="section-kicker">Infinite combinations</span>
            <h2 className="section-title mb-3">
              Visual language แบบ Material Kit
              <br />
              ที่ถูกย้ายมาเป็นหน้าค้นหาสินค้า
            </h2>
            <p className="section-copy mb-0">
              เราเก็บ hero เต็มจอ, การ์ดขาวลอย, spacing กว้าง, มุมโค้งนุ่ม และ
              CTA ที่ชัดมากพอให้คนรู้ทันทีว่าควรกดตรงไหนก่อน
            </p>
          </div>

          <div className="row g-4 mt-1">
            {starterFeatures.map((feature) => (
              <div key={feature.title} className="col-md-6 col-xl-4">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="content-section pt-0">
        <div className="container">
          <div className="collection-panel p-4 p-lg-5">
            <div className="row g-4 g-lg-5 align-items-center">
              <div className="col-lg-5">
                <span className="section-kicker">Discover more</span>
                <h2 className="section-title mb-3">
                  หมวดสินค้าและคอลเลกชัน
                  <br />
                  ที่ช่วยให้ตัดสินใจเร็วขึ้น
                </h2>
                <p className="section-copy mb-4">
                  แทนที่จะให้ navbar แบกหลายเมนู หน้าแรกนี้ใช้ hero และ
                  collection cards ช่วยนำทางแทน ซึ่งตรงกับพฤติกรรมของคนที่เข้ามา
                  เพราะอยากหาอะไรบางอย่างชัดเจนอยู่แล้ว
                </p>
                <ul className="collection-checklist list-unstyled mb-0">
                  {starterChecklist.map((item) => (
                    <li key={item} className="collection-check-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="row g-3">
                  {collectionHighlights.map((highlight) => (
                    <div key={highlight.title} className="col-md-6">
                      <article className="collection-card h-100">
                        <span className="collection-tag">{highlight.tag}</span>
                        <h3 className="h4 mt-4 mb-2">{highlight.title}</h3>
                        <p className="collection-copy mb-0">
                          {highlight.description}
                        </p>
                      </article>
                    </div>
                  ))}
                  <div className="col-12">
                    <div className="final-cta-card">
                      <div>
                        <span className="section-kicker section-kicker-dark">
                          Search CTA
                        </span>
                        <h3 className="h3 text-white mt-3 mb-2">
                          ปุ่ม Free Download ถูกแทนด้วย flow
                          ที่มีประโยชน์กับร้านมากกว่า
                        </h3>
                        <p className="final-cta-copy mb-0">
                          ตอนนี้จุดเด่นของหน้าไม่ใช่การโหลด UI kit
                          แต่เป็นการพาคนไป เริ่มค้นหาสินค้าให้เร็วที่สุด
                        </p>
                      </div>
                      <a
                        className="btn hero-primary-button mt-4 mt-lg-0"
                        href="#product-search"
                      >
                        ไปที่ช่องค้นหา
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
