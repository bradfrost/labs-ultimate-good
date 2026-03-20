import path from 'path';
import { defineConfig } from 'vite';

const eddieRoot = path.resolve(__dirname, '../../eddie-design-system');

export default defineConfig({
  resolve: {
    alias: {
      '@brad-frost-web/eddie-web-components': path.join(eddieRoot, 'packages/eddie-web-components'),
      '@brad-frost-web/eddie-design-tokens': path.join(eddieRoot, 'packages/eddie-design-tokens'),
      '@brad-frost-web/eddie-icons': path.join(eddieRoot, 'packages/eddie-icons'),
      '@brad-frost-web/eddie-recipes': path.join(eddieRoot, 'packages/eddie-recipes'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        includePaths: [
          path.join(eddieRoot, 'packages/eddie-design-tokens/core/scss'),
          path.join(eddieRoot, 'packages/eddie-design-tokens'),
          path.join(eddieRoot, 'packages'),
        ],
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        'war-conflict': path.resolve(__dirname, 'war-conflict/index.html'),
        'poverty': path.resolve(__dirname, 'poverty/index.html'),
        'climate-change': path.resolve(__dirname, 'climate-change/index.html'),
        'environment': path.resolve(__dirname, 'environment/index.html'),
        'health': path.resolve(__dirname, 'health/index.html'),
        'inequality': path.resolve(__dirname, 'inequality/index.html'),
        'education': path.resolve(__dirname, 'education/index.html'),
        'mental-health': path.resolve(__dirname, 'mental-health/index.html'),
      },
    },
  },
});
