// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://bdpcollective.com',
  base: '/',
  integrations: [tailwind()],
  vite: {
    css: {
      // Ensure each page generates its own CSS
      devSourcemap: true,
    },
    build: {
      // Disable CSS code splitting to avoid bundling issues
      cssCodeSplit: false,
    },
  },
});
