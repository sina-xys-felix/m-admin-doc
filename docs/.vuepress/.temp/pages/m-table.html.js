import comp from "D:/project/open-source/code/docs/docs/.vuepress/.temp/pages/m-table.html.vue";
const data = JSON.parse(
  '{"path":"/m-table.html","title":"","lang":"zh-CN","frontmatter":{"layout":"mtable"},"git":{},"filePathRelative":null}'
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
