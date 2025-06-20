# 季度选择器

MForm 是基于[arco-design-vue](https://arco.design/vue/docs/start)的date-picker进行二次封装的组件，
由于原生组件面板显示内容为Q1,Q2,Q3,Q4,针对该现象就行二次封装。

<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>

**使用示例**

```js

<template>
<MQuarterSelect v-model="quarter" />
</template>

<script lang="ts" setup>
  import MQuarterSelect from '@/components/m-quarter-select/index.vue'

  const quarter = ref<string>('1')
</script>

```


**Props**

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

**Event**


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
