# Architecture

## Layout
- `src/routes/__root.tsx` — HTML shell, head metadata, error/404 pages
- `src/routes/index.tsx` — the emoji page (all app logic, client-side `useState`)
- `src/components/ui/` — shadcn/ui components
- `scripts/copy-static-output.mjs` — ensures build output lives in `dist/client`

## Rendering
The `/` route is prerendered at build time. The emoji state is client-only and starts from a fixed value, so the prerendered HTML hydrates without mismatch.

## Gotchas
- Keep randomness out of the initial render (hydration mismatch).
- Don't arm timers at module scope — they keep the prerender build from exiting.
- Don't set `nitro: { preset: "static" }`; it breaks the build.
- No server functions or worker entrypoints: the static host cannot run them.
