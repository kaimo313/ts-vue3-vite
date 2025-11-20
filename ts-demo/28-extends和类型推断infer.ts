export {}

// 如果 P 是 string 或 number 的“子类型”，那么 FnType<P> 就是 P 的数组类型；否则就等于 P 本身
// extends ... ? ... : ... 是 TypeScript 的类型级三目运算
type FnType<P> = P extends string | number ? P[] : P;

let obj: FnType<string> = ['a'];
let obj2: FnType<boolean> = true;
let obj3: FnType<number> = [1,2];

// infer 只能出现在条件类型的 extends 子句里
// infer 让编译器在“匹配类型”的同时，把未知类型“拎出来”做成变量，供后续使用
type ObjType<T> = T extends {
    name: infer N,
    age: infer A
} ? [N, A] : null

let obj4: ObjType<{name: string, age: number}> = ['name', 1];
let obj5: ObjType<boolean> = null;
let obj6: ObjType<{name: 'kaimo', age: 313}> = ['kaimo', 313];
let obj7: ObjType<{ name: boolean; age: Date }> = [true, new Date()];

// “先捕获、再原样返回”，本身等价于恒等函数
type TestType<T> = T extends infer G ? G : null

let a: TestType<string> = 'kaimo'
let b: TestType<number | boolean> = true