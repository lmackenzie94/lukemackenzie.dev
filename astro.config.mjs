import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/constants';
import partytown from '@astrojs/partytown';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

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
    })
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});
