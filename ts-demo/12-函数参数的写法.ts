export {}

// 默认参数
function fn(a:number, b:number=3):number {
    return a + b
}

fn(1, 2)
fn(5)

// 缺省参数
function fn2(a:number, b?:number):number {
    return 1
}
fn2(1, 2)
fn2(5)

// 剩余参数
function fn3(a:number, b:number, ...arr:number[]):void {
    console.log(a, b); 
    console.log(arr);
}
fn3(1, 2, 3, 4, 5) // 1 2 [ 3, 4, 5 ]