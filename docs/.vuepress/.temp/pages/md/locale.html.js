import comp from "D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/locale.html.vue"
const data = JSON.parse("{\"path\":\"/md/locale.html\",\"title\":\"国际化配置\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"md/locale.md\"}")
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
