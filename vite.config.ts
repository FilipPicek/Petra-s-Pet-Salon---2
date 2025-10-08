import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base for GitHub Pages and static hosting
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
