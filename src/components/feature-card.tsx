import type { StarterFeature } from "@/types/site";

type FeatureCardProps = {
  feature: StarterFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="card feature-card border-0 h-100">
      <div className="card-body p-4 p-xl-5">
        <div className="feature-preview mb-4">
          <span className="feature-preview-pill">{feature.metric}</span>
        </div>
        <span className="feature-label mb-3">{feature.label}</span>
        <h2 className="card-title h4 mb-3">{feature.title}</h2>
        <p className="card-text mb-0">{feature.description}</p>
      </div>
    </div>
  );
}
