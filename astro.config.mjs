import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/3047',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
