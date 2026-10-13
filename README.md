# lukemackenzie.dev 🕺🏻

- Astro
- Tailwind CSS
- Markdown
- TypeScript
- PostHog (via [Web snippet](https://us.posthog.com/project/70017/settings/project#snippet))
- Plausible Analytics
- Sentry

**Sentry**

- a developer-first error tracking and performance monitoring platform
- added via [Astro integration](https://docs.sentry.io/platforms/javascript/guides/astro/)
- runtime config (DSN, error filtering, replays) lives in `sentry.client.config.ts`; only reports from the production domain

**Plausible Analytics**

- is an easy to use, open source, lightweight (< 1 KB) and privacy-friendly alternative to Google Analytics.
