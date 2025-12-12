import { type MockMethod } from 'vite-plugin-mock'
import fs from 'fs'
import path from 'path'

import { validateToken } from '../utils'

const pieMapDataFile = path.join(process.cwd(), 'src/mock/data/pie-map.json')

const readPieData = () => {
    try {
        const raw = fs.readFileSync(pieMapDataFile, 'utf-8')
        return JSON.parse(raw) as Record<string, unknown>
    } catch (e) {
        console.error('读取首页饼图数据失败', e)
        return { salePie: [] }
    }
}

export default [
    {
        url: '/api/admin/stat',
        method: 'get',
        response: ({ headers }: { headers: Record<string, string> }) => {
            const tokenCheck = validateToken(headers)
            if (!tokenCheck.valid) {
                return tokenCheck.response
            }

            const data = readPieData()
            return {
                code: 200,
                message: '获取首页统计数据成功',
                data
            }
        }
    }
] as MockMethod[]
