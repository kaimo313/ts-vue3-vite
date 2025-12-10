import request from './request'

interface ManageResponse<T = null> {
    code: number
    message: string
    data: T
}

type PromiseResponse<T = {}> = Promise<ManageResponse<T>>

interface AdminListParams {
    keyword: string
    pageNum: number
    pageSize: number
}

interface AdminListResponse {
    list: {}[]
    pageNum: number
    pageSize: number
    total: number
    totalPage: number
}

// 获取用户数据列表
export const getAdminListApi = (data: AdminListParams):PromiseResponse<AdminListResponse> => {
    return request.get('/admin/list', {
        params: data
    })
}
// 修改指定用户信息
export const updateAdmin = (id: number, data: AdminObjItf):PromiseResponse => {
    return request.post('/admin/update/' + id, data)
}
// 获取所有角色
export const getRoleListAll = ():PromiseResponse<RoleObjItf[]> => {
    return request.get('/role/listAll')
}
// 根据用户id获取角色
export const getAdminRoleById = (id: number):PromiseResponse<RoleObjItf[]> => {
    return request.get('/admin/role/' + id)
}