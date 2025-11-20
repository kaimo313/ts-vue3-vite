export {}

type Person = {
    name: string;
    age: number;
    [idx: number]: number | string;
    [idx: string]: number | string;
}

// keyof 后面一般跟接口，表示接口的这些属性名之一

type PersonTpye = keyof Person; // 'name' | 'age' | number | string

let p: PersonTpye;

p = 'name';
p = 'age';
p = 0;
p = '1';

type StrOrNum = string | number;

type PersonType2 = {
    [k in StrOrNum]: string
}

let obj: PersonType2 = {
    1: '1',
    name: '1'
}

// typeof 提取变量或者对象的类型
let s = 'abc';
type StrType = typeof s; // string

let a: StrType = "123";

let obj2 = {
    name: '123',
    age: 123
}

type ObjType = typeof obj2;

let obj3: ObjType = {
    name: '123',
    age: 123,
}
