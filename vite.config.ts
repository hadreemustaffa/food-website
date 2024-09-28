import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  define: {
    __API_KEY__: JSON.stringify(process.env.SPOONACULAR_API_KEY),
    __API_URL__: JSON.stringify(process.env.SPOONACULAR_API_URL),
  },
  plugins: [react(), vercel()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
    },
  },
});
