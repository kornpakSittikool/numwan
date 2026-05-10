# Next.js Bootstrap Starter

A clean Next.js starter built with the App Router, TypeScript, Bootstrap, pnpm, ESLint, Prettier, and GitHub automation.

## What is included

- Next.js App Router with strict TypeScript
- Bootstrap as the main CSS framework
- pnpm with a committed lockfile
- ESLint for code quality
- Prettier for formatting
- GitHub Actions CI
- CodeQL code scanning
- Dependabot for npm and GitHub Actions
- Basic `AGENTS.md` and `SECURITY.md`

## Project structure

```txt
/
├─ app/
├─ src/
│  ├─ components/
│  ├─ features/
│  ├─ lib/
│  └─ types/
├─ .github/
│  ├─ workflows/
│  │  ├─ ci.yml
│  │  └─ codeql.yml
│  └─ dependabot.yml
├─ AGENTS.md
├─ SECURITY.md
├─ README.md
```

## Getting started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open `http://localhost:3000`.

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "check": "pnpm lint && pnpm format:check && pnpm typecheck && pnpm build"
}
```

## Notes

- The project is pinned to Next.js 15 so the requested `next lint` script remains available.
- CI installs dependencies with `pnpm install --frozen-lockfile`.
- Bootstrap is imported globally in `app/layout.tsx`.
- Dependabot groups minor and patch updates, while major version bumps are left for manual migration work.
