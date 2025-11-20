export {}

// & 交叉类型

let a: number & string // 不会有任何值满足这类型，一般不会这么写

// 如果一个属性出现多次类型的设置，需要都满足
let obj: { name: string, age: number } & { height: string, age: 18 }

obj = {
    name: "kaimo",
    age: 18,
    height: "178cm"
}