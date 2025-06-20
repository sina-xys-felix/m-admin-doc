<template><div><h1 id="季度选择器" tabindex="-1"><a class="header-anchor" href="#季度选择器"><span>季度选择器</span></a></h1>
<p>MForm 是基于<a href="https://arco.design/vue/docs/start" target="_blank" rel="noopener noreferrer">arco-design-vue</a>的date-picker进行二次封装的组件，
由于原生组件面板显示内容为Q1,Q2,Q3,Q4,针对该现象就行二次封装。</p>
<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>
<p><strong>使用示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>MQuarterSelect v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"quarter"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> MQuarterSelect <span class="token keyword">from</span> <span class="token string">'@/components/m-quarter-select/index.vue'</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> quarter <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Props</strong></p>
<table style="width:100%;margin-bottom:40px">
        <thead>
            <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>描述</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>modelValue</td>
                <td class="type">string | number</td>
                <td>绑定值</td>
                <td>--</td>
            </tr>
            <tr>
                <td>modelValue</td>
                <td class="type">string</td>
                <td>绑定值</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td class="type">string</td>
                <td>提示文字</td>
                <td class="default">--</td>
            </tr>
        </tbody>
    </table>
<p><strong>Event</strong></p>
<table style="width:100%;margin-bottom:40px">
        <thead>
            <tr>
                <th>方法名</th>
                <th>描述</th>
                <th>参数</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>change</td>
                <td class="type">绑定值改变时触发</td>
                <td>value:string</td>
            </tr>
        </tbody>
    </table>
</div></template>


