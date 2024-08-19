# lukemackenzie.dev 🕺🏻

- Astro
- Tailwind CSS
- Markdown
- TypeScript
- Google Analytics
  - added with _Partytown_
- PostHog (via [Web snippet](https://us.posthog.com/project/70017/settings/project#snippet))
- Plausible Analytics
- Sentry

**Partytown**

- a lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread.
- if you’re using third-party scripts for things like analytics or ads, Partytown is a great way to make sure that they don’t slow down your site.
- ✅ **Prevent blocking of page rendering**. Third-party scripts will be executed on a separate web worker thread, preventing any scripts from locking up.
- ✅ **Protect from negative impacts of third-party scripts**. This includes expensive DOM selectors, CPU-intensive scripts, or blocking network requests, and other negative impacts.
- ❌ Doesn't work well with View Transitions. (Workarounds are available.) Google Analytics tracking fires a page view event when the page loads. In a SPA (single page app) environment, there needs to be extra tracking code to fire the event manually after a new page is loaded in place.
- ❌ **NEED TO CONFIRM** Breaks in Firefox. No workaround as of Dec 2023. There’s an outstanding bug in Astro 4.0.4 where Partytown breaks View Transitions fallback which is needed for browsers that don’t support view transitions (eg, Firefox).
- ❌ will get `Failed to fetch` error in console if Ublock Origin Chrome extension is installed.

**Sentry**

- a developer-first error tracking and performance monitoring platform
- added via [Astro integration](https://docs.sentry.io/platforms/javascript/guides/astro/)

**Plausible Analytics**

- is an easy to use, open source, lightweight (< 1 KB) and privacy-friendly alternative to Google Analytics.
