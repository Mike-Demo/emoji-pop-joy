// @lovable.dev/vite-tanstack-config already bundles the TanStack Start, React, Tailwind,
// path-alias and server build plugins — do NOT add them manually or the app will break.
// Static hosting (SpaceFast): the only public route is prerendered to plain HTML.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // SSR error wrapper entry (src/server.ts), used by the build and Lovable preview.
    server: { entry: "server" },
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
