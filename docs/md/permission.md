# 权限管理

## 菜单权限

如果菜单是后后端返回，在路由配置对 id 进行配置即可。

```js
   {
        path: 'user',
        name: 'user',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          id: '1003',  // 此处配置菜单权限Id
          locale: 'menu.system.user',
          requiresAuth: true,
          icon: 'user',
          level: 2,
        },
      },

```

## 按钮权限

按钮权限根据自定义指令 v-permission 进行配置。

```js
<a-button type="primary" status="success" v-permission="1201">
  <icon-edit size="18" />
</a-button>
```

**指令permission**

```js
import { DirectiveBinding } from "vue";
import { useUserStore } from "@/store";
import settings from "@/config/settings.json";

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const { value } = binding;
  const userStore = useUserStore();
  const { roles } = userStore;
  if (typeof value === "string" || typeof value === "number") {
    // 菜单Id变量根据项目进行调整
    const hasPermission = settings.menuFromServer
      ? roles[0].operationIds.includes(value)
      : true;
    if (!hasPermission && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  } else {
    throw new Error(`need roles! Like v-permission="['10000','10001']"`);
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
```
