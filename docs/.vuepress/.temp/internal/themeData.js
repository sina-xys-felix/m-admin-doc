export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/get-started\"},{\"text\":\"组件\",\"children\":[{\"text\":\"MTable\",\"link\":\"/md/m-table\"},{\"text\":\"MForm\",\"link\":\"/md/m-form\"},{\"text\":\"MTinymce\",\"link\":\"/md/m-tinymce\"},{\"text\":\"季度选择器\",\"link\":\"/md/m-quarter-select\"},{\"text\":\"MSearchForm\",\"link\":\"/md/m-search-form\"}]},{\"text\":\"相关链接\",\"children\":[{\"text\":\"预览地址\",\"link\":\"https://m-admin.cn\"},{\"text\":\"Gitee源码\",\"link\":\"https://gitee.com/sina_xys/m-admin\"},{\"text\":\"Github源码\",\"link\":\"https://github.com/sina-xys-felix/M-Admin\"},{\"text\":\"更新日志\",\"link\":\"https://github.com/sina-xys-felix/M-Admin/blob/main/changelog.md\"}]}],\"sidebarDepth\":3,\"sidebar\":[{\"text\":\"指南\",\"children\":[\"/get-started\",\"/md/guide\",\"/md/tree\",\"/md/route\",\"/md/permission\",\"/md/config\"]},{\"text\":\"进阶\",\"children\":[\"/md/http-request\",\"/md/locale\",\"/md/hooks\",\"/md/store\",\"/md/tsx\"]},{\"text\":\"组件教程\",\"children\":[\"/md/m-table\",\"/md/m-form\",\"/md/m-tinymce\",\"/md/m-quarter-select\",\"/md/m-search-form\"]},{\"text\":\"其他\",\"collapsable\":false,\"sidebarDepth\":2,\"children\":[\"/md/standard\",\"/md/question\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
