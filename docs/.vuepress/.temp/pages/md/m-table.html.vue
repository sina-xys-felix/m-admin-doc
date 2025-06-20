<template><div><h1 id="mtable" tabindex="-1"><a class="header-anchor" href="#mtable"><span>MTable</span></a></h1>
<p>MTable 是基于<a href="https://arco.design/vue/docs/start" target="_blank" rel="noopener noreferrer">arco-design-vue</a>的表格二次封装的 Table 组件，
支持所有原生表格参数、事件、插槽，同时增强了部分功能。</p>
<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>
<p><strong>使用示例</strong></p>
<p>由于篇幅问题，具体使用场景请查看<a href="https://github.com/sina-xys-felix/M-Admin/blob/main/src/views/table/base/index.vue" target="_blank" rel="noopener noreferrer">github</a>。</p>
<p><strong>Props</strong></p>
<table style="width:100%；border-collapse: collapse;  margin-bottom: 40px;">
        <thead style="width:100%">
            <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>描述</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody style="width:100%">
            <tr>
                <td>columns</td>
                <td class="type">ColumnProps[]</td>
                <td>列的配置项，即表头显示内容,必填</td>
                <td>-</td>
            </tr>
            <tr>
                <td>data</td>
                <td class="type">TableData[]</td>
                <td>静态data</td>
                <td>-</td>
            </tr>
            <tr>
                <td>requestApi</td>
                <td class="type">(param: {key:string}:unknown) => Promise&lt;AxiosResponse&lt;Result&lt;T&gt;&gt;&gt;</td>
                <td>请求表格的api, AxiosResponse ==> Result</td>
                <td>-</td>
            </tr>
            <tr>
                <td>requestAuto</td>
                <td class="type">boolean</td>
                <td>是否自动查询</td>
                <td>-</td>
            </tr>
            <tr>
                <td>dataCallback</td>
                <td class="type">(data: {key:string}:unknown) => P</td>
                <td>返回数据的回调函数，可以对数据进行处理</td>
                <td>-</td>
            </tr>
            <tr>
                <td>isSplit</td>
                <td class="type">boolean</td>
                <td>是否需要拆分布局，左右布局的形式</td>
                <td>-</td>
            </tr>
            <tr>
                <td>spanSplit</td>
                <td class="type">number</td>
                <td>左边部分占多少栅格数,共24等分</td>
                <td>-</td>
            </tr>
            <tr>
                <td>splitLine</td>
                <td class="type">boolean</td>
                <td>是否需要分隔线</td>
                <td>-</td>
            </tr>
            <tr>
                <td>title</td>
                <td class="type">string</td>
                <td>表格标题,在表格打印的时候用</td>
                <td>-</td>
            </tr>
            <tr>
                <td>subTitle</td>
                <td class="type">string</td>
                <td>子标题（分隔时，左边块的标题），需配合isSplit使用</td>
                <td>-</td>
            </tr>
            <tr>
                <td>initParam</td>
                <td class="type">{key:string}:unknown</td>
                <td>初始化参数</td>
                <td>-</td>
            </tr>
            <tr>
                <td>pagination</td>
                <td class="type">boolean</td>
                <td>是否需要分页组件</td>
                <td class="default">true</td>
            </tr>
            <tr>
                <td>bordered</td>
                <td class="type">boolean</td>
                <td>是否需要表格纵向边框</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>stripe</td>
                <td class="type">boolean</td>
                <td>是否开启斑马纹</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>toolButton</td>
                <td class="type">boolean</td>
                <td>是否显示表格功能按钮，打印和导出功能</td>
                <td class="default">true</td>
            </tr>
            <tr>
                <td>selectId</td>
                <td class="type">string</td>
                <td>当表格数据多选时，所指定的 id</td>
                <td class="default">id</td>
            </tr>
            <tr>
                <td>isExpand</td>
                <td class="type">TableExpandable | boolean</td>
                <td>是否显示展开列信息</td>
                <td>-</td>
            </tr>
            <tr>
                <td>isRowSelection</td>
                <td class="type">RowSelectionType | TableRowSelection | boolean</td>
                <td>是否可以选择行</td>
                <td>-</td>
            </tr>
            <tr>
                <td>isTreeTable</td>
                <td class="type">boolean</td>
                <td>是否是树形表格，默认为false。如果是树形表格则需要配置该项。注意：每行下面会有一块占位span</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>xScroll</td>
                <td class="type">number | string | boolean</td>
                <td>x轴滚动的距离，如果是boolean是boolean,则使用默认值</td>
                <td>-</td>
            </tr>
            <tr>
                <td>fillRows</td>
                <td class="type">boolean</td>
                <td>是否填充空行</td>
                <td>-</td>
            </tr>
            <tr>
                <td>isSet</td>
                <td class="type">boolean</td>
                <td>是否需要设置最小行高，配合fillRows使用,如果为 false 则要自行处理样式问题</td>
                <td>-</td>
            </tr>
            <tr>
                <td>isChildren</td>
                <td class="type">boolean</td>
                <td>是否展示左边的展开图标</td>
                <td>-</td>
            </tr>
            <tr>
                <td>expandedRowKeys</td>
                <td class="type">string[]</td>
                <td>树形表格，设置默认展开的值</td>
                <td>-</td>
            </tr>
            <tr>
                <td>remember</td>
                <td class="type">boolean</td>
                <td>用户配置是否记录查询条件的内容</td>
                <td class="default">true</td>
            </tr>
            <tr>
                <td>tableShow</td>
                <td class="type">boolean</td>
                <td>是否展示表格</td>
                <td class="default">true</td>
            </tr>
        </tbody>
    </table>
