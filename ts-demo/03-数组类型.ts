export {}

let arr:object = [1,2,3,4,5]

let arr1:number[] = [1,2,3,4,5]

arr1[0] = 10
// arr1[1] = "20" 报错

// 泛型 类型参数化
let arr2:Array<number> = [1,2,3,4,5]

// 元组
let arr3:[number,string] = [1,"2"]