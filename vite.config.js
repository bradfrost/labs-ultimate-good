import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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
