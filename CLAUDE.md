# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

OpenWriterWeb — a Next.js 16 web application.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Fonts:** Geist Sans + Geist Mono (via next/font)

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

## Architecture

- `src/app/` — Next.js App Router (layouts, pages, globals.css)
- `src/components/ui/` — shadcn/ui components
- `src/lib/utils.ts` — shared utilities (cn helper for class merging)
- Import alias: `@/*` maps to `./src/*`

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```
