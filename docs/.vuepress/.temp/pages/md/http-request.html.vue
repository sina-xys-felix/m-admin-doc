<template><div><h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求"><span>网络请求</span></a></h1>
<ul>
<li>项目封装了 Axios 来做网络请求，包括请求错误处理、请求重试等功能。</li>
<li>可以根据实际使用需求进行封装。</li>
</ul>
<p><strong>目录结构</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line">request</span>
<span class="line">├─ axios<span class="token operator">-</span>cancel<span class="token punctuation">.</span>ts                  ## axios 取消请求封装</span>
<span class="line">├─ axios<span class="token operator">-</span>service<span class="token punctuation">.</span>ts                 ## axios 请求service</span>
<span class="line">├─ axios<span class="token operator">-</span>transform<span class="token punctuation">.</span>ts               ## axios 抽象类</span>
<span class="line">├─ index<span class="token punctuation">.</span>ts                         ## 请求配置</span>
<span class="line">├─ type<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts</span>
<span class="line">└─ utils<span class="token punctuation">.</span>ts                         ## utils</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createAxios</span><span class="token punctuation">(</span><span class="token parameter">opt<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>CreateAxiosOptions<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">VAxios</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token function">merge</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token operator">&lt;</span>CreateAxiosOptions<span class="token operator">></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 请求头,根据实际需求来确定是否需要请求头</span></span>
<span class="line">        <span class="token literal-property property">authenticationScheme</span><span class="token operator">:</span> <span class="token string">"saToken"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token comment">/* // authenticationScheme: '', */</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 超时 时间，默认为10s</span></span>
<span class="line">        <span class="token literal-property property">timeout</span><span class="token operator">:</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">TIMEOUT</span> <span class="token keyword">as</span> number<span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 携带Cookie</span></span>
<span class="line">        <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 头信息</span></span>
<span class="line">        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> ContentTypeEnum<span class="token punctuation">.</span><span class="token constant">JSON</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 数据处理方式</span></span>
<span class="line">        transform<span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 配置项，下面的选项都可以在独立的接口请求中覆盖</span></span>
<span class="line">        <span class="token literal-property property">requestOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 接口地址</span></span>
<span class="line">          <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_API_BASE_URL</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 是否自动添加接口前缀</span></span>
<span class="line">          <span class="token literal-property property">isJoinPrefix</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 接口前缀</span></span>
<span class="line">          <span class="token literal-property property">urlPrefix</span><span class="token operator">:</span> <span class="token string">'/api'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 是否返回原生响应头 比如：需要获取响应头时使用该属性</span></span>
<span class="line">          <span class="token literal-property property">isReturnNativeResponse</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 需要对返回数据进行处理</span></span>
<span class="line">          <span class="token literal-property property">isTransformResponse</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// post请求的时候添加参数到url</span></span>
<span class="line">          <span class="token literal-property property">joinParamsToUrl</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 格式化提交参数时间</span></span>
<span class="line">          <span class="token literal-property property">formatDate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 是否加入时间戳</span></span>
<span class="line">          <span class="token literal-property property">joinTime</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 忽略重复请求</span></span>
<span class="line">          <span class="token literal-property property">ignoreRepeatRequest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 是否携带token</span></span>
<span class="line">          <span class="token literal-property property">withToken</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token comment">// 重试</span></span>
<span class="line">          <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      opt <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p> 提示: </p>
    <p> apiUrl是通过环境变量加载的，可以通过项目根目录下的.env.***文件中修改VITE_API_BASE_URL，而不是在此处直接修改 </p>
