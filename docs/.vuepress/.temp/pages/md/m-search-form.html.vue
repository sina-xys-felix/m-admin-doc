<template><div><h1 id="msearchform" tabindex="-1"><a class="header-anchor" href="#msearchform"><span>MSearchForm</span></a></h1>
<p>MForm 是基于<a href="https://arco.design/vue/docs/start" target="_blank" rel="noopener noreferrer">arco-design-vue</a>的date-picker进行二次封装的组件，
由于原生组件面板显示内容为Q1,Q2,Q3,Q4,针对该现象就行二次封装。</p>
<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>
<p><strong>使用示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">     <span class="token operator">&lt;</span>MSearchForm</span>
<span class="line">        ref<span class="token operator">=</span><span class="token string">"MSearchFormRef"</span></span>
<span class="line">        <span class="token operator">:</span>search<span class="token operator">-</span>columns<span class="token operator">=</span><span class="token string">"searchColumns"</span></span>
<span class="line">        <span class="token operator">:</span>search<span class="token operator">-</span>param<span class="token operator">=</span><span class="token string">"formData"</span></span>
<span class="line">        <span class="token operator">:</span>show<span class="token operator">-</span>expand<span class="token operator">=</span><span class="token string">"false"</span></span>
<span class="line">        <span class="token operator">:</span>search<span class="token operator">=</span><span class="token string">"onSearch"</span></span>
<span class="line">        <span class="token operator">:</span>reset<span class="token operator">=</span><span class="token string">"onReset"</span></span>
<span class="line">    <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> MSearchForm <span class="token keyword">from</span> <span class="token string">'@/components/m-search-form/index.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> MSearchFormRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> MSearchForm<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nation</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> searchColumns <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span> <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'性别'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'gender'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">searchParam</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>MDict</span>
<span class="line">              v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token punctuation">{</span>searchParam<span class="token punctuation">.</span>modelValue<span class="token punctuation">}</span></span>
<span class="line">              code<span class="token operator">=</span><span class="token punctuation">{</span>DictEnum<span class="token punctuation">.</span><span class="token constant">GENDER</span><span class="token punctuation">}</span></span>
<span class="line">              allowClear<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">              placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'请选择性别'</span><span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'民族'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">dataIndex</span><span class="token operator">:</span> <span class="token string">'nationText'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'nation'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">searchParam</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token operator">&lt;</span>MDict</span>
<span class="line">              v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token punctuation">{</span>searchParam<span class="token punctuation">.</span>modelValue<span class="token punctuation">}</span></span>
<span class="line">              code<span class="token operator">=</span><span class="token punctuation">{</span>DictEnum<span class="token punctuation">.</span><span class="token constant">NATION</span><span class="token punctuation">}</span></span>
<span class="line">              allowClear<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
<span class="line">              placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'请选择民族'</span><span class="token punctuation">}</span></span>
<span class="line">            <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">          <span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">onSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> param <span class="token operator">=</span> MSearchFormRef<span class="token punctuation">.</span>value<span class="token operator">?.</span>searchParam</span>
<span class="line">    Message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">查询参数：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">onReset</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    Message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">重置参数：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>MSearchFormRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>searchParam<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Props</strong></p>
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
                <td>searchColumns</td>
                <td class="type">ColumnProps[]</td>
                <td>搜索列，用来加载搜索列的内容</td>
                <td>[]</td>
            </tr>
            <tr>
                <td>searchParam</td>
                <td class="type">{ [key: string]: any } </td>
                <td>搜索配置项,即 搜索列的各个属性初始值</td>
                <td class="default">{}</td>
            </tr>
            <tr>
                <td>search</td>
                <td class="type">--</td>
                <td>搜索方法</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>reset</td>
                <td class="type">--</td>
                <td>重置方法</td>
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
                <td>changeExpand</td>
                <td class="type">当条件过多时触发</td>
                <td>value:boolean</td>
            </tr>
        </tbody>
    </table>
</div></template>


