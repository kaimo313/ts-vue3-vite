interface ManageResponse<T = null> {
    code: number
    message: string
    data: T
}

type PromiseResponse<T = {}> = Promise<ManageResponse<T>>

interface AdminLoginData {
    username: string
    password: string
}

interface AdminLoginResponse {
    token: string
}

interface AdminInfoResponse {
    menus: []
}

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