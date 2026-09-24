# Deployment (SpaceFast)

1. Push to GitHub (automatic from Lovable).
2. SpaceFast: build `npm run build`, publish `dist/client`.

## Known failure modes
- "Worker entrypoints are not converted": a worker config or server function was added. Remove it.
- Stale deploy: SpaceFast built an older commit — trigger a redeploy on the latest commit.

## Custom domain
- Apex: A record to the IP SpaceFast provides.
- `www`/subdomain: CNAME to your SpaceFast hostname.

## Limitations
Static only: no APIs, logins, databases or server-side code.
