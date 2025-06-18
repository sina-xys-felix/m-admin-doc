export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/get-started\"},{\"text\":\"组件\",\"children\":[{\"text\":\"MTable\",\"link\":\"/m-table\"},{\"text\":\"MForm\",\"link\":\"/m-table\"},{\"text\":\"富文本编辑器\",\"link\":\"/m-table\"}]},{\"text\":\"相关链接\",\"children\":[{\"text\":\"预览地址\",\"link\":\"https://sina-xys-felix.github.io/M-Admin/\"},{\"text\":\"Gitee源码\",\"link\":\"https://gitee.com/sina_xys/m-admin\"},{\"text\":\"Github源码\",\"link\":\"https://github.com/sina-xys-felix/M-Admin\"},{\"text\":\"更新日志\",\"link\":\"https://gitee.com/sina_xys/x-admin\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
