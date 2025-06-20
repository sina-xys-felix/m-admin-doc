
# 项目代码规范

#### 全局组件--命名规范

组件命名：**单文件组件的文件名以m开头，并以横线连接 (kebab-case)**

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/

```
m-table
m-form
```

#### 局部组件--命名规范

组件命名：**单文件组件的文件名以横线连接 (kebab-case)**

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/

```
add-modal
user-detailed
```

#### 文件夹命名--命名规范 (采用中划线-)

1、文件名建议只使用小写字母，不使用大写字母

2、名称较长时采用半角连接符(-)分隔

```
home/index.vue
user/index.vue
```

```vue
<script setup lang="ts">
import { useLoading } from '@/hooks'

const { loading, setLoading } = useLoading()
</script>
```

#### CSS 命名规范

建议采用全小写，多单词使用-连接符(参考大部分网站，包括掘金，码云等，都是采用这个规则)

或者采用`BEM`命名规范 [BEM 命名规范](https://getbem.com/naming/)

```css
// 推荐
.header
.footer
.main
.content
.container
.page
.detail
.list
.list-item


// 不推荐
.Header
.listItem
```

```less
.list {
  padding:8px;
  &-item {
    padding: 20px;
    &__value{
        font-size:20px;
    }
  }
}
```

#### 全局 less 变量-命名规范

```less
$@size-none: 0;

@width-full: 100%;

@width-half:50%;

@gap-sm: 10px;

@gap-md: 16px;

@gap-24: 24px;

@font-size-sm: 14px;

@font-size-md: 16px;

@font-size-lg: 18px;

@font-size-xl: 20px;

@font-size-xxl: 24px;

@background-color: var(--color-custom-background);

@table-header-color:  var(--color-custom-header-th);

@modal-header-color: var(--color-custom-modal);

@border-color:var(--color-neutral-3);

@text-color:var(--color-text-1);

@font-weight-600: 600;
```

#### CSS 的命名词汇

```css
前一个    prev
后一个    next
当前的    current

显示的    show
隐藏的    hide
打开的    open
关闭的    close

选中的    selected
有效的    active
默认的    default
反转的    toggle

禁用的    disabled
危险的    danger
主要的    primary
成功的    success
提醒的    info
警告的    warning
出错的    error

大型的    lg
小型的    sm
超小的    xs
```

```css
文档    doc
头部    header(hd)
主体    body
尾部    footer(ft)
主栏    main
侧栏    side
容器    box/container
```

```css
列表    list
列表项  item
表格    table
表单    form
链接    link
标题    caption/heading/title
菜单    menu
集合    group
条      bar
内容    content
结果    result
```

```css
按钮        button(btn)
下拉菜单    dropdown
工具栏      toolbar
分页        page
缩略图      thumbnail
警告框      alert
进度条      progress
导航条      navbar
导航        nav
子导航      subnav
面包屑      breadcrumb(crumb)
标签        label
徽章        badge
巨幕        jumbotron
面板        panel
洼地        well
标签页      tab
提示框      tooltip
弹出框      popover
轮播图      carousel
手风琴      collapse
定位浮标    affix
```

```css
品牌        brand
标志        logo
额外部件    addon
版权        copyright
注册        regist(reg)
登录        login
搜索        search
热点        hot
帮助        help
信息        info
提示        tips
开关        toggle
新闻        news
广告        advertise(ad)
排行        top
下载        download
```

```css
左浮动    fl
右浮动    fr
清浮动    clear
```

#### 其他规范

可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/