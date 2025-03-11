import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePWA from 'vite-plugin-pwa';

// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePWA from '@vitejs/plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/(.*)\.jpg$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60, // 1 day
              },
            },
          },
        ],
      },
    }),
  ],
  base: '/pagina-web-pitu/',
});
