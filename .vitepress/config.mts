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
      {
        text: "Platform",
        items: [
          { text: "Contribute/Submit an issue", link: "/platform/contribute.md" },
        ],
      },
      {
        text: "Products",
        items: [
          {
            text: "ChatRoom",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/chatroom/" },
              { text: "Register", link: "/chatroom/register" },
              { text: "Login", link: "/chatroom/login" },
              { text: "Workspace", link: "/chatroom/workspace" },
              { text: "Why Supabase", link: "/chatroom/whysupabase" },
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
