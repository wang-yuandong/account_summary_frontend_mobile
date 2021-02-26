import axios from 'axios';
// import router from '@/router/routers'
import {getToken} from '@/utils/auth'
import {createFormData} from './create-form-data'

const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  // baseURL: test, // api 的 base_url
  timeout: 1200000// 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Methods'] = 'POST,GET,OPTIONS,DELETE'
    config.headers['Access-Control-Max-Age'] = '3600'
    config.headers['Access-Control-Allow-Headers'] = 'x-requested-with,Authorization'
    config.headers['Access-Control-Allow-Credentials'] = 'true'
    if (config.requestBodyType === 'FormData') {
      config.data = createFormData({...config.data})
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status

    if ([401, 403].indexOf(code) !== -1) {
      //token失效，或者未登录 跳转到登录页
      // console.log(response)
      this.$router.push('/login')
    } else if (code === 200) {
      // console.log(response)
      return response.data
    }else {
      //抛出错误信息
      console.log(response)
      return Promise.reject('error')
    }

  },
  error => {
   //抛出异常信息
    this.$myToast(error)
    return Promise.reject(error)
  }
)
export default service