</div>
<p><strong>请求拦截</strong></p>
<p>请求拦截：可以在此处对请求头进行设置等操作。
代码位置：index.ts 110 行</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token comment">// 请求拦截器处理，设置请求头</span></span>
<span class="line">    <span class="token function-variable function">requestInterceptors</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">config</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">options</span><span class="token operator">:</span> any</span> <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 请求之前处理config</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token operator">?.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'/user/login'</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'不需要进行请求头设置'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config <span class="token keyword">as</span> Recordable<span class="token punctuation">)</span><span class="token operator">?.</span>requestOptions<span class="token operator">?.</span>withToken <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">(</span>config <span class="token keyword">as</span> Recordable<span class="token punctuation">)</span><span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'token'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> config <span class="token keyword">as</span> InternalAxiosRequestConfig</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>相应拦截</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token comment">// 响应拦截器处理，根据返回的code再进行处理，用来处理业务异常</span></span>
<span class="line">  <span class="token function-variable function">responseInterceptors</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">res</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token operator">?.</span>status <span class="token operator">!==</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'网络错误！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 请求成功</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token operator">?.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">SUCCESS</span> <span class="token operator">&amp;&amp;</span> res<span class="token operator">?.</span>status <span class="token operator">===</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> res</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 请求文件成功</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>res<span class="token operator">?.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'undefined'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> res<span class="token operator">?.</span>data <span class="token operator">&amp;&amp;</span> res<span class="token operator">?.</span>status <span class="token operator">===</span> ResultEnum<span class="token punctuation">.</span><span class="token constant">SUCCESS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> res</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 请求报错</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token operator">?.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>router<span class="token punctuation">)</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">else</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/login'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 响应错误处理，根据后端返回错误码进行响应,TODO</span></span>
<span class="line">  <span class="token function-variable function">responseInterceptorsCatch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> config<span class="token punctuation">,</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> error</span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>config <span class="token operator">||</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>requestOptions<span class="token punctuation">.</span>retry<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">content</span><span class="token operator">:</span> response<span class="token operator">?.</span>message<span class="token punctuation">,</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 接口请求重试</span></span>
<span class="line">    config<span class="token punctuation">.</span>retryCount <span class="token operator">=</span> config<span class="token punctuation">.</span>retryCount <span class="token operator">||</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>retryCount <span class="token operator">>=</span> config<span class="token punctuation">.</span>requestOptions<span class="token punctuation">.</span>retry<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    config<span class="token punctuation">.</span>retryCount <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> backoff <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>requestOptions<span class="token punctuation">.</span>retry<span class="token punctuation">.</span>delay <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    config<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">,</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> ContentTypeEnum<span class="token punctuation">.</span><span class="token constant">JSON</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> backoff<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> request<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在获取接口相应后，如果失败会进行重试操作，重试次数自行配置。</li>
<li>请求成功后，会根据返回的 code 做处理，具体根据项目需求进行配置。</li>
</ul>
<p><strong>示例</strong></p>
<ul>
<li>1.在 src/api 下创建文件 login.ts</li>
<li>2.在 login.ts 中引入封装后的 request</li>
<li>3.编写请求函数</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/request'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/utils/request/type'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LoginData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@name</span> 登录模块</span>
<span class="line"> * */</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Api <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">'/user/login'</span><span class="token punctuation">,</span> <span class="token comment">// 登录</span></span>
<span class="line">  <span class="token literal-property property">logout</span><span class="token operator">:</span> <span class="token string">'/user/logout'</span><span class="token punctuation">,</span> <span class="token comment">// 登出</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@description</span> login</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">data</span></span>
<span class="line"> * */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>account：string<span class="token punctuation">,</span><span class="token literal-property property">password</span><span class="token operator">:</span>string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> request<span class="token punctuation">.</span>post<span class="token operator">&lt;</span>Result<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Api<span class="token punctuation">.</span>login<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    data</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@description</span> logout</span>
<span class="line"> * */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">logout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> request<span class="token punctuation">.</span>get<span class="token operator">&lt;</span>Result<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> Api<span class="token punctuation">.</span>logout<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>axios 封装调用</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/api/login"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> formData <span class="token operator">=</span></span>
<span class="line">  reactive <span class="token operator">&lt;</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">account</span><span class="token operator">:</span> string<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"admin"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 进行其他处理......</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


