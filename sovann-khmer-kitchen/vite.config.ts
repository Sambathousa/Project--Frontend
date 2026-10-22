import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        menu: 'menu.html',
        about: 'about.html',
        gallery: 'gallery.html',
        contact: 'contact.html',
        orders: 'orders.html'
      }
    }
  }
});