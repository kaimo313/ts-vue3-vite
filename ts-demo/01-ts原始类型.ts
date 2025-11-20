export {}
let str = "133"; // 变量在定义下来就确定类型了，不能修改
// str = 2 // 报错：不能将类型“number”分配给类型“string”。ts(2322)
console.log(str);

const num = 123; 
// num = '23' // 报错：常量不能修改（改变指向）
console.log(num);

let str1: string = 'hello'
let flag: boolean = true
let num1: number = 123
let u: undefined = undefined
let n: null = null
let sym: symbol = Symbol('sym')

num1.toFixed(2)
// str1.toFixed(2) // 报错：属性“toFixed”在类型“string”上不存在

let vo:void = undefined // 在ts中函数没有返回值，函数类型就是void
function fn():void {}
// function fn1():undefined {} // 报错
function fn2():undefined {
    return undefined // return void 0
}