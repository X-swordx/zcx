import sidebar from "./sidebar";

export default {
  base: "/zcx/",
  title: "ZcxDocs",
  description: "Front-end learning document collection.",
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT X-Swordx",
    },
    nav: [
      // { text: "关于我", link: "https://blog.yangchaoyi.vip/" },
      { text: "Github", link: "https://github.com/X-swordx" },
    ],
    editLink: {
      pattern: "https://github.com/X-swordx/zcx/edit/main/docs/:path",
    },
    sidebar,
  },
};
