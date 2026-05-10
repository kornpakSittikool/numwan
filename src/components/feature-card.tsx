import type { StarterFeature } from "@/types/site";

type FeatureCardProps = {
  feature: StarterFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="card feature-card border-0 shadow-sm">
      <div className="card-body p-4">
        <h2 className="card-title h5 mb-3">{feature.title}</h2>
        <p className="card-text mb-0">{feature.description}</p>
      </div>
    </div>
  );
}
