export type NavItem = {
  label: string;
  href: string;
};

export type HeroFeature = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  note: string;
};

export type Product = {
  name: string;
  category: string;
  price: string;
  quantity: number;
  compareAt?: string;
  badge?: string;
  rating: string;
  image: string;
};

export type PromoBanner = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
  theme?: "light" | "dark";
};

export type VideoFeature = {
  title: string;
  caption: string;
  image: string;
  href: string;
};
