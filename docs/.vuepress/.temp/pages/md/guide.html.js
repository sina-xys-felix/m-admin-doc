import comp from "D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/guide.html.vue"
const data = JSON.parse("{\"path\":\"/md/guide.html\",\"title\":\"快速上手\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1750669454000,\"contributors\":[{\"name\":\"xuyp\",\"username\":\"xuyp\",\"email\":\"xuyp@iynss.com\",\"commits\":2,\"url\":\"https://github.com/xuyp\"}],\"changelog\":[{\"hash\":\"ebc59aafb2ec4e5f2c07fbff96c94651c1c3f33a\",\"time\":1750669454000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat:更新git地址\"},{\"hash\":\"8d52c7e54f2c779d9847b408283db6e35f98632b\",\"time\":1750391629000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat: 更新文档\"}]},\"filePathRelative\":\"md/guide.md\"}")
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
