export {}

// 枚举不是用来定义类型的，用来列举数据用的

enum StatusCode {
  success = 200,
  paramError = 400,
  serverError = 500
}

let code:number | string = 200
if(code === StatusCode.success) {
    console.log('成功');
} else if(code === StatusCode.paramError) {
    console.log('参数问题');
} else if(code === StatusCode.serverError) {
    console.log('服务器错误');
}

enum StatusCode2 {
  success,
  paramError = 400,
  serverError
}

console.log(StatusCode2.success, StatusCode2.paramError, StatusCode2.serverError); // 0 400 401