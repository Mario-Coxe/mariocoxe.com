import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mario-coxe.github.io/mariocoxe.com/",
  integrations: [mdx(), sitemap(), tailwind()],
});
