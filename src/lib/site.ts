import type { StarterFeature } from "@/types/site";

export const siteConfig = {
  name: "Next.js Bootstrap Starter",
  description:
    "A clean Next.js App Router starter with TypeScript, Bootstrap, ESLint, Prettier, pnpm, and GitHub Actions.",
  links: {
    bootstrap: "https://getbootstrap.com/",
    nextjs: "https://nextjs.org/docs",
  },
} as const;

export const starterFeatures: StarterFeature[] = [
  {
    title: "Readable structure",
    description:
      "App Router stays in /app while shared code lives in focused folders under /src.",
  },
  {
    title: "Practical tooling",
    description:
      "ESLint handles code quality, Prettier handles formatting, and both are configured to avoid rule overlap.",
  },
  {
    title: "GitHub ready",
    description:
      "CI, CodeQL, Dependabot, and a basic security policy are included from the start.",
  },
];

export const starterChecklist = [
  "Use pnpm for dependency changes and scripts.",
  "Prefer server components unless a client component is required.",
  "Keep Bootstrap as the primary styling layer.",
  "Run pnpm check before opening a pull request.",
] as const;
