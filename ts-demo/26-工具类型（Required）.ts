export {}

type Person = {
  name: string;
  age: number;
  height?: number;
}

let obj:Person = {
    name: '张三',
    age: 18
}

// Required 将 <> 里面这个接口类型的属性设置成不可缺省
let obj2: Required<Person> = {
    name: '李四',
    age: 18,
    height: 188
}

/**
type Required<T> = { [P in keyof T]-?: T[P]; }

keyof T // "name" | "age" | "height"

-? 抵消，去掉这个 ?

{
    name: string;
    age: number;
    height: number;
}

**/