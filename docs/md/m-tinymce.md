# MTinymce

MTinymce 是基于[@jsdawn/vue3-tinymce](https://note.qscoding.com/guide/vue3-tinymce.html)进行二次封装的组件，
支持所有原生参数、事件、插槽，节省了重复造轮子的时间。

<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>

**使用示例**

```js

<template>
  <MTinymce v-model="editor" :height="400" />
</template>

<script lang="ts" setup>
  import MTinymce from '@/components/m-tinymce/index.vue'
</script>

```


**TinymceProps**

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
                <td class="type">编辑器输入时触发</td>
                <td>value:string</td>
            </tr>
        </tbody>
    </table>
