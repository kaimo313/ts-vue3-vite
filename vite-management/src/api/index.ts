import request from './request'

// 获取首页数据
export const getAdminStat = ():PromiseResponse<IndexDataItf> => {
    return request.get('/admin/stat')
}