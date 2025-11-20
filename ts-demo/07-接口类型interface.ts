export {}

// interface

// 定义接口类型-----给对象用
interface Person {
    name: string,
    age: number,
    height?: number, // 可选属性
}
let obj:Person

obj = {
    name: '张三',
    age: 18
}

// 定义接口类型-----给数组用
interface ArrInterface {
    // [idx: number] 下标类型
    [idx: number]: number | string
}

let arr: ArrInterface = [1, 2, 3, '4']

// 定义接口类型-----给函数用

interface FunInterface {
    // (形参以及类型): 返回值类型
    (a: number, b: number): number
}

let fun: FunInterface = (a, b) => {
    return a + b
}

fun(1, 2)