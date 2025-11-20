export {}
// 非原始类型就这三个 object（常用） Object {}

// object 不包含原始类型
let obj:object = {
    a: 10
}
let arr:object = [1]

// let num:object = 10 // 报错
// let str:object ="10" // 报错

// Object 包含原始类型
let obj1:Object = {
    a: 10
}
let arr1:Object = [1]
let num1:Object = 10 
let str1:Object ="10" 


// {} 也包含原始类型，等效于 Object
let obj2:{} = {
    a: 10
}
let arr2:{} = [1]
let num2:{} = 10 
let str2:{} ="10" 