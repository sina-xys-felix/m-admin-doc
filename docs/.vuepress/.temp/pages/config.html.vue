<template><div><h1 id="系统配置" tabindex="-1"><a class="header-anchor" href="#系统配置"><span>系统配置</span></a></h1>
<ul>
<li>本项目支持全局配置，修改src/config/setting.json即可。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"theme"</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>                             ## 配置暗黑<span class="token operator">/</span>亮色模式</span>
<span class="line">  <span class="token string-property property">"colorWeak"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                           ## 色弱模式</span>
<span class="line">  <span class="token string-property property">"navbar"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                               ## 是否显示navbar</span>
<span class="line">  <span class="token string-property property">"menu"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                 ## 默认布局 </span>
<span class="line">  <span class="token string-property property">"topMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                             ## 页面布局模式 顶部布局</span>
<span class="line">  <span class="token string-property property">"darkMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                            ## 深色菜单</span>
<span class="line">  <span class="token string-property property">"hideMenu"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                            ## 是否隐藏菜单栏</span>
<span class="line">  <span class="token string-property property">"menuCollapse"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                        ## 是否收缩菜单栏</span>
<span class="line">  <span class="token string-property property">"footer"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                               ## 是否显示footer</span>
<span class="line">  <span class="token string-property property">"themeColor"</span><span class="token operator">:</span> <span class="token string">"#001529"</span><span class="token punctuation">,</span>                      ## 主题色</span>
<span class="line">  <span class="token string-property property">"menuWidth"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>                             ## 菜单拦默认宽度，topMenu为<span class="token boolean">false</span>有效</span>
<span class="line">  <span class="token string-property property">"globalSettings"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                      ## 全局设置</span>
<span class="line">  <span class="token string-property property">"tabBar"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                               ## tabBar是否显示</span>
<span class="line">  <span class="token string-property property">"menuFromServer"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>                      ## 菜单是否由后端提供</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


