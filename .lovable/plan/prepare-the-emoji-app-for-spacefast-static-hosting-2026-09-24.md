# Prepare the Emoji app for SpaceFast static hosting

Apply the uploaded hand-off prompt to this project. The emoji button keeps working exactly as today.

## What changes
1. **No Cloudflare Workers**: confirm there are no wrangler files or Cloudflare packages (none found in package.json). Keep `nitro` untouched (no `preset: "static"`, per the prompt's warning).
2. **Static build**: in `vite.config.ts`, turn on prerendering for `/` only, with auto-discovery off. The app has no server logic, so one static page is enough.
3. **Output normalizer**: add `scripts/copy-static-output.mjs` that ensures the final site lands in `dist/client`; build script becomes `vite build && node scripts/copy-static-output.mjs`.
4. **Static files**: add `public/_redirects` (`/* /index.html 200`) and `public/sitemap.xml`; keep `robots.txt`. Ensure `.gitignore` covers `dist/`, `.output/`, `.wrangler/`.
5. **Docs**: `SPACEFAST.md` (install, build, publish dir `dist/client`), rewritten `README.md`, `docs/architecture.md`, `docs/deployment.md`, `docs/environment.md`, `.env.example` (no variables needed), and `roadmap.md`.
6. **Page titles**: replace "Lovable App" placeholder with Emoji app title/description.
7. **Verify**: run a build and confirm `dist/client/index.html` exists and no wrangler/cloudflare references remain.

## Risks and rollback
- Confidence: high for a static single page. Assumption: SpaceFast serves plain files from `dist/client`.
- The Lovable preview/publish keeps working; rollback = revert this change from history.
