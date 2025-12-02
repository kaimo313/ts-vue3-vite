import request from './request'

// 登录接口返回token
export const adminLoginApi = (data: unknown) => {
    return request.post('/admin/login', data)
}
