# 路由、菜单

路由配置存放在 src/router 文件夹下面：

<div style=" 
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p>温馨提示：</p>
    <ul>
        <li>如若该项目路由配置不符合需求，路由功能根据自己项目需求改造。</li>
    </ul>
</div>

## 目录结构

```js
router
├─ app-menus                            ## 项目路由
│  └─ index.ts
├─ guard
│  ├─ index.ts
│  ├─ permission.ts                     ## 路由权限配置
│  └─ userLoginInfo.ts                  ## 路由切换配置
├─ locale                               ## 国际化配置
│  ├─ en-US.ts
│  └─ zh-CN.ts
├─ routes
│  ├─ externalModules                   ## 路由外链配置
│  │  └─ faq.ts
│  ├─ modules                           ## 路由配置
│  │  ├─ components.ts
│  │  ├─ dashboard.ts
│  │  ├─ document.ts
│  │  └─ system.ts
│  ├─ base.ts                           ## 路由--重定向
│  ├─ index.ts                          ## 项目中使用的路由引用
│  └─ types.ts
├─ constants.ts                         ## 白名单配置
├─ index.ts                             ## 公用路由配置，如login等
└─ typings.d.ts                         ## 自定义RouteMeta


```

## 路由参数

```js
/** 路由参数简介 */
interface RouteRecordRaw {
  path: string; // 路由访问路径
  name: string; // 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选)
  redirect: string; // 路由重定向地址
  component: string | (() => Promise<unknown>); // 视图文件路径
  /** 路由元信息 */
  meta: {
    id?: string | number // ID,用来做菜单权限校验
    requiresAuth: boolean // 是否需要对该路由进行权限配置
    icon?: string // arco-icon 图标配置
    remix?: string // remix-icon 图标配置
    locale?: string // 国际化配置
    hideInMenu?: boolean // 是否隐藏菜单
    hideChildrenInMenu?: boolean // 是否隐藏二级菜单
    activeMenu?: string // 激活的菜单Name
    order?: number // 排序
    noAffix?: boolean // 是否需要再tabbar上展示
    ignoreCache?: boolean // 缓存忽略配置
  };
  /** 多级路由嵌套 */
  children: RouteRecordRaw[];
}
```

**新增路由**

```js
{
    path: '/home/index',
    name: 'Home',
    component: '/home/index',
    meta: {
      id: '12',
      locale: 'menu.home',
      icon: 'home',
      requiresAuth: true,
      order: 0,
    },
}

```

**二级路由**

```js
{
    path: '/dashboard',
    name: 'dashboard',
    component: DEFAULT_LAYOUT,
    meta: {
      id: '12',
      locale: 'menu.home',
      icon: 'home',
      requiresAuth: true,
      order: 0,
    },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/dashboard/welcome/index.vue'),
        meta: {
          locale: 'menu.dashboard.welcome',
          icon: 'face-smile-fill',
          requiresAuth: true,
          roles: ['*'],
          id: '1201',
        },
      },]
}

```

**菜单**

- 本项目路由由前端存储，后端返回对应的 MeunId 即可。

<div style="
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p> Tip: </p>
    <p> 生成环境实际使用可根据项目需要进行调整。 </p>
  </div>

**utils**

```js
/**
 * @description 根据后台返回的ids，来判断路由菜单的显示
 * @param {Array} list 所有的静态路由  ServerRouteRecordRaw
 * @param {Object} menuIds 后端返回的路由ids
 * */
export const getRoutes = (
  list: ServerRouteRecordRaw[],
  menuIds: string[] = []
): ServerRouteRecordRaw[] => {
  if (menuIds && menuIds.length === 1 && menuIds[0] === "0") {
    return list;
  } else {
    const fixedRoutes: ServerRouteRecordRaw[] = [];
    const allRoutes: ServerRouteRecordRaw[] = [];

    for (const router of list) {
      const { requiresAuth, ...rest } = router; // 解构需要的部分

      // 如果路由元信息中requiresAuth为false，则该路由不需要验证，将其添加到fixedRoutes中
      if (requiresAuth === false) {
        fixedRoutes.push(rest);
      }

      // 如果路由元信息中requiresAuth为true或者没有定义requiresAuth，并且meta.id存在于menuIds中，则该路由需要进行验证
      if (requiresAuth === true || menuIds.includes(rest.meta?.id)) {
        // 如果router有子路由，则递归处理子路由
        if (rest.children) rest.children = getRoutes(rest.children, menuIds);
        allRoutes.push(rest);
      }
    }
    return [...fixedRoutes, ...allRoutes];
  }
};
```
