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
    // console.log('headers---->', headers)
    const token = headers.authorization || headers.Authorization
    const issueTime = token ? extractTokenIssueTime(token) : null
    // console.log('issueTime---->', issueTime)
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
                    menus: [
                        {
                            id: '1',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 0,
                            name: 'pms',
                            parentId: '0',
                            sort: 1,
                            title: '商品'
                        },
                        {
                            id: '1-1',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 1,
                            name: 'product',
                            parentId: '1',
                            sort: 0,
                            title: '商品列表'
                        },
                        {
                            id: '1-2',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 2,
                            name: 'addProduct',
                            parentId: '1',
                            sort: 0,
                            title: '添加商品'
                        },
                        {
                            id: '2',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 0,
                            name: 'oms',
                            parentId: '0',
                            sort: 2,
                            title: '订单'
                        },
                        {
                            id: '2-1',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 1,
                            name: 'orderList',
                            parentId: '2',
                            sort: 0,
                            title: '订单列表'
                        },
                        {
                            id: '2-2',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 2,
                            name: 'orderDetail',
                            parentId: '2',
                            sort: 0,
                            title: '订单详情'
                        },
                        {
                            id: '3',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 0,
                            name: 'sms',
                            parentId: '0',
                            sort: 3,
                            title: '营销'
                        },
                        {
                            id: '3-1',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 1,
                            name: 'subject',
                            parentId: '3',
                            sort: 0,
                            title: '营销主题'
                        },
                        {
                            id: '3-2',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 2,
                            name: 'advertise',
                            parentId: '3',
                            sort: 0,
                            title: '广告营销'
                        },
                        {
                            id: '4',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 0,
                            name: 'ums',
                            parentId: '0',
                            sort: 3,
                            title: '权限'
                        },
                        {
                            id: '4-1',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 1,
                            name: 'role',
                            parentId: '4',
                            sort: 0,
                            title: '角色管理'
                        }
                    ]
                }
            }
        }
    }
] as MockMethod[]

