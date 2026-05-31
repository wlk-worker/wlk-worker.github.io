import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wlk-worker.github.io',
  integrations: [tailwind()],
});
