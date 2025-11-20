export {}

// any 不推荐使用，any会绕过类型检查

let a: any = 1
a = '12'
a = true
a = {a:1}
a.toFixed(2) // 不会报错，绕过了类型检查

let n: unknown

n = 1
n = '12'
n = true
n = {a:1}
// n.toFixed(2) // 会报错，有做校验

if(typeof n === 'number') {
    n.toFixed(2)
} else if ( typeof n === 'string') {
    n.concat()
}