<p><strong>ColumnProps</strong></p>
<table style="width:100%；border-collapse: collapse;  margin-bottom: 40px;">
        <thead>
            <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>enum</td>
                <td><span class="type">{key: string}: unknown</span></td>
                <td class="description">--</td>
            </tr>
            <tr>
                <td>search</td>
                <td><span class="type">SearchProps</span></td>
                <td class="description">--</td>
            </tr>
            <tr>
                <td>extra</td>
                <td><span class="type">Alias</span></td>
                <td class="description">--</td>
            </tr>
        </tbody>
    </table>
<p><strong>SearchProps</strong></p>
<table  style="width:100%;margin-bottom:40px">
        <thead>
            <tr>
                   <th>属性名</th>
                <th>类型</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>el</td>
                <td><span class="type">SearchType</span></td>
                <td class="description">当前搜索框的类型</td>
            </tr>
            <tr>
                <td>isShow</td>
                <td><span class="type">boolean</span></td>
                <td class="description">搜索列是否可见</td>
            </tr>
            <tr>
                <td>props</td>
                <td><span class="type">{key: string}: unknown</span></td>
                <td class="description">搜索项参数或者属性，根据arco-design官方文档来确定，该属性会透传到组件</td>
            </tr>
            <tr>
                <td>key</td>
                <td><span class="type">string</span></td>
                <td class="description">当搜索项 key 值不为 field时，可以通过key来指定</td>
            </tr>
            <tr>
                <td>order</td>
                <td><span class="type">number</span></td>
                <td class="description">搜索框的排序，从小到大一次排列</td>
            </tr>
            <tr>
                <td>options</td>
                <td><span class="type">DataProps[]</span></td>
                <td class="description">渲染查询条件的数据,select 或者 cascader</td>
            </tr>
            <tr>
                <td>defaultValue</td>
                <td>
                    <span class="type union-type">string</span> | 
                    <span class="type union-type">number</span> | 
                    <span class="type union-type">boolean</span>
                </td>
                <td class="description">搜索框默认值</td>
            </tr>
            <tr>
                <td>mode</td>
                <td><span class="type">RangePickerType</span></td>
                <td class="description">时间选择器为范围选择器时，范围选择器类型</td>
            </tr>
            <tr>
                <td>shortcuts</td>
                <td><span class="type">ShortcutType[]</span></td>
                <td class="description">时间选择器，快捷时间</td>
            </tr>
            <tr>
                <td>custom</td>
                <td><span class="type">boolean</span></td>
                <td class="description">是否自定义查询条件内容</td>
            </tr>
            <tr>
                <td>span</td>
                <td><span class="type">number</span></td>
                <td class="description">搜索列占的栅格数</td>
            </tr>
            <tr>
                <td>offset</td>
                <td><span class="type">number</span></td>
                <td class="description">搜索列偏移栅格数</td>
            </tr>
            <tr>
                <td>treeProps</td>
                <td><span class="type">TreeOptions</span></td>
                <td class="description">列表左侧树形结构,需要时可以自行补充</td>
            </tr>
            <tr>
                <td>render</td>
                <td>
                    <div class="code-block">(scope: SearchRenderScope) => VNode</div>
                </td>
                <td class="description">自定义搜索内容渲染（tsx语法）</td>
            </tr>
        </tbody>
    </table>
