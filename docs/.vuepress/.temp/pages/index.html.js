import comp from "D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/logo.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/get-started.html\",\"type\":\"primary\"},{\"text\":\"在线预览\",\"link\":\"https://m-admin.cn/login\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"最新流行技术栈\",\"details\":\"基于vue3、vite4、TypeScript、Pinia、Arco-design-vue、echarts等最新技术栈进行开发\"},{\"title\":\"简单易上手\",\"details\":\"项目代码简单，易上手，提供详细的项目文档\"},{\"title\":\"丰富的组件和hooks\",\"details\":\"提供实际场景下的组件、常用的hooks封装，节省了造轮子的时间\"},{\"title\":\"个性化主体配置\",\"details\":\"提供多种布局方式切换，主题颜色配置，暗黑、亮色、色弱等模式\"},{\"title\":\"规范工程化工作流\",\"details\":\"配置Eslint、Prettier、Lint-staged、Husky规范前端工程化代码规范\"},{\"title\":\"项目权限管理\",\"details\":\"提供简单的菜单、路由及按钮权限管理方案\"}],\"footer\":\"MIT Licensed | Copyright © 2025 M-Admin\"},\"git\":{\"updatedTime\":1750659644000,\"contributors\":[{\"name\":\"xuyp\",\"username\":\"xuyp\",\"email\":\"xuyp@iynss.com\",\"commits\":2,\"url\":\"https://github.com/xuyp\"}],\"changelog\":[{\"hash\":\"99e34244b7171f2d940feb981df55f7929dcbe8f\",\"time\":1750659644000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat:更新预览地址\"},{\"hash\":\"195fecb520d047b0fd31fff0a3e6e643afd2effd\",\"time\":1750236025000,\"email\":\"xuyp@iynss.com\",\"author\":\"xuyp\",\"message\":\"feat:initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
