import { GitContributors } from "D:/project/open-source/code/github/m-admin-doc/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@ty_can4nboitwtqwhlgncgj4zvdrq/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/project/open-source/code/github/m-admin-doc/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@ty_can4nboitwtqwhlgncgj4zvdrq/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
