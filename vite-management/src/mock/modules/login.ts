import { type MockMethod } from 'vite-plugin-mock'

import { validateToken, TOKEN_PREFIX } from '../utils' 

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
                        },
                        {
                            id: '4-2',
                            icon: '',
                            createTime: '',
                            hidden: 0,
                            level: 1,
                            name: 'admin',
                            parentId: '4',
                            sort: 0,
                            title: '用户列表'
                        }
                    ]
                }
            }
        }
    }
] as MockMethod[]
