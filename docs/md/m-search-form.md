# MSearchForm

MForm 是基于[arco-design-vue](https://arco.design/vue/docs/start)的date-picker进行二次封装的组件，
由于原生组件面板显示内容为Q1,Q2,Q3,Q4,针对该现象就行二次封装。

<div style="height: 1px; background: linear-gradient(to right, transparent, #42b983, transparent); margin: 2em 0;"></div>

**使用示例**

```js

<template>
     <MSearchForm
        ref="MSearchFormRef"
        :search-columns="searchColumns"
        :search-param="formData"
        :show-expand="false"
        :search="onSearch"
        :reset="onReset"
    />
</template>

<script lang="ts" setup>
import MSearchForm from '@/components/m-search-form/index.vue'

const MSearchFormRef = ref<InstanceType<typeof MSearchForm>>()

  const formData = reactive({
    name: '',
    gender: '',
    nation: '',
  })

  const searchColumns = computed(() => [
    { title: '姓名', dataIndex: 'name', search: { el: 'input', order: 0 } },
    {
      title: '性别',
      dataIndex: 'gender',
      search: {
        order: 1,
        render: (searchParam: { [key: string]: string }) => {
          return (
            <MDict
              v-model={searchParam.modelValue}
              code={DictEnum.GENDER}
              allowClear={true}
              placeholder={'请选择性别'}
            />
          )
        },
      },
    },
    {
      title: '民族',
      dataIndex: 'nationText',
      search: {
        key: 'nation',
        order: 2,
        render: (searchParam: { [key: string]: string }) => {
          return (
            <MDict
              v-model={searchParam.modelValue}
              code={DictEnum.NATION}
              allowClear={true}
              placeholder={'请选择民族'}
            />
          )
        },
      },
    },
  ])

  const onSearch = () => {
    const param = MSearchFormRef.value?.searchParam
    Message.info(`查询参数：${JSON.stringify(param)}`)
  }

  const onReset = () => {
    Message.info(`重置参数：${JSON.stringify(MSearchFormRef.value.searchParam)}`)
  }
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
                <td>changeExpand</td>
                <td class="type">当条件过多时触发</td>
                <td>value:boolean</td>
            </tr>
        </tbody>
    </table>
