# Native web development

React and TypeScript compile through the original Cointrade compiler in scripts/build.cjs. Routing, links, images, menus, dialogs and switches use platform/ and native browser controls. Next.js, Tailwind tooling, headless component libraries, and the third-party bundler/test stack have been removed.

Run npm ci --ignore-scripts, npm run typecheck, npm test (frontend), and npm run build. npm run dev recompiles watched source and assets; refresh the browser after changes. Static production hosting remains AWS only. Container builds require a separately reviewed digest-pinned NODE_IMAGE; none is approved yet.

The browser app currently renders client-side. Native route navigation and legal titles are retained; Next.js server rendering, image optimization, animation timing, and compressed API responses are not retained. Native dialogs provide browser focus trapping. The local server returns 404 for unknown routes.

public/assets/cointrade.css preserves the existing generated utility stylesheet with its MIT Tailwind license. Add new styles directly there or in ordinary/CSS-module files; utility generation is no longer automatic. Existing application styles and ordinary module CSS are compiled into build/app.css. Browser dependency notices are included in build/THIRD_PARTY_NOTICES.txt. These notices do not replace source-level compliance review.
