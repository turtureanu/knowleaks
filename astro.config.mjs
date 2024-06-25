import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://knowleaks.netlify.app",
  integrations: [mdx(), sitemap(), compress(), robotsTxt(), svelte()],
});
