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
      // Enable CSS code splitting for better performance
      cssCodeSplit: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['d3', 'topojson-client'],
    },
  },
});
