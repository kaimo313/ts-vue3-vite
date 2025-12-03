import { type MockMethod } from 'vite-plugin-mock'

// token有效期：1小时
const TOKEN_EXPIRE_DURATION = 60 * 60 * 1000
// 登录接口返回的token前缀
const TOKEN_PREFIX = 'mock_token_'

// 根据token解析出颁发时间戳
const extractTokenIssueTime = (token: string) => {
    // token必须是`mock_token_<timestamp>`格式，否则视为非法
    if (!token.startsWith(TOKEN_PREFIX)) return null
    const ts = Number(token.replace(TOKEN_PREFIX, ''))
    return Number.isFinite(ts) ? ts : null
}

// 校验headers中的Authorization token是否有效
const validateToken = (headers: Record<string, string>) => {
    // 约定从Authorization中读取token
    console.log('headers---->', headers)
    const token = headers.authorization || headers.Authorization
    const issueTime = token ? extractTokenIssueTime(token) : null
    console.log('issueTime---->', issueTime)
    if (!token || !issueTime || Date.now() - issueTime > TOKEN_EXPIRE_DURATION) {
        return {
            valid: false,
            response: {
                code: 401,
                message: '登录信息已过期，请重新登录',
                data: null
            }
        }
    }

    return { valid: true }
}

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
                        token: TOKEN_PREFIX + Date.now()
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
    },
    {
        url: '/api/admin/info',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            return {
                code: 200,
                message: '获取用户信息成功',
                data: {
                    menu: [
                        {
                            name: 'Dashboard',
                            path: '/dashboard'
                        },
                        {
                            name: 'Users',
                            path: '/users'
                        }
                    ]
                }
            }
        }
    }
] as MockMethod[]

