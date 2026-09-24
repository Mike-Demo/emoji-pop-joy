# SpaceFast Deployment Spec

- Install command: `npm install` (or `bun install`)
- Build command: `vite build && node scripts/copy-static-output.mjs` (same as `npm run build`)
- Publish directory: `dist/client`

Notes:
- Pure static site: no request-time server logic, no edge workers, no database.
- `public/_redirects` provides the SPA fallback to `index.html`.
