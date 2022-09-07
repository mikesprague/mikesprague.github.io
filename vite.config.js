import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: './src/index.html',
        nested: './src/thanksgiving-1984/index.html',
      },
    },
  },
  publicDir: '../public',
  base: './',
  outDir: './',
  server: {
    port: 3000,
    strictPort: true,
  },
});
