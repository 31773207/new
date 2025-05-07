import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // specify that the root is inside the `src` folder
  build: {
    outDir: '../dist', // where the final build will go
  },
  server: {
    open: true, // Automatically open the browser when running the dev server
  }
});
