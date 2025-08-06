import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 5173,
  },
  define: {
    'process.env.NODE_ENV': '"development"',
  },
});
