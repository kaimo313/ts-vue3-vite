export {}

interface NameInterface {
    readonly name: string // readonly 属性 表示这个属性只允许读取，修改就报错
}

interface AgeInterface {
    age?: number // 属性名? 表示这个属性是可以缺省的，定义数据不写也没有问题
}

// 接口的继承 特点是具有父接口的属性类型
interface PersonInterface extends NameInterface, AgeInterface {
    height: number
}

const person: PersonInterface = {
    name: '张三',
    age: 18,
    height: 180
}

// person.name = 'kaimo' // 只读属性不能修改

// 接口可以同名 特点是合并了（都具有）所有属性类型
interface A {
    name: string
}
interface A {
    age: string
}

let obj: A = {
    name: '张三',
    age: '18'
}

