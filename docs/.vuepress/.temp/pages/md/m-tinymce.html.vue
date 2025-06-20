<template><div><h1 id="mtinymce" tabindex="-1"><a class="header-anchor" href="#mtinymce"><span>MTinymce</span></a></h1>
<p>MTinymce 是基于<a href="https://note.qscoding.com/guide/vue3-tinymce.html" target="_blank" rel="noopener noreferrer">@jsdawn/vue3-tinymce</a>进行二次封装的组件，
支持所有原生参数、事件、插槽，节省了重复造轮子的时间。</p>
<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>
<p><strong>使用示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>MTinymce v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"editor"</span> <span class="token operator">:</span>height<span class="token operator">=</span><span class="token string">"400"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> MTinymce <span class="token keyword">from</span> <span class="token string">'@/components/m-tinymce/index.vue'</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TinymceProps</strong></p>
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
                <td>height</td>
                <td class="type">number</td>
                <td>编辑器默认初始高度</td>
                <td>400</td>
            </tr>
            <tr>
                <td>modelValue</td>
                <td class="type">string</td>
                <td>绑定值</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>menubar</td>
                <td class="type">boolean</td>
                <td>是否需要菜单栏</td>
                <td class="default">true</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td class="type">boolean</td>
                <td>是否禁用</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>imagesUploadApi</td>
                <td class="type">string</td>
                <td>图片上传的url</td>
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
                <td class="type">编辑器输入时触发</td>
                <td>value:string</td>
            </tr>
        </tbody>
    </table>
</div></template>


