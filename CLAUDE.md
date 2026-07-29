# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`trisol-ombrelones` is a Next.js 16 application (App Router) using React 19, TypeScript, and Tailwind CSS v4. It was bootstrapped with `create-next-app` and is at an early, near-scaffold stage — most product code has yet to be written.

## Commands

Use **pnpm** (the repo has `pnpm-lock.yaml` and `pnpm-workspace.yaml`; do not use npm/yarn).

- `pnpm dev` — start the dev server at http://localhost:3000 (with hot reload)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint

There is no test runner configured yet.

## Architecture & Conventions

- **App Router only.** All routes/pages live under `app/`. `app/layout.tsx` is the root layout; `app/page.tsx` is the home route. Add new routes as directories under `app/` with `page.tsx`/`layout.tsx`.
- **Path alias:** `@/*` maps to the repo root (e.g. `import x from "@/app/..."`). Configured in `tsconfig.json`.
- **Tailwind v4** is configured via `@import "tailwindcss"` in `app/globals.css` and the `@tailwindcss/postcss` plugin (`postcss.config.mjs`) — there is no `tailwind.config` file. Theme tokens (colors, fonts) are declared inline with `@theme` in `globals.css`.
- **Theming:** light/dark colors are CSS variables (`--background`, `--foreground`) switched via `prefers-color-scheme`. Fonts are Geist Sans/Mono loaded through `next/font` and exposed as `--font-sans`/`--font-mono`.
- **TypeScript is strict** (`strict: true`, `noEmit`). ESLint uses the flat-config `eslint-config-next` (core-web-vitals + typescript rulesets) in `eslint.config.mjs`.
- `sharp` and `unrs-resolver` are listed as ignored/optional build dependencies in `pnpm-workspace.yaml`.
