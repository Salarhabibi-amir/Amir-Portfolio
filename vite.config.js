import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/Amir-Portfolio/" : "/",
  plugins: [vue()],
});