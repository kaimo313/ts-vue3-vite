export {}

// | 联合类型

let numberOrString:number | string = 123

numberOrString = '123'
numberOrString = 123

let numToStr: 1 | '2' = 1 // 1 | '2' 联合类型，只能是1或者'2'，不能是其他值

let obj:{a:1}|{b:2} = {a:1} // 表示要么有a属性，要么有b属性

obj = {b:2}
obj = {a:1,b:2}