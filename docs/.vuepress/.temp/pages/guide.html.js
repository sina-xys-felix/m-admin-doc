import comp from "D:/project/open-source/code/docs/docs/.vuepress/.temp/pages/guide.html.vue";
const data = JSON.parse(
  '{"path":"/guide.html","title":"指南","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1749712045000,"contributors":[{"name":"xuyp","username":"","email":"xuyp@iynss.com","commits":1}],"changelog":[{"hash":"54afeecbc29825330cf42d97273aeb7377754351","time":1749712045000,"email":"xuyp@iynss.com","author":"xuyp","message":"init"}]},"filePathRelative":"get-started.md"}'
);
export { comp, data };

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
