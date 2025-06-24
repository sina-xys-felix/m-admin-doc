import{_ as n,c as a,a as e,o as l}from"./app-4VnUKRq4.js";const i={};function p(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="项目代码规范" tabindex="-1"><a class="header-anchor" href="#项目代码规范"><span>项目代码规范</span></a></h1><h4 id="全局组件-命名规范" tabindex="-1"><a class="header-anchor" href="#全局组件-命名规范"><span>全局组件--命名规范</span></a></h4><p>组件命名：<strong>单文件组件的文件名以m开头，并以横线连接 (kebab-case)</strong></p><p>可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">m-table</span>
<span class="line">m-form</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="局部组件-命名规范" tabindex="-1"><a class="header-anchor" href="#局部组件-命名规范"><span>局部组件--命名规范</span></a></h4><p>组件命名：<strong>单文件组件的文件名以横线连接 (kebab-case)</strong></p><p>可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">add-modal</span>
<span class="line">user-detailed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="文件夹命名-命名规范-采用中划线" tabindex="-1"><a class="header-anchor" href="#文件夹命名-命名规范-采用中划线"><span>文件夹命名--命名规范 (采用中划线-)</span></a></h4><p>1、文件名建议只使用小写字母，不使用大写字母</p><p>2、名称较长时采用半角连接符(-)分隔</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">home/index.vue</span>
<span class="line">user/index.vue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code class="language-vue"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> setLoading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css-命名规范" tabindex="-1"><a class="header-anchor" href="#css-命名规范"><span>CSS 命名规范</span></a></h4><p>建议采用全小写，多单词使用-连接符(参考大部分网站，包括掘金，码云等，都是采用这个规则)</p><p>或者采用<code>BEM</code>命名规范 <a href="https://getbem.com/naming/" target="_blank" rel="noopener noreferrer">BEM 命名规范</a></p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">// 推荐</span>
<span class="line">.header</span>
<span class="line">.footer</span>
<span class="line">.main</span>
<span class="line">.content</span>
<span class="line">.container</span>
<span class="line">.page</span>
<span class="line">.detail</span>
<span class="line">.list</span>
<span class="line">.list-item</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">// 不推荐</span>
<span class="line">.Header</span>
<span class="line">.listItem</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code class="language-less"><span class="line"><span class="token selector">.list</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span>8px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token selector">&amp;-item</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector">&amp;__value</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局-less-变量-命名规范" tabindex="-1"><a class="header-anchor" href="#全局-less-变量-命名规范"><span>全局 less 变量-命名规范</span></a></h4><div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre><code class="language-less"><span class="line">$<span class="token variable">@size-none<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@width-full<span class="token punctuation">:</span></span> 100%<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@width-half<span class="token punctuation">:</span></span>50%<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@gap-sm<span class="token punctuation">:</span></span> 10px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@gap-md<span class="token punctuation">:</span></span> 16px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@gap-24<span class="token punctuation">:</span></span> 24px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-size-sm<span class="token punctuation">:</span></span> 14px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-size-md<span class="token punctuation">:</span></span> 16px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-size-lg<span class="token punctuation">:</span></span> 18px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-size-xl<span class="token punctuation">:</span></span> 20px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-size-xxl<span class="token punctuation">:</span></span> 24px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@background-color<span class="token punctuation">:</span></span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">-</span>custom<span class="token operator">-</span>background<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@table-header-color<span class="token punctuation">:</span></span>  <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">-</span>custom<span class="token operator">-</span>header<span class="token operator">-</span>th<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@modal-header-color<span class="token punctuation">:</span></span> <span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">-</span>custom<span class="token operator">-</span>modal<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@border-color<span class="token punctuation">:</span></span><span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">-</span>neutral<span class="token operator">-</span>3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@text-color<span class="token punctuation">:</span></span><span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token operator">-</span>color<span class="token operator">-</span>text<span class="token operator">-</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">@font-weight-600<span class="token punctuation">:</span></span> 600<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css-的命名词汇" tabindex="-1"><a class="header-anchor" href="#css-的命名词汇"><span>CSS 的命名词汇</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">前一个    prev</span>
<span class="line">后一个    next</span>
<span class="line">当前的    current</span>
<span class="line"></span>
<span class="line">显示的    show</span>
<span class="line">隐藏的    hide</span>
<span class="line">打开的    open</span>
<span class="line">关闭的    close</span>
<span class="line"></span>
<span class="line">选中的    selected</span>
<span class="line">有效的    active</span>
<span class="line">默认的    default</span>
<span class="line">反转的    toggle</span>
<span class="line"></span>
<span class="line">禁用的    disabled</span>
<span class="line">危险的    danger</span>
<span class="line">主要的    primary</span>
<span class="line">成功的    success</span>
<span class="line">提醒的    info</span>
<span class="line">警告的    warning</span>
<span class="line">出错的    error</span>
<span class="line"></span>
<span class="line">大型的    lg</span>
<span class="line">小型的    sm</span>
<span class="line">超小的    xs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">文档    doc</span>
<span class="line">头部    <span class="token function">header</span><span class="token punctuation">(</span>hd<span class="token punctuation">)</span></span>
<span class="line">主体    body</span>
<span class="line">尾部    <span class="token function">footer</span><span class="token punctuation">(</span>ft<span class="token punctuation">)</span></span>
<span class="line">主栏    main</span>
<span class="line">侧栏    side</span>
<span class="line">容器    box/container</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">列表    list</span>
<span class="line">列表项  item</span>
<span class="line">表格    table</span>
<span class="line">表单    form</span>
<span class="line">链接    link</span>
<span class="line">标题    caption/heading/title</span>
<span class="line">菜单    menu</span>
<span class="line">集合    group</span>
<span class="line">条      bar</span>
<span class="line">内容    content</span>
<span class="line">结果    result</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">按钮        <span class="token function">button</span><span class="token punctuation">(</span>btn<span class="token punctuation">)</span></span>
<span class="line">下拉菜单    dropdown</span>
<span class="line">工具栏      toolbar</span>
<span class="line">分页        page</span>
<span class="line">缩略图      thumbnail</span>
<span class="line">警告框      alert</span>
<span class="line">进度条      progress</span>
<span class="line">导航条      navbar</span>
<span class="line">导航        nav</span>
<span class="line">子导航      subnav</span>
<span class="line">面包屑      <span class="token function">breadcrumb</span><span class="token punctuation">(</span>crumb<span class="token punctuation">)</span></span>
<span class="line">标签        label</span>
<span class="line">徽章        badge</span>
<span class="line">巨幕        jumbotron</span>
<span class="line">面板        panel</span>
<span class="line">洼地        well</span>
<span class="line">标签页      tab</span>
<span class="line">提示框      tooltip</span>
<span class="line">弹出框      popover</span>
<span class="line">轮播图      carousel</span>
<span class="line">手风琴      collapse</span>
<span class="line">定位浮标    affix</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">品牌        brand</span>
<span class="line">标志        logo</span>
<span class="line">额外部件    addon</span>
<span class="line">版权        copyright</span>
<span class="line">注册        <span class="token function">regist</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span></span>
<span class="line">登录        login</span>
<span class="line">搜索        search</span>
<span class="line">热点        hot</span>
<span class="line">帮助        help</span>
<span class="line">信息        info</span>
<span class="line">提示        tips</span>
<span class="line">开关        toggle</span>
<span class="line">新闻        news</span>
<span class="line">广告        <span class="token function">advertise</span><span class="token punctuation">(</span>ad<span class="token punctuation">)</span></span>
<span class="line">排行        top</span>
<span class="line">下载        download</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line">左浮动    fl</span>
<span class="line">右浮动    fr</span>
<span class="line">清浮动    clear</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他规范" tabindex="-1"><a class="header-anchor" href="#其他规范"><span>其他规范</span></a></h4><p>可参考 Vue2 官网-风格指南: https://v2.cn.vuejs.org/v2/style-guide/</p>`,30)]))}const d=n(i,[["render",p]]),r=JSON.parse('{"path":"/md/standard.html","title":"项目代码规范","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1750391629000,"contributors":[{"name":"xuyp","username":"xuyp","email":"xuyp@iynss.com","commits":1,"url":"https://github.com/xuyp"}],"changelog":[{"hash":"8d52c7e54f2c779d9847b408283db6e35f98632b","time":1750391629000,"email":"xuyp@iynss.com","author":"xuyp","message":"feat: 更新文档"}]},"filePathRelative":"md/standard.md"}');export{d as comp,r as data};
