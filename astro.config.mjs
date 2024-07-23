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
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: "github-light",
        dark: "nord",
      },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      // Add custom languages
      defaultColor: false,
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
    },
  },
  integrations: [mdx(), sitemap(), compress(), robotsTxt(), svelte()],
  optimizeDeps: {
    include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
  },
});
