import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: [
          '**/*.png',
          '**/*.jpg',
          '**/*.jpeg',
          '**/*.webp',
          '**/*.svg',
          '**/*.ico',
          '**/*.zip',
          '**/dist/**',
          '**/dist.zip',
        ],
      },
    },
  };
});
