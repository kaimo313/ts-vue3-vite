export {}

type Person = {
  name: string;
  age: number;
}

let obj:Person = {
    name: '张三',
    age: 18
}

// 通过 Partial<Person> 将 Person 的所有属性变为可选的
let obj2: Partial<Person> = {
    name: '李四'
}

/**
Partial：部分（表示可以拿部分属性来用），ts 提供的

type Partial<T> = { [P in keyof T]?: T[P] | undefined; }

keyof T 获取T的所有属性名，返回联合类型

***
interface Person { name: string; age: number; }
keyof Person   // 得到  "name" | "age"
***

{ [P in keyof T]?: T[P] | undefined; } 遍历T的所有属性名，将属性值变为可选的

P in ... 表示“遍历这个联合类型”，T[P] 获取 T 中 P 属性的类型

***
{
    name?: string | undefined;
    age?: number | undefined;
}
***
**/