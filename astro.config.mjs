import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/constants';
import partytown from '@astrojs/partytown';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        // will output detailed logs to the browser console.
        // debug: true, //* on by default in dev or preview mode
        //? Third-party scripts typically add variables to the window object so that you can communicate with them throughout your site.
        //? But when a script is loaded in a web-worker, it doesn’t have access to that global window object.
        //? To solve this, Partytown can “patch” variables to the global window object and forward them to the appropriate script.
        forward: ['dataLayer.push']
      }
    }),
    sentry({
      dsn: 'https://f027295c008711b7b3606073b5b0be74@o4507193180880896.ingest.us.sentry.io/4507737253216256',
      sourceMapsUploadOptions: {
        project: 'lukemackenziedev',
        authToken: process.env.SENTRY_AUTH_TOKEN
      }
    })
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});
