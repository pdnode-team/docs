import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pdnode 文档",
  description: "A Pdnode Site for Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/zh" },
      { text: "文档", link: "/zh/introduction" },
      { text: "成员", link: "/team" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "序言", link: "/zh/introduction" },
          { text: "国际化", link: "/zh/internationalization" },
        ],
      },
      {
        text: "产品",
        items: [
          {
            text: "ChatRoom",
            // link: "/zh/chatroom",
            collapsed: true,
            items: [
              { text: "简介", link: "/zh/chatroom/" },
              { text: "注册", link: "/zh/chatroom/register" },
              { text: "登录", link: "/zh/chatroom/login" },
              { text: "为什么选择Supabase", link: "/zh/chatroom/whysupabase" },
            ],
          },
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
