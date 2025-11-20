export {}

// 自定义一个类型
type StringOrNumber = string | number

let str: StringOrNumber = 'hello'
str = 123


type ObjType = {
    a: number & 2,
    b: string
}
let obj: ObjType = {
    a: 2,
    b: 'hello'
}

// interface 和 type 的区别：
// 都可以用来自定义类型
// 类型别名支持联合类型和交叉类型定义
// 接口可以重复定义，类型别名不可以重复定义

// 类型别名保存接口上的某个属性类型
interface Ainterface {
    a: string
}
type Atype = Ainterface['a']

let str2: Atype = 'hello'

// 类型别名支持联合类型和交叉类型定义
type color = 'red' | 'blue' | 'green' | string & {}

let c: color = 'red'