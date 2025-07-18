# MForm

MForm 是基于[arco-design-vue](https://arco.design/vue/docs/start)的form二次封装的 Form 组件，
支持所有原生参数、事件、插槽，同时增强了部分功能。

<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>

**使用示例**

由于篇幅问题，具体使用场景请查看[github](https://github.com/sina-xys-felix/M-Admin/blob/main/src/views/form/config/index.vue)。


**MFormProps**

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
                <td>columns</td>
                <td class="type">MFormItemProps[]</td>
                <td>表单项配置</td>
                <td>--</td>
            </tr>
            <tr>
                <td>formData</td>
                <td class="type">{ [key: string]: any }</td>
                <td>表单绑定的值</td>
                <td class="default">{}</td>
            </tr>
            <tr>
                <td>layout</td>
                <td class="type">Layout</td>
                <td>表单的布局方式，包括水平、垂直、多列</td>
                <td class="default">horizontal</td>
            </tr>
            <tr>
                <td>size</td>
                <td class="type">Size</td>
                <td>表单控件的尺寸</td>
                <td class="default">medium</td>
            </tr>
            <tr>
                <td>labelColProps</td>
                <td class="type">ColProps</td>
                <td>标签元素布局选项。参数同 &lt;col&gt; 组件一致</td>
                <td class="default">{ span: 5, offset: 0 }</td>
            </tr>
            <tr>
                <td>wrapperColProps</td>
                <td class="type">ColProps</td>
                <td>表单控件布局选项。参数同 &lt;col&gt; 组件一致</td>
                <td class="default">{ span: 19, offset: 0 }</td>
            </tr>
            <tr>
                <td>labelAlign</td>
                <td class="type">Align</td>
                <td>标签的对齐方向</td>
                <td class="default">right</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td class="type">boolean</td>
                <td>是否禁用表单</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>rules</td>
                <td class="type">Record&lt;string, FieldRule | FieldRule[]&gt;</td>
                <td>表单项校验规则</td>
                <td class="default">{}</td>
            </tr>
            <tr>
                <td>autoLabelWidth</td>
                <td class="type">boolean</td>
                <td>是否开启自动标签宽度，仅在 layout="horizontal" 下生效</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>id</td>
                <td class="type">string</td>
                <td>表单控件 id 的前缀</td>
                <td class="default">空</td>
            </tr>
            <tr>
                <td>scrollToFirstError</td>
                <td class="type">boolean</td>
                <td>验证失败后滚动到第一个错误字段</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>style</td>
                <td class="type">CSSProperties</td>
                <td>自定义样式</td>
                <td></td>
            </tr>
            <tr>
                <td>className</td>
                <td class="type">string</td>
                <td>自定义类名</td>
                <td>--</td>
            </tr>
            <tr>
                <td>rowConfig</td>
                <td class="type">RowConfigProps</td>
                <td>行配置属性</td>
                <td>--</td>
            </tr>
        </tbody>
    </table>


**MFormItemProps**

<table  style="width:100%;margin-bottom:40px">
        <thead>
            <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>show</td>
                <td class="type">boolean</td>
                <td>是否需要显示</td>
                <td class="default">true</td>
            </tr>
            <tr>
                <td>order</td>
                <td class="type">number</td>
                <td>表单项的排序，从小到大排序</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>span</td>
                <td class="type">number</td>
                <td>表单项占据的栅格数</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>offset</td>
                <td class="type">number</td>
                <td>表单项偏移栅格数</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>flex</td>
                <td class="type">ColTypes</td>
                <td>弹性布局配置</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>colProps</td>
                <td class="type">any</td>
                <td>a-col 的其他属性</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>field</td>
                <td class="type">string</td>
                <td>表单元素在数据对象中的path（数据项必填）</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>label</td>
                <td class="type">string</td>
                <td>标签的文本</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>showColon</td>
                <td class="type">boolean</td>
                <td>是否显示冒号</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td class="type">boolean</td>
                <td>是否禁用</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>required</td>
                <td class="type">boolean</td>
                <td>是否必填</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>rules</td>
                <td class="type">FieldRule | FieldRule[]</td>
                <td>表单验证规则</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>asteriskPosition</td>
                <td class="type">'start' | 'end'</td>
                <td>可选择将星号置于 label 前/后</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>hideAsterisk</td>
                <td class="type">boolean</td>
                <td>是否隐藏星号</td>
                <td class="default">false</td>
            </tr>
            <tr>
                <td>attrs</td>
                <td class="type">NewFormItemProps</td>
                <td>表单项props中除了以上属性以外的</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>el</td>
                <td class="type">FormItemTypes</td>
                <td>表单项的类型</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>props</td>
                <td class="type">any</td>
                <td>表单项参数或者属性，根据arco-design官方文档确定</td>
                <td class="default">--</td>
            </tr>
            <tr>
                <td>render</td>
                <td class="type">(scope: any) => VNode</td>
                <td>自定义搜索内容渲染（tsx语法）</td>
                <td class="default">--</td>
            </tr>
        </tbody>
    </table>



**Expose**

<table>
    <thead>
      <th>名称</th>
      <th>参数</th>
      <th>返回值</th>
      <th>说明</th>
    </thead>
    <tbody>
      <tr>
        <td>onSubmit</td>
        <td>--</td>
        <td>--</td>
        <td>表单提交时触发</td>
      </tr>
      <tr>
        <td>element</td>
        <td>--</td>
        <td>FormInstance</td>
        <td>form实例</td>
      </tr>
      </tbody>
     </table>
