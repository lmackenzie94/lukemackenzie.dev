import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://lmdev.netlify.app/',
  integrations: [tailwind(), sentry(), spotlightjs()]
});
