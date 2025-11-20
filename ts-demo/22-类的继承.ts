export {}

class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Student extends Person {
    age: number
    constructor(name: string, age: number) {
        // 调用父类的constructor构造函数，并传入参数
        super(name)
        this.age = age
    }
    // 重写父类的方法
    getName() {
        return '我叫Student'
    }
}

const student = new Student('张三', 18)

console.log(student);
console.log(student.getName());