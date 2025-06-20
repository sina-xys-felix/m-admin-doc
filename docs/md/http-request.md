# 网络请求

- 项目封装了 Axios 来做网络请求，包括请求错误处理、请求重试等功能。
- 可以根据实际使用需求进行封装。

**目录结构**

```js

request
├─ axios-cancel.ts                  ## axios 取消请求封装
├─ axios-service.ts                 ## axios 请求service
├─ axios-transform.ts               ## axios 抽象类
├─ index.ts                         ## 请求配置
├─ type.d.ts
└─ utils.ts                         ## utils

```

**配置**

```js

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    merge(
      <CreateAxiosOptions>{
        // 请求头,根据实际需求来确定是否需要请求头
        authenticationScheme: "saToken",
        {/* // authenticationScheme: '', */}
        // 超时 时间，默认为10s
        timeout: ResultEnum.TIMEOUT as number,
        // 携带Cookie
        withCredentials: false,
        // 头信息
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 接口地址
          apiUrl: import.meta.env.VITE_API_BASE_URL,
          // 是否自动添加接口前缀
          isJoinPrefix: true,
          // 接口前缀
          urlPrefix: '/api',
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreRepeatRequest: true,
          // 是否携带token
          withToken: true,
          // 重试
          retry: {
            count: 3,
            delay: 2000,
          },
        },
      },
      opt || {}
    )
  )
}

```

<div style="
  border: 1px solid rgb(35, 195, 67);
  padding: 5px 10px;
  color: rgb(35, 195, 67);
  border-radius: 8px;">
    <p> 提示: </p>
    <p> apiUrl是通过环境变量加载的，可以通过项目根目录下的.env.***文件中修改VITE_API_BASE_URL，而不是在此处直接修改 </p>
</div>

**请求拦截**

请求拦截：可以在此处对请求头进行设置等操作。
代码位置：index.ts 110 行

```js
 // 请求拦截器处理，设置请求头
    requestInterceptors: (config: any, options: any ) => {
    // 请求之前处理config
    if (config.url?.indexOf('/user/login') > -1) {
      console.log('不需要进行请求头设置')
    } else {
      const token = getToken()
      if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
        ;(config as Recordable).headers['token'] = `${token}`
      }
    }

    return config as InternalAxiosRequestConfig
  },

```

**相应拦截**

```js
 // 响应拦截器处理，根据返回的code再进行处理，用来处理业务异常
  responseInterceptors: (res: any) => {
    if (res?.status !== ResultEnum.SUCCESS) {
      Message.error('网络错误！')
    }
    // 请求成功
    else if (res?.data.code === ResultEnum.SUCCESS && res?.status === ResultEnum.SUCCESS) {
      return res
    }
    // 请求文件成功
    else if (String(res?.data.code) === 'undefined' && typeof res?.data && res?.status === ResultEnum.SUCCESS) {
      return res
    }
    // 请求报错
    else {
      Message.error(res?.data.message)
      setTimeout(() => {
        if (router) router.push('/login')
        else window.location.href = '/login'
      }, 1000)
    }
  },

  // 响应错误处理，根据后端返回错误码进行响应,TODO
  responseInterceptorsCatch: (error: any) => {
    const { config, response } = error
    if (!config || !config.requestOptions.retry) {
      Message.error({ content: response?.message, duration: 1000 })
      return Promise.reject(error)
    }
    // 接口请求重试
    config.retryCount = config.retryCount || 1

    if (config.retryCount >= config.requestOptions.retry.count) return Promise.reject(error)

    config.retryCount += 1

    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve(config)
      }, config.requestOptions.retry.delay || 1)
    })
    config.headers = { ...config.headers, 'Content-Type': ContentTypeEnum.JSON }
    return backoff.then((config) => request.request(config))
  },

```

- 在获取接口相应后，如果失败会进行重试操作，重试次数自行配置。
- 请求成功后，会根据返回的 code 做处理，具体根据项目需求进行配置。

**示例**

- 1.在 src/api 下创建文件 login.ts
- 2.在 login.ts 中引入封装后的 request
- 3.编写请求函数

```js
import { request } from '@/utils/request'
import { Result } from '@/utils/request/type'
import { LoginData } from './types'

/**
 * @name 登录模块
 * */

const Api = {
  login: '/user/login', // 登录
  logout: '/user/logout', // 登出
}

/**
 * @description login
 * @param data
 * */
export const login = (data: {account：string,password:string}) => {
  return request.post<Result>({
    url: `${Api.login}`,
    data
  })
}

/**
 * @description logout
 * */
export const logout = () => {
  return request.get<Result>({
    url: Api.logout,
  })
}

```

**axios 封装调用**

```js
import { login } from "@/api/login";

const formData =
  reactive <
  { account: string, password } >
  {
    account: "admin",
    password: "admin",
  };

const handleSubmit = async () => {
  const response = await login(formData);
  // 进行其他处理......
};

```
