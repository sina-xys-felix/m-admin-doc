<template><div><h1 id="国际化配置" tabindex="-1"><a class="header-anchor" href="#国际化配置"><span>国际化配置</span></a></h1>
<p>本项目集成了 Vue i18n,页面加载时会自动转换为对应的语言。</p>
<p><strong>语言包定义</strong></p>
<p>本项目目前支持两种语言包类型，使用时需要手动导入。</p>
<ul>
<li>公用语言包，存在在<span style="color:#165DFF">src/locale</span>目录下。</li>
<li>页面语言包，当度存放在对应页面目录下，使用时需将 locale 在<span style="color:#165DFF">src/locale</span>对应文件中引入。</li>
</ul>
<p><strong>语言包配置示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"settings.title"</span><span class="token operator">:</span> <span class="token string">"页面配置"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"settings.themeColor"</span><span class="token operator">:</span> <span class="token string">"主题色"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"settings.layout"</span><span class="token operator">:</span> <span class="token string">"系统布局"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"settings.content"</span><span class="token operator">:</span> <span class="token string">"内容区域"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"settings.search"</span><span class="token operator">:</span> <span class="token string">"搜索"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用</strong></p>
<ul>
<li>在 html 中使用，使用 vue 自带的<span style="color:#165DFF"> $t </span>。</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code class="language-vue"><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{$t('settings.search')}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>在script中使用,手动引入 Vue i18n ，拿到 i18n 对象后，就可以使用 i18n 对象的 t 方法来获取。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> i18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">i18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">'settings.search'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>插件推荐</strong></p>
<p><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noopener noreferrer">i18n Ally</a></p>
</div></template>


