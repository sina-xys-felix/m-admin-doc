import comp from "D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/locale.html.vue"
const data = JSON.parse("{\"path\":\"/md/locale.html\",\"title\":\"国际化配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750398377000,\"contributors\":[{\"name\":\"xuyp\",\"username\":\"xuyp\",\"email\":\"xuyp@iynss.com\",\"commits\":2,\"url\":\"https://github.com/xuyp\"}],\"changelog\":[{\"hash\":\"8a07d2a7d67f93aecc277f4033c27168a8a2a075\",\"time\":1750398377000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat: 文档内容修改\"},{\"hash\":\"8d52c7e54f2c779d9847b408283db6e35f98632b\",\"time\":1750391629000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat: 更新文档\"}]},\"filePathRelative\":\"md/locale.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
