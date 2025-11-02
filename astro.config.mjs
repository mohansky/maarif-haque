// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maarif-haque.netlify.app", // Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date("2025-11-01"),
    }),
  ],
  adapter: netlify(),
});
