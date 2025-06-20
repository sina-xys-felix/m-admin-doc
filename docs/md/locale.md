# 国际化配置

本项目集成了 Vue i18n,页面加载时会自动转换为对应的语言。

**语言包定义**

本项目目前支持两种语言包类型，使用时需要手动导入。

- 公用语言包，存在在<span style="color:#165DFF">src/locale</span>目录下。
- 页面语言包，当度存放在对应页面目录下，使用时需将 locale 在<span style="color:#165DFF">src/locale</span>对应文件中引入。

**语言包配置示例**

```js
export default {
  "settings.title": "页面配置",
  "settings.themeColor": "主题色",
  "settings.layout": "系统布局",
  "settings.content": "内容区域",
  "settings.search": "搜索",
};
```

**使用**

- 在 html 中使用，使用 vue 自带的<span style="color:#165DFF"> $t </span>。
```vue 
    <div>{{$t('settings.search')}}</div>
```
- 在script中使用,手动引入 Vue i18n ，拿到 i18n 对象后，就可以使用 i18n 对象的 t 方法来获取。
```js 
import { i18n } from 'vue-i18n'

const { t } = i18n()

console.log(t('settings.search'))

```

**插件推荐**

[i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)
