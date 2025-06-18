import { CodeTabs } from "D:/project/open-source/code/github/m-admin-doc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.108_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vuepress+_u5qwxywj5zxfcqgqt4byu2x6uy/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/project/open-source/code/github/m-admin-doc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.108_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vuepress+_u5qwxywj5zxfcqgqt4byu2x6uy/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/project/open-source/code/github/m-admin-doc/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.108_markdown-it@14.1.0_vuepress@2.0.0-rc.23_@vuepress+_u5qwxywj5zxfcqgqt4byu2x6uy/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
