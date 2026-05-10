import { FeatureCard } from "@/components/feature-card";
import { siteConfig, starterChecklist, starterFeatures } from "@/lib/site";

export function HomePage() {
  return (
    <main className="home-shell">
      <div className="container py-lg-4">
        <section className="hero-panel p-4 p-lg-5 mb-4">
          <span className="eyebrow mb-3">Bootstrap + App Router</span>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h1 className="display-5 fw-semibold section-title mb-3">
                Clean Next.js starter for TypeScript projects
              </h1>
              <p className="hero-copy fs-5 mb-4">
                Start from a small, readable foundation with strict TypeScript,
                Bootstrap styling, pnpm workflows, and CI checks already wired
                in.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  className="btn btn-primary btn-lg"
                  href={siteConfig.links.nextjs}
                  rel="noreferrer"
                  target="_blank"
                >
                  Next.js docs
                </a>
                <a
                  className="btn btn-outline-primary btn-lg"
                  href={siteConfig.links.bootstrap}
                  rel="noreferrer"
                  target="_blank"
                >
                  Bootstrap docs
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-panel p-4 h-100">
                <h2 className="h5 mb-3">Starter checklist</h2>
                <ul className="checklist ps-3 mb-0">
                  {starterChecklist.map((item) => (
                    <li key={item} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="row g-4">
          {starterFeatures.map((feature) => (
            <div key={feature.title} className="col-md-6 col-xl-4">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
