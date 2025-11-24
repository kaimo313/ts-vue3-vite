// 类型增强
// 声明全局变量
declare var globalVar:string

type ObjType = {
    name: string,
    age: number
}
declare var globalObj:ObjType

// 声明全局方法
declare function fn(s?:string):void