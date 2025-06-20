<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1>
<pre><code>本文将会帮助您从头搭建此项目
</code></pre>
<h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h3>
<ul>
<li>本项目推荐使用 <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a> 进行开发。</li>
<li>本地环境需要安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js 16.0+</a>、<a href="https://github.com/pnpm/pnpm" target="_blank" rel="noopener noreferrer">pnpm7.0+</a>、<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>工具等。</li>
</ul>
<h3 id="代码拉取" tabindex="-1"><a class="header-anchor" href="#代码拉取"><span>代码拉取</span></a></h3>
<p><strong>从 Gitee 上拉取</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>gitee<span class="token punctuation">.</span>com<span class="token operator">/</span>sina_xys<span class="token operator">/</span>m<span class="token operator">-</span>admin<span class="token punctuation">.</span>git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>从 Github 上拉取</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> git clone https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>sina<span class="token operator">-</span>xys<span class="token operator">-</span>felix<span class="token operator">/</span><span class="token constant">M</span><span class="token operator">-</span>Admin<span class="token punctuation">.</span>git</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用"><span>安装使用</span></a></h3>
<p><strong>安装依赖</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token comment">// 使用pnpm安装依赖</span></span>
<span class="line"> pnpm install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行项目</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token comment">// 运行项目--开发环境</span></span>
<span class="line"> pnpm dev</span>
<span class="line"> <span class="token comment">// 运行项目--生成环境</span></span>
<span class="line"> pnpm prod</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>打包项目</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token comment">// 打包项目</span></span>
<span class="line"> pnpm build<span class="token operator">:</span>prod</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工具推荐" tabindex="-1"><a class="header-anchor" href="#工具推荐"><span>工具推荐</span></a></h3>
<ul>
<li><a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">Nvm</a> --&gt; node版本管理工具</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noopener noreferrer">Volar</a> --&gt; vue3官方插件</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=hollowtree.vue-snippets" target="_blank" rel="noopener noreferrer">Vue3 Snippets</a> --&gt; vue3代码提示工具</li>
</ul>
</div></template>


