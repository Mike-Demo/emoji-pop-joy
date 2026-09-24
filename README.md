# Emoji Roll

A tiny app that shows a random emoji each time you click the button.

- Lovable URL: https://emoji-pop-joy.lovable.app

## Features
- One-click random emoji
- Fully static, prerendered page — no backend, no secrets

## Tech Stack
TanStack Start (React 19), Vite, Tailwind CSS v4, shadcn/ui. All dependencies are MIT-licensed open source.

## Local Development
Requires Node 20+ (or Bun).

```sh
npm install
npm run dev     # http://localhost:8080
npm run build   # static output in dist/client
```

## SpaceFast Deployment
1. Edit in Lovable; changes sync to GitHub.
2. Connect the GitHub repo in SpaceFast.
3. Build command: `npm run build`. Publish directory: `dist/client`.

## Documentation
- [SPACEFAST.md](SPACEFAST.md)
- [docs/architecture.md](docs/architecture.md)
- [docs/deployment.md](docs/deployment.md)
- [docs/environment.md](docs/environment.md)
- [roadmap.md](roadmap.md)
