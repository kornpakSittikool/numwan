# Agent Instructions

## Project stack

- Next.js 15 App Router in `/app`
- Shared code in `/src`
- Bootstrap as the primary CSS framework
- pnpm 10 for dependency management and scripts

## Working rules

- Use `pnpm` for installs, updates, and scripts.
- Keep the project small, readable, and dependency-light.
- Do not add Tailwind CSS.
- Prefer server components unless a client component is clearly needed.
- Keep TypeScript strict and avoid `any`.
- Put reusable UI in `src/components`, page-specific composition in `src/features`, utilities in `src/lib`, and shared types in `src/types`.
- Do not disable ESLint, Prettier, CodeQL, Dependabot, or CI checks.
- Run `pnpm check` before finishing substantial changes.
