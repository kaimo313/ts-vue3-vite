import { type MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/api/admin/login',
        method: 'post',
        response: ({ body }: { body: { username: string; password: string } }) => {
            const { username, password } = body
            
            // 模拟登录验证
            if (username === 'admin' && password === '123456') {
                return {
                    code: 200,
                    message: '登录成功',
                    data: {
                        token: 'mock_token_' + Date.now()
                    }
                }
            } else {
                return {
                    code: 401,
                    message: '用户名或密码错误',
                    data: null
                }
            }
        }
    }
] as MockMethod[]

