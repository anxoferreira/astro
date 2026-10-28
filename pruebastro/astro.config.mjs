// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  server: {
    allowedHosts: [
      ".trycloudflare.com", // <-- Esto permite cualquier subdominio temporal de Cloudflare
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx()],
  output: "static",
  adapter: netlify(),
});