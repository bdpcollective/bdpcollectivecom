// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bdpcollective.com',
  base: '/',
  build: {
    // Automatically inline small stylesheets to reduce critical request chains
    inlineStylesheets: 'auto',
    // Optimize asset handling
    assets: '_astro',
  },
  image: {
    // Enable optimized image processing
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      // Ensure each page generates its own CSS
      devSourcemap: true,
    },
    build: {
      // Enable CSS code splitting for better performance
      cssCodeSplit: true,
      // Optimize chunk size
      chunkSizeWarningLimit: 1000,
      // Enable minification with esbuild (faster than terser)
      minify: 'esbuild',
      // Optimize module preloading
      modulePreload: {
        polyfill: false, // Modern browsers support this
      },
      // Better code splitting
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split vendor code from node_modules
            if (id.includes('node_modules')) {
              if (id.includes('d3') || id.includes('topojson')) {
                return 'vendor-viz';
              }
              return 'vendor';
            }
          },
        },
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      include: ['d3', 'topojson-client'],
    },
  },
});
