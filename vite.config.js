import react            from '@vitejs/plugin-react';
import reactRefresh     from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
})
