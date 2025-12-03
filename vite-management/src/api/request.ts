import axios from 'axios'
import Cookies from 'js-cookie'

// 创建 axios 实例
const request = axios.create({
    baseURL: '/api', // 基础路径
    timeout: 15000, // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        let token = Cookies.get('token')
        if(token) {
            config.headers = config.headers || {}
            config.headers.Authorization = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default request

