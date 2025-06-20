# 目录结构

**M-Admin 目录结构说明**

```js
M-Admin
├─ config                       ## Vite配置
├─ public                       ## 静态资源文件 
├─ src                          
│  ├─ api                       ## API接口管理
│  ├─ assets                    ## 静态资源文件
│  ├─ common                    ## 公共常量
│  ├─ components                ## 项目组件
│  ├─ config                    ## 项目全局配置
│  ├─ directive                 ## 自定义指令
│  ├─ hooks                     ## 常用 hooks
│  ├─ layout                    ## 项目布局文件
│  ├─ locale                    ## 国际化配置
│  ├─ mock                      ## mock 接口
│  ├─ router                    ## router 路由管理
│  ├─ store                     ## Pinia Store
│  ├─ types                     ## 项目全局types
│  ├─ utils                     ## 常用工具类
│  ├─ views                     ## 页面
│  ├─ App.vue                   ## 项目主文件
│  ├─ env.d.ts                  ## 指定ts 识别
│  └─ main.ts                   ## 项目入口文件
├─ .env.development             ## 开发环境配置
├─ .env.production              ## 生产环境配置
├─ .eslintignore                ## 忽略 EsLint 配置 
├─ .eslintrc.js                 ## Eslint 校验配置文件 
├─ .gitignore                   ## 忽略 Git 配置
├─ .prettierignore              ## 忽略 Prettier 格式化
├─ .prettierrc.js               ## Prettier 格式化配置
├─ .stylelintrc.js              ## Stylelint 样式格式化配置
├─ auto-imports.d.ts            ## auto-imports 自动导入配置
├─ babel.config.js              ## babel 配置
├─ commitlint.config.js         ## Git 提交规范
├─ index.html                   ## 入口html
├─ package.json                 ## 项目依赖包管理
├─ README.md                    ## README 介绍
└─ tsconfig.json                ## TypeScript 配置

```
