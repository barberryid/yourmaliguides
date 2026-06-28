import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourmaliguides.com",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Give the homepage top priority; trim it back for utility pages.
        if (item.url === "https://yourmaliguides.com/") {
          item.priority = 1.0;
        } else if (/\/(safety|cloth|community-projects)\/$/.test(item.url)) {
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],
});
