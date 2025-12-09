import { type MockMethod } from 'vite-plugin-mock'

import { validateToken } from '../utils' 

export default [
    {
        url: '/api/admin/list',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            return {
                code: 200,
                message: '获取用户数据列表',
                data: {
                    list: [
                        {
                            createTime: '2018-09-29T05:55:39.000+00:00',
                            email: 'kaimo313@foxmail.com',
                            icon: '',
                            id: 1,
                            loginTime: '2018-09-29T05:55:39.000+00:00',
                            nickName: '超级管理员',
                            note: '超级管理员',
                            password: '123456',
                            status: 1, // 是否启用 1启用 0禁用
                            username: 'admin'
                        },
                        {
                            createTime: '2018-09-29T05:55:39.000+00:00',
                            email: 'kaimo313@foxmail.com',
                            icon: '',
                            id: 2,
                            loginTime: '2018-09-29T05:55:39.000+00:00',
                            nickName: '凯小默',
                            note: '凯小默的笔记',
                            password: '123456',
                            status: 0, // 是否启用 1启用 0禁用
                            username: 'kaimo'
                        }
                    ],
                    pageNum: 1,
                    pageSize: 10,
                    total: 2,
                    totalPage: 1,
                }
            }
        }
    }
] as MockMethod[]
