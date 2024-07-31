import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';
import { siteUrl } from './src/constants';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [tailwind(), sitemap()]
});