<p><strong>Slots</strong></p>
  <table  style="width:100%;margin-bottom:40px">
    <thead>
      <th>插槽名</th>
      <th>描述</th>
      <th>参数</th>
    </thead>
    <tbody>
      <tr>
        <td>title</td>
        <td>标题</td>
        <td>string</td>
      </tr>
      <tr>
        <td>sub-title</td>
        <td>子标题</td>
        <td>string</td>
      </tr>
      <tr>
        <td>tree</td>
        <td>树Tree,isSplit时有效</td>
        <td>TreeData</td>
      </tr>
      <tr>
        <td>extra</td>
        <td>自定义查询条件操作按钮</td>
        <td>--</td>
      </tr>
      <tr>
        <td>custom</td>
        <td>自定义查询条件</td>
        <td>--</td>
      </tr>
      <tr>
        <td>header-left</td>
        <td>表头左侧区域内容</td>
        <td>selectedList:tableData[],selectedListIds:(string | number)[],sSelected:boolean</td>
      </tr>
      <tr>
        <td>header-right</td>
        <td>表头右侧区域内容</td>
           <td>selectedList:tableData[],selectedListIds:(string | number)[],sSelected:boolean</td>
      </tr>
      <tr>
        <td>expand-row</td>
        <td>自定义扩展行</td>
        <td>--</td>
      </tr>
    </tbody>
  </table>
  <div style="
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p> 更多插槽，根据项目columns配置的slotName、titleSlotName定义。 </p>
  </div>
<p><strong>Events</strong></p>
<table  style="width:100%;margin-bottom:40px">
    <thead>
      <th>方法名</th>
      <th>描述</th>
      <th>参数</th>
    </thead>
    <tbody>
      <tr>
        <td>expandedChange</td>
        <td>展开行变化回调</td>
        <td>string[]</td>
      </tr>
      <tr>
        <td>search</td>
        <td>查询按钮回调</td>
        <td>--</td>
      </tr>
      <tr>
        <td>reset</td>
        <td>重置按钮回调</td>
        <td>--</td>
      </tr>
      </tbody>
     </table>
<p><strong>Expose</strong></p>
<table>
    <thead>
      <th>名称</th>
      <th>参数</th>
      <th>返回值</th>
      <th>说明</th>
    </thead>
    <tbody>
      <tr>
        <td>searchParam</td>
        <td>--</td>
        <td>--</td>
        <td>查询参数</td>
      </tr>
      <tr>
        <td>element</td>
        <td>--</td>
        <td>MTableInstance</td>
        <td>table实例</td>
      </tr>
      <tr>
        <td>tableData</td>
        <td>--</td>
        <td>tableData[]</td>
        <td>表格数据</td>
      </tr>
      <tr>
        <td>pageable</td>
        <td>--</td>
        <td>Pagination</td>
        <td>表格分页配置</td>
      </tr>
      <tr>
        <td>treeNode</td>
        <td>--</td>
        <td>TreeNodeData</td>
        <td>treeData</td>
      </tr>
      <tr>
        <td>isSelected</td>
        <td>--</td>
        <td>boolean</td>
        <td>是否选中了数据行</td>
      </tr>
      <tr>
        <td>selectedList</td>
        <td>--</td>
        <td>tableData[]</td>
        <td>选中的数据行</td>
      </tr>
      <tr>
        <td>selectedListIds</td>
        <td>--</td>
        <td>(string|number)[]</td>
        <td>选中的数据行主键</td>
      </tr>
      <tr>
        <td>activeRowkeys</td>
        <td>--</td>
        <td>(string|number)[]</td>
        <td>展开行主键</td>
      </tr>
      <tr>
        <td>getTableList</td>
        <td>--</td>
        <td>--</td>
        <td>查询表格数据Event</td>
      </tr>
      <tr>
        <td>reset</td>
        <td>--</td>
        <td>--</td>
        <td>重置表格数据</td>
      </tr>
      <tr>
        <td>clearSelection</td>
        <td>--</td>
        <td>--</td>
        <td>清除表格选中状态</td>
      </tr>
      <tr>
        <td>handleCurrentChange</td>
        <td>current</td>
        <td>number</td>
        <td>页码变化</td>
      </tr>
      <tr>
        <td>handleSizeChange</td>
        <td>pageSize</td>
        <td>number</td>
        <td>分页变化</td>
      </tr>
      </tbody>
     </table>
</div></template>


