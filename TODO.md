# To-Do

- [ ] Auto-generate OG images
- [x] 🪲 Refresh on blog/project page resets theme
- [x] 🪲 Theme resets/flashes when switching between pages
- [ ] Store social icons locally
- [x] Add [Plausible Analytics](https://plausible.io/)
- [x] Add [Sentry](https://sentry.io/)
- [ ] 🪲 Stop disco scene on page change
- [ ] 🪲 Don't think page changes are being tracked by PostHog (probably because of ViewTransitions?)
  - [Example using `astro:page-load` event](https://ramonmalcolm.com/articles/astro-js-google-analytics-integration-guide/), but not sure it'll work with Partytown
- [ ] Only run analytics on production (✅ Sentry; PostHog already skips localhost)
