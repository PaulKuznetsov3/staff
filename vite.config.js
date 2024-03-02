import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/paulkuznetsov3.github.io/staff/',
  plugins: [react()],
});
