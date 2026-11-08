// @ts-check
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { baseLinksPlugin } from "./src/lib/base-links.mjs";
import { releasesUrl, siteConfig } from "./src/site.config.ts";

export default defineConfig({
  site: siteConfig.site,
  base: siteConfig.base,
  trailingSlash: "ignore",
  markdown: {
    processor: satteri({ hastPlugins: [baseLinksPlugin(siteConfig.base)] }),
  },
  integrations: [
    starlight({
      title: siteConfig.name,
      description: siteConfig.description,
      logo: { src: "./src/assets/logo.svg" },
      favicon: "/favicon.svg",
      disable404Route: true,
      social: [{ icon: "github", label: "Releases on GitHub", href: releasesUrl }],
      customCss: ["./src/styles/global.css"],
      components: {
        Footer: "./src/components/starlight/Footer.astro",
        SocialIcons: "./src/components/starlight/SocialIcons.astro",
      },
      head: [{ tag: "meta", attrs: { name: "theme-color", content: "#2f6fde" } }],
      sidebar: [
        {
          label: "Getting started",
          items: [
            { label: "Introduction", slug: "docs" },
            { label: "Install", slug: "docs/install" },
            { label: "First run", slug: "docs/first-run" },
            { label: "Opening and saving files", slug: "docs/files" },
            { label: "Using several computers", slug: "docs/several-computers" },
            { label: "Updates", slug: "docs/updates" },
            { label: "Keyboard shortcuts", slug: "docs/shortcuts" },
          ],
        },
        {
          label: "Apps",
          items: [
            { label: "To-do & sticky notes", slug: "docs/apps/todo" },
            { label: "Markdown", slug: "docs/apps/markdown" },
            { label: "CSV", slug: "docs/apps/csv" },
            { label: "PDF", slug: "docs/apps/pdf" },
            { label: "Paint", slug: "docs/apps/paint" },
            { label: "Board", slug: "docs/apps/board" },
            { label: "Calculator & graphing", slug: "docs/apps/calculator" },
            { label: "Meme Maker", slug: "docs/apps/meme-maker" },
            { label: "Images", slug: "docs/apps/images" },
            { label: "API client", slug: "docs/apps/api-client" },
            { label: "JSON", slug: "docs/apps/json" },
          ],
        },
        {
          label: "Sharing",
          items: [
            { label: "Live sharing", slug: "docs/sharing/live-sharing" },
            { label: "Phone app", slug: "docs/sharing/phone" },
          ],
        },
        {
          label: "AI",
          items: [
            { label: "AI sidebar", slug: "docs/ai/sidebar" },
            { label: "Connecting agents (MCP)", slug: "docs/ai/agents" },
          ],
        },
        {
          label: "Help",
          items: [{ label: "FAQ & troubleshooting", slug: "docs/faq" }],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
