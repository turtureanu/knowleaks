import mdx from "@astrojs/mdx";
import astroCompress from "gab-astro-compress";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import purgeCSS from "astro-purgecss";
// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://knowleaks.org",
  markdown: {
    shikiConfig: {
      // Choose from Shiki"s built-in themes (or add your own)
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
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt(),
    purgeCSS({
      content: ["./src/**/*.{astro,svelte,vue,tsx,jsx,ts,js}"],
    }),
    svelte(),
    astroCompress(),
  ],
  optimizeDeps: {
    include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
  },
});
