import request from './request'

interface AdminLoginData {
    username: string
    password: string
}

interface AdminLoginResponse {
    code: number
    message: string
    data: {
        token: string
    }
}

// 登录接口返回token
export const adminLoginApi = (data: AdminLoginData): Promise<AdminLoginResponse> => {
    return request.post('/admin/login', data)
}
