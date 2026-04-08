# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing site for a massage/cosmetology cabinet in Sochi (estive.ru). Built with Nuxt 4, deployed via Docker to Amvera cloud. All text content is in Russian.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build
npm run preview    # Preview production build
```

No linting or testing scripts are configured.

## Environment Variables

Required at runtime (not baked into the build):

```
NUXT_TELEGRAM_BOT_TOKEN=   # Telegram bot token for contact form
NUXT_TELEGRAM_CHAT_ID=     # Telegram chat ID to receive form submissions
```

## Architecture

### Nuxt 4 App-First Structure

All frontend code lives under `app/` — this is mandatory per project rules:

- `app/pages/` — route pages (index, about, services, contacts, privacy)
- `app/layouts/default.vue` — global layout: `UHeader` → `<slot />` → `UFooter`
- `app/components/` — reusable Vue components (PascalCase.vue)
- `app/plugins/` — `reveal.client.ts` / `reveal.server.ts` for scroll animations
- `app/assets/css/main.css` — global styles
- `app/app.config.ts` — Nuxt UI theme customization (`mocha` primary color, dark mode)
- `server/api/send-telegram.post.ts` — single API endpoint, handles contact form → Telegram

### Key Conventions (from `.agents/rules.md`)

- **Vue**: `<script setup lang="ts">` only — no Options API, no mixins
- **UI**: Nuxt UI 4 is the exclusive UI layer. Never use raw `<button>`, `<input>`, `<nav>` when Nuxt UI has an equivalent. Prefer `UButton`, `UCard`, `UInput`, etc.
- **Images**: Always use `<NuxtImg>` (never `<img>`). Format is webp, quality 80.
- **Navigation**: Always use `<NuxtLink>` for internal links.
- **Lazy loading**: Prefix component names with `Lazy` to lazy-load them.
- **Data fetching**: `useFetch` / `useAsyncData` only — never fetch in `onMounted`.
- **Styling**: Theme via `app.config.ts`, avoid inline styles and custom CSS where possible.
- **Server validation**: Validate all API inputs server-side (`createError` for errors).

### Theming

The UI uses a custom `mocha` color palette (warm brown tones). Color mode is forced dark (`preference: 'dark'`, `fallback: 'dark'`). Fonts are Inter (body) and Playfair Display (headings), served via Google Fonts with cyrillic subset.

### Deployment

Docker multi-stage build: Node 20 Alpine builder → minimal runner. Port 3000. Deployed to Amvera via `amvera.yaml`.

### Image Utilities

`scripts/` contains one-off Node.js scripts for converting and resizing images (webp conversion, certificate resizing). Run manually with `node scripts/<name>.js`.
