// token有效期：1小时
const TOKEN_EXPIRE_DURATION = 60 * 60 * 1000
// 登录接口返回的token前缀
export const TOKEN_PREFIX = 'mock_token_'

// 根据token解析出颁发时间戳
const extractTokenIssueTime = (token: string) => {
    // token必须是`mock_token_<timestamp>`格式，否则视为非法
    if (!token.startsWith(TOKEN_PREFIX)) return null
    const ts = Number(token.replace(TOKEN_PREFIX, ''))
    return Number.isFinite(ts) ? ts : null
}

// 校验headers中的Authorization token是否有效
export const validateToken = (headers: Record<string, string>) => {
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