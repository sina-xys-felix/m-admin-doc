import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  base:'/m-admin-doc',
  lang: "zh-CN",
  title: "M-Admin",
  description: "M-Admin是一款开源、免费、可商用的管理后台脚手架。",

  theme: defaultTheme({
    logo: "/images/logo.png",

    // navbar: ["/", "/guide", "/get-started"],
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
          { text: "MTable", link: "/m-table" },
          { text: "MForm", link: "/m-table" },
          { text: "富文本编辑器", link: "/m-table" },
        ],
      },
      {
        text: "相关链接",
        children: [
          { text: "预览地址", link: "https://sina-xys-felix.github.io/M-Admin/" },
          { text: "Gitee源码", link: "https://gitee.com/sina_xys/m-admin" },
          { text: "Github源码", link: "https://github.com/sina-xys-felix/M-Admin" },
          { text: "更新日志", link: "https://gitee.com/sina_xys/x-admin" },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
});
