// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://yourdomain.com", // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
  adapter: netlify(),
});