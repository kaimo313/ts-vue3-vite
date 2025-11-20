export {}

function fn(n: number|string): number|string {
    return n
}

fn(100)
fn('hello')

// 泛型 可以理解为类型的形参，T 是一个标识符，可以自定义换成其他字符，表示某种类型
// 类型参数化
function fn2<T, G>(n: T, m: G): T {
    return n
}

fn2<number, string>(100, 'hello')
fn2<string, number>('hello', 100)
fn2<boolean, boolean>(true, false)
fn2<'kaimo', 'cs'>('kaimo', 'cs')

// let arr: Array<number> = [1,2,3,4,5]