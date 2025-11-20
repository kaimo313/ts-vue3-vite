export {}

// 泛型-类型别名
type StringOrNumber = string | number

type ObjType<N, G> = {
    name: N,
    getName: () => G
}

let obj: ObjType<StringOrNumber, StringOrNumber> = {
    name: '张三', 
    getName() {
        return 1
    }
}

// 泛型-接口 可以设置默认的类型，在使用的时候就可以不传
interface Person<N, G = number> {
    name: N,
    getName: () => G
}

let obj2: Person<StringOrNumber> = {
    name: '张三', 
    getName() {
        return 1
    }
}