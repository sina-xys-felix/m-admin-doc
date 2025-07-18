<template><div><h1 id="路由、菜单" tabindex="-1"><a class="header-anchor" href="#路由、菜单"><span>路由、菜单</span></a></h1>
<p>路由配置存放在 src/router 文件夹下面：</p>
<div style=" 
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p>温馨提示：</p>
    <ul>
        <li>如若该项目路由配置不符合需求，路由功能根据自己项目需求改造。</li>
    </ul>
</div>
<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">router</span>
<span class="line">├─ app<span class="token operator">-</span>menus                            ## 项目路由</span>
<span class="line">│  └─ index<span class="token punctuation">.</span>ts</span>
<span class="line">├─ guard</span>
<span class="line">│  ├─ index<span class="token punctuation">.</span>ts</span>
<span class="line">│  ├─ permission<span class="token punctuation">.</span>ts                     ## 路由权限配置</span>
<span class="line">│  └─ userLoginInfo<span class="token punctuation">.</span>ts                  ## 路由切换配置</span>
<span class="line">├─ locale                               ## 国际化配置</span>
<span class="line">│  ├─ en<span class="token operator">-</span><span class="token constant">US</span><span class="token punctuation">.</span>ts</span>
<span class="line">│  └─ zh<span class="token operator">-</span><span class="token constant">CN</span><span class="token punctuation">.</span>ts</span>
<span class="line">├─ routes</span>
<span class="line">│  ├─ externalModules                   ## 路由外链配置</span>
<span class="line">│  │  └─ faq<span class="token punctuation">.</span>ts</span>
<span class="line">│  ├─ modules                           ## 路由配置</span>
<span class="line">│  │  ├─ components<span class="token punctuation">.</span>ts</span>
<span class="line">│  │  ├─ dashboard<span class="token punctuation">.</span>ts</span>
<span class="line">│  │  ├─ document<span class="token punctuation">.</span>ts</span>
<span class="line">│  │  └─ system<span class="token punctuation">.</span>ts</span>
<span class="line">│  ├─ base<span class="token punctuation">.</span>ts                           ## 路由<span class="token operator">--</span>重定向</span>
<span class="line">│  ├─ index<span class="token punctuation">.</span>ts                          ## 项目中使用的路由引用</span>
<span class="line">│  └─ types<span class="token punctuation">.</span>ts</span>
<span class="line">├─ constants<span class="token punctuation">.</span>ts                         ## 白名单配置</span>
<span class="line">├─ index<span class="token punctuation">.</span>ts                             ## 公用路由配置，如login等</span>
<span class="line">└─ typings<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts                         ## 自定义RouteMeta</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数"><span>路由参数</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/** 路由参数简介 */</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">RouteRecordRaw</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 路由访问路径</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 &amp;&amp; 按钮权限筛选)</span></span>
<span class="line">  <span class="token literal-property property">redirect</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// 路由重定向地址</span></span>
<span class="line">  <span class="token literal-property property">component</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token operator">&lt;</span>unknown<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 视图文件路径</span></span>
<span class="line">  <span class="token doc-comment comment">/** 路由元信息 */</span></span>
<span class="line">  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token comment">// ID,用来做菜单权限校验</span></span>
<span class="line">    <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> boolean <span class="token comment">// 是否需要对该路由进行权限配置</span></span>
<span class="line">    icon<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// arco-icon 图标配置</span></span>
<span class="line">    remix<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// remix-icon 图标配置</span></span>
<span class="line">    locale<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// 国际化配置</span></span>
<span class="line">    hideInMenu<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 是否隐藏菜单</span></span>
<span class="line">    hideChildrenInMenu<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 是否隐藏二级菜单</span></span>
<span class="line">    activeMenu<span class="token operator">?</span><span class="token operator">:</span> string <span class="token comment">// 激活的菜单Name</span></span>
<span class="line">    order<span class="token operator">?</span><span class="token operator">:</span> number <span class="token comment">// 排序</span></span>
<span class="line">    noAffix<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 是否需要再tabbar上展示</span></span>
<span class="line">    ignoreCache<span class="token operator">?</span><span class="token operator">:</span> boolean <span class="token comment">// 缓存忽略配置</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token doc-comment comment">/** 多级路由嵌套 */</span></span>
<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新增路由</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home/index'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">'/home/index'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'menu.home'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>二级路由</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'dashboard'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token constant">DEFAULT_LAYOUT</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'menu.home'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'welcome'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Welcome'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/dashboard/welcome/index.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'menu.dashboard.welcome'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'face-smile-fill'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'1201'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>菜单</strong></p>
<ul>
<li>本项目路由由前端存储，后端返回对应的 MeunId 即可。</li>
</ul>
<div style="
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p> Tip: </p>
    <p> 生成环境实际使用可根据项目需要进行调整。 </p>
  </div>
<p><strong>utils</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@description</span> 根据后台返回的ids，来判断路由菜单的显示</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">list</span> 所有的静态路由  ServerRouteRecordRaw</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">menuIds</span> 后端返回的路由ids</span>
<span class="line"> * */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> getRoutes <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token literal-property property">list</span><span class="token operator">:</span> ServerRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">menuIds</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ServerRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>menuIds <span class="token operator">&amp;&amp;</span> menuIds<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> menuIds<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">"0"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> list<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token literal-property property">fixedRoutes</span><span class="token operator">:</span> ServerRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token literal-property property">allRoutes</span><span class="token operator">:</span> ServerRouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> router <span class="token keyword">of</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> <span class="token punctuation">{</span> requiresAuth<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> router<span class="token punctuation">;</span> <span class="token comment">// 解构需要的部分</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 如果路由元信息中requiresAuth为false，则该路由不需要验证，将其添加到fixedRoutes中</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>requiresAuth <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        fixedRoutes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 如果路由元信息中requiresAuth为true或者没有定义requiresAuth，并且meta.id存在于menuIds中，则该路由需要进行验证</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>requiresAuth <span class="token operator">===</span> <span class="token boolean">true</span> <span class="token operator">||</span> menuIds<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>rest<span class="token punctuation">.</span>meta<span class="token operator">?.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 如果router有子路由，则递归处理子路由</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>rest<span class="token punctuation">.</span>children<span class="token punctuation">)</span> rest<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">getRoutes</span><span class="token punctuation">(</span>rest<span class="token punctuation">.</span>children<span class="token punctuation">,</span> menuIds<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        allRoutes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>fixedRoutes<span class="token punctuation">,</span> <span class="token operator">...</span>allRoutes<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


