export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"介绍"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/md/config.html", { loader: () => import(/* webpackChunkName: "md_config.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/config.html.js"), meta: {"title":"系统配置"} }],
  ["/md/guide.html", { loader: () => import(/* webpackChunkName: "md_guide.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/guide.html.js"), meta: {"title":"快速上手"} }],
  ["/md/hooks.html", { loader: () => import(/* webpackChunkName: "md_hooks.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/hooks.html.js"), meta: {"title":"Hooks"} }],
  ["/md/http-request.html", { loader: () => import(/* webpackChunkName: "md_http-request.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/http-request.html.js"), meta: {"title":"网络请求"} }],
  ["/md/locale.html", { loader: () => import(/* webpackChunkName: "md_locale.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/locale.html.js"), meta: {"title":"国际化配置"} }],
  ["/md/m-form.html", { loader: () => import(/* webpackChunkName: "md_m-form.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/m-form.html.js"), meta: {"title":"MForm"} }],
  ["/md/m-quarter-select.html", { loader: () => import(/* webpackChunkName: "md_m-quarter-select.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/m-quarter-select.html.js"), meta: {"title":"季度选择器"} }],
  ["/md/m-search-form.html", { loader: () => import(/* webpackChunkName: "md_m-search-form.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/m-search-form.html.js"), meta: {"title":"MSearchForm"} }],
  ["/md/m-table.html", { loader: () => import(/* webpackChunkName: "md_m-table.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/m-table.html.js"), meta: {"title":"MTable"} }],
  ["/md/m-tinymce.html", { loader: () => import(/* webpackChunkName: "md_m-tinymce.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/m-tinymce.html.js"), meta: {"title":"MTinymce"} }],
  ["/md/permission.html", { loader: () => import(/* webpackChunkName: "md_permission.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/permission.html.js"), meta: {"title":"权限管理"} }],
  ["/md/question.html", { loader: () => import(/* webpackChunkName: "md_question.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/question.html.js"), meta: {"title":"常见问题"} }],
  ["/md/route.html", { loader: () => import(/* webpackChunkName: "md_route.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/route.html.js"), meta: {"title":"路由、菜单"} }],
  ["/md/standard.html", { loader: () => import(/* webpackChunkName: "md_standard.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/standard.html.js"), meta: {"title":"项目代码规范"} }],
  ["/md/store.html", { loader: () => import(/* webpackChunkName: "md_store.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/store.html.js"), meta: {"title":"Store"} }],
  ["/md/tree.html", { loader: () => import(/* webpackChunkName: "md_tree.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/tree.html.js"), meta: {"title":"目录结构"} }],
  ["/md/tsx.html", { loader: () => import(/* webpackChunkName: "md_tsx.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/md/tsx.html.js"), meta: {"title":"TSX 支持"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/project/open-source/code/github/m-admin-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
