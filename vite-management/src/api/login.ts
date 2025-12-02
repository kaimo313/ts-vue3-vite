import request from './request'

interface ManageResponse<T = null> {
    code: number
    message: string
    data: T
}

type PromiseResponse<T> = Promise<ManageResponse<T>>

interface AdminLoginData {
    username: string
    password: string
}

interface AdminLoginResponse {
    token: string
}

interface AdminInfoResponse {
    menu: []
}

// 登录接口返回token
export const adminLoginApi = (data: AdminLoginData): PromiseResponse<AdminLoginResponse> => {
    return request.post('/admin/login', data)
}
// 获取用户信息接口
export const getAdminInfoApi = (): PromiseResponse<AdminInfoResponse> => {
    return request.get('/admin/info')
}