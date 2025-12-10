import { type MockMethod } from 'vite-plugin-mock'
import fs from 'fs'
import path from 'path'

import { validateToken } from '../utils'

const adminDataFile = path.join(process.cwd(), 'src/mock/data/admin-list.json')
const roleListDataFile = path.join(process.cwd(), 'src/mock/data/role-list.json')
const roleDataFile = path.join(process.cwd(), 'src/mock/data/role.json')

const readAdmins = () => {
    try {
        const raw = fs.readFileSync(adminDataFile, 'utf-8')
        return JSON.parse(raw) as Array<Record<string, any>>
    } catch (e) {
        console.error('读取用户数据失败', e)
        return []
    }
}

const writeAdmins = (list: Array<Record<string, any>>) => {
    fs.writeFileSync(adminDataFile, JSON.stringify(list, null, 2), 'utf-8')
}

const readRoleLists = () => {
    try {
        const raw = fs.readFileSync(roleListDataFile, 'utf-8')
        return JSON.parse(raw) as Array<Record<string, any>>
    } catch (e) {
        console.error('读取角色列表数据失败', e)
        return []
    }
}

const readRole = () => {
    try {
        const raw = fs.readFileSync(roleDataFile, 'utf-8')
        return JSON.parse(raw) as Array<Record<string, any>>
    } catch (e) {
        console.error('读取角色数据失败', e)
        return []
    }
}

export default [
    {
        url: '/api/admin/list',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            const adminList = readAdmins()
            const pageSize = 10
            const pageNum = 1
            const total = adminList.length
            const totalPage = Math.max(1, Math.ceil(total / pageSize))

            return {
                code: 200,
                message: '获取用户数据列表',
                data: {
                    list: adminList,
                    pageNum,
                    pageSize,
                    total,
                    totalPage
                }
            }
        }
    },
    {
        url: '/api/admin/update/:id',
        method: 'post',
        response: (options: {
            headers: Record<string, string>
            body: Record<string, unknown>
            url: string
        }) => {
            const { headers, body, url } = options
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            const adminList = readAdmins()
            const id = Number((url.match(/\/api\/admin\/update\/(\d+)/) || [])[1])
            const target = adminList.find(item => item.id === id)

            if (!target) {
                return {
                    code: 404,
                    message: '未找到对应的用户',
                    data: null
                }
            }

            // 合并更新，同时保留原有的 id
            Object.assign(target, body, { id: target.id })
            writeAdmins(adminList)

            return {
                code: 200,
                message: '修改用户信息成功',
                data: target
            }
        }
    },
    {
        url: '/api/role/listAll',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            const roleList = readRoleLists()
            return {
                code: 200,
                message: '获取角色列表成功',
                data: roleList
            }
        }
    },
    {
        url: '/api/admin/role/:id',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            const roleList = readRole()
            return {
                code: 200,
                message: '获取角色成功',
                data: roleList
            }
        }
    }
] as MockMethod[]
