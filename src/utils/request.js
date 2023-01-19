/**
 * 封装 axios 请求模块
 */
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 基础路径
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  // config 配置对象: 本次请求配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  console.log(config)
  return config
  //  return config通关放行的意思
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
export default request
