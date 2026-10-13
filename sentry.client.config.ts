import * as Sentry from '@sentry/astro';

const PRODUCTION_HOSTS = ['lukemackenzie.dev', 'www.lukemackenzie.dev'];
const isProduction = PRODUCTION_HOSTS.includes(window.location.hostname);

Sentry.init({
  dsn: 'https://f027295c008711b7b3606073b5b0be74@o4507193180880896.ingest.us.sentry.io/4507737253216256',
  // only report from the live site — not localhost, `astro preview`, or Vercel/Netlify preview deploys
  enabled: isProduction,
  environment: isProduction ? 'production' : 'development',
  ignoreErrors: [
    // The browser aborts a view transition when the tab is backgrounded or the
    // window resizes mid-animation. Navigation still completes, so these are noise.
    /Transition was aborted/
  ],
  integrations: [Sentry.replayIntegration()],
  // record replays only for sessions that hit an error
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0
});
