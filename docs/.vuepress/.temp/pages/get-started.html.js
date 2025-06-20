import comp from "D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750391629000,\"contributors\":[{\"name\":\"xuyp\",\"username\":\"xuyp\",\"email\":\"xuyp@iynss.com\",\"commits\":2,\"url\":\"https://github.com/xuyp\"}],\"changelog\":[{\"hash\":\"8d52c7e54f2c779d9847b408283db6e35f98632b\",\"time\":1750391629000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat: 更新文档\"},{\"hash\":\"195fecb520d047b0fd31fff0a3e6e643afd2effd\",\"time\":1750236025000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat:initial commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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
