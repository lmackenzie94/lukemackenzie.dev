import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/constants';
import sentry from '@sentry/astro';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap(),
    // runtime options (DSN, filtering, replays) live in sentry.client.config.ts
    sentry({
      // static site — there's no server runtime to instrument
      enabled: { client: true, server: false },
      project: 'lukemackenziedev',
      authToken: process.env.SENTRY_AUTH_TOKEN
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
