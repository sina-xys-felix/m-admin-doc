# 系统配置

- 本项目支持全局配置，修改src/config/setting.json即可。

```js

{
  "theme": "light",                             ## 配置暗黑/亮色模式
  "colorWeak": false,                           ## 色弱模式
  "navbar": true,                               ## 是否显示navbar
  "menu": true,                                 ## 默认布局 
  "topMenu": false,                             ## 页面布局模式 顶部布局
  "darkMenu": false,                            ## 深色菜单
  "hideMenu": false,                            ## 是否隐藏菜单栏
  "menuCollapse": false,                        ## 是否收缩菜单栏
  "footer": true,                               ## 是否显示footer
  "themeColor": "#001529",                      ## 主题色
  "menuWidth": 200,                             ## 菜单拦默认宽度，topMenu为false有效
  "globalSettings": false,                      ## 全局设置
  "tabBar": true,                               ## tabBar是否显示
  "menuFromServer": false,                      ## 菜单是否由后端提供
}


```