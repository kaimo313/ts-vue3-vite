import request from './request'

// 登录接口返回token
export const adminLoginApi = (data: AdminLoginData): PromiseResponse<AdminLoginResponse> => {
    return request.post('/admin/login', data)
}
// 获取用户信息接口
export const getAdminInfoApi = (): PromiseResponse<AdminInfoResponse> => {
    return request.get('/admin/info')
}