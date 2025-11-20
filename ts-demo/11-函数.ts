export {}

// function name(a:number, b:number):number {
//     return a + b
// }

// 接口定义函数类型
interface Add {
    (a:number, b:number):number
}

const add: Add = (a, b) => a + b

add(1, 2)

// 类型别名来定义函数类型

type AddType = (a:number, b:number) => number

const addType: AddType = (a, b) => a + b

addType(1, 2)

// 函数作为对象的属性出现的时候
// 使用接口
interface Objinterface {
    fn: Add
}
let obj:Objinterface = {
    fn: (a, b) => a + b
}
obj.fn(1, 2)

// 使用类型别名
type ObjType = {
    fn: AddType
}
let obj2:ObjType = {
    fn: (a, b) => a + b
}
obj2.fn(1, 2)