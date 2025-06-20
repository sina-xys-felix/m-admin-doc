import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "M-Admin",
  description: "M-Admin是一款开源、免费、可商用的管理后台脚手架。",
  head: [
    ["link", { rel: "icon", href: "/images/logo.png" }], // 这里也可以设置网站图标
  ],
   base: process.env.NODE_ENV === 'production' ? '/m-admin-doc/' : '/',
  theme: defaultTheme({
    logo: "/images/logo.png",

    navbar: [
      // 简单链接
      { text: "首页", link: "/" },

      {
        text: "指南",
        link: "/get-started",
      },
      // 下拉菜单
      {
        text: "组件",
        children: [
          { text: "MTable", link: "/md/m-table" },
          { text: "MForm", link: "/md/m-form" },
          { text: "MTinymce", link: "/md/m-tinymce" },
          { text: "季度选择器", link: "/md/m-quarter-select" },
          { text: "MSearchForm", link: "/md/m-search-form" },
        ],
      },
      {
        text: "相关链接",
        children: [
          { text: "预览地址", link: "https://sina-xys-felix.github.io/M-Admin/" },
          { text: "Gitee源码", link: "https://gitee.com/sina_xys/m-admin" },
          { text: "Github源码", link: "https://github.com/sina-xys-felix/M-Admin" },
          { text: "更新日志", link: "https://github.com/sina-xys-felix/M-Admin/blob/main/changelog.md" },
        ],
      },
    ],
    sidebarDepth: 3, // 自动显示二级标题深度
    sidebar: [
      {
        text: "指南", // 分组标题
        children: [
          "/get-started",
          "/md/guide",
          "/md/tree",
          "/md/route",
          "/md/permission",
          "/md/config",
        ],
      },
      {
        text: "进阶", // 分组标题
        children: [
          "/md/http-request",
          "/md/locale",
          "/md/hooks",
          "/md/store",
          "/md/tsx",
        ],
      },
      {
        text:'组件教程',
          children: [
          "/md/m-table",
          "/md/m-form",
          "/md/m-tinymce",
          "/md/m-quarter-select",
          "/md/m-search-form",
        ],
      },
      {
        text: "其他", // 分组标题
        collapsable: false, // 是否可折叠
        sidebarDepth: 2, // 自动显示二级标题深度
        children: ["/md/standard", "/md/question"],
      },
    ],

    // sidebar: ["/get-started", "/guide","/tree","/route","/permission","/standard","/config","/http-request","/m-table","/question"],
  }),

  bundler: viteBundler(),
});
