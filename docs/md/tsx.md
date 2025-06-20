# TSX 支持

在本项目前端中，路由视图不仅支持 vue，也支持 tsx 作为视图文件，给开发者提供不同的选择。

**示例**

```js
<script lang="tsx" setup>

    const columns = ref([
    {
      field: 'name',
      label: '姓名',
      el: 'input',
      attrs: {
        'label-col-props': { flex: '100px' },
        'wrapper-col-props': { flex: 1 },
      },
      rules: {
        required: true,
        message: '请输入姓名',
      },
    },
    {
      field: 'gender',
      label: '性别',
      el: 'select',
      options: [
        { value: '1', label: '男' },
        { value: '2', label: '女' },
        { value: '3', label: '未知' },
      ],
      attrs: {
        'label-col-props': { flex: '100px' },
        'wrapper-col-props': { flex: 1 },
      },
    },
    {
      field: 'quickCode',
      label: '编码',
      el: 'input',
      attrs: {
        'label-col-props': { flex: '100px' },
        'wrapper-col-props': { flex: 1 },
      },
    },
    {
      field: 'orgId',
      label: '机构',
      render: () => {
        return (
          <MDict
            v-model={formData.value.orgId}
            code={''}
            data={cascaderOptions.value}
            requestParam={requestParam.value}
            fieldNames={{ value: 'value', label: 'label' }}
            placeholder={t('common.select') + t('basicTable.actions.one')}
            mode={1}
            allowSearch
          />
        )
      },
      attrs: {
        'label-col-props': { flex: '100px' },
        'wrapper-col-props': { flex: 1 },
      },
    },
  ])
</script>

```

**jsx学习**

- [Babel Plugin JSX for Vue 3]('https://github.com/vuejs/babel-plugin-jsx#syntax')