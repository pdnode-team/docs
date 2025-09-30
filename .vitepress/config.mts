import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pdnode Docs",
  sitemap: {
    hostname: "https://docs.pdnode.com",
  },
  description: "A Pdnode Site for Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/introduction" },
      { text: "Member", link: "/team" },
    ],

    sidebar: [
      {
        text: "Start",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Internationalization", link: "/internationalization" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/pdnode-team/docs" },
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    zh: {
      label: "Chinese",
      lang: "zh",
    },
  },
});
