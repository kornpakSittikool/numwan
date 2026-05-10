# Agent Instructions

## Project stack

- Next.js 15 App Router in `/app`
- Shared code in `/src`
- Bootstrap as the primary CSS framework
- pnpm 10 for dependency management and scripts
- ESLint for code quality
- Prettier for code formatting
- GitHub Actions for CI
- CodeQL for code scanning
- Dependabot for dependency updates

## Working rules

- Use `pnpm` for installs, updates, and scripts.
- Keep the project small, readable, and dependency-light.
- Do not add Tailwind CSS.
- Use Bootstrap utility classes and components as the default styling approach.
- Keep custom CSS minimal.
- Prefer server components unless a client component is clearly needed.
- Keep TypeScript strict and avoid `any`.
- Prefer readable code over clever code.
- Make small, focused changes.
- Do not rewrite unrelated files.
- Do not add new dependencies unless clearly necessary.
- Put reusable UI in `src/components`.
- Put page-specific composition in `src/features`.
- Put utilities in `src/lib`.
- Put shared types in `src/types`.

## Dependency rules

- Treat major dependency upgrades as deliberate migrations, not routine bumps.
- Next.js is intentionally pinned to v15 because CI uses `next lint`.
- Do not upgrade to Next.js 16+ unless the lint workflow is migrated from `next lint` to the ESLint CLI first.
- If upgrading Next.js to v16+, update the related scripts, CI workflow, README, and agent instructions in the same change.
- Do not blindly merge Dependabot major version PRs.
- Review major version PRs manually and explain the migration impact before applying changes.

## Quality and security rules

- Do not disable ESLint.
- Do not disable Prettier.
- Do not disable CodeQL.
- Do not disable Dependabot.
- Do not disable CI checks.
- Do not commit secrets, tokens, API keys, or credentials.
- Use environment variables for sensitive configuration.
- Keep GitHub Actions permissions minimal.
- Prefer `permissions: contents: read` unless a workflow requires more access.

## Windows / PowerShell command rules

This project is often developed on Windows.

PowerShell may block `pnpm.ps1` because of the local execution policy.

Do not change the machine execution policy to fix this.

When running pnpm commands on Windows PowerShell, prefer `pnpm.cmd` instead of `pnpm`.

Examples:

```powershell
pnpm.cmd install
pnpm.cmd dev
pnpm.cmd lint
pnpm.cmd format
pnpm.cmd typecheck
pnpm.cmd build
pnpm.cmd check