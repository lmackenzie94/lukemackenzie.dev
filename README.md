# lukemackenzie.dev 🕺🏻

- Astro
- Tailwind CSS
- Markdown
- TypeScript
- Vercel Web Analytics
- Sentry

**Sentry**

- a developer-first error tracking and performance monitoring platform
- added via [Astro integration](https://docs.sentry.io/platforms/javascript/guides/astro/)
- runtime config (DSN, error filtering, replays) lives in `sentry.client.config.ts`; only reports from the production domain

**Vercel Web Analytics**

- cookieless page view + referrer tracking via `@vercel/analytics` (`<Analytics />` in `Layout.astro`)
- tracks client-side (`<ClientRouter />`) navigations too
- must be enabled in the Vercel project's Analytics tab; only collects on Vercel deployments
