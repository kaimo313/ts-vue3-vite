export {}

type StringOrNumber = string | number

interface Person<N extends StringOrNumber, G>{
    name: N, // 只接受 字符串 或者 数字
    getName: () => G,
}

let obj: Person<number, number> = {
    name: 123,
    getName() {
        return 1
    }
}