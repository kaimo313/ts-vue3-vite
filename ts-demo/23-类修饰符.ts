export {}

// 类里面定义的属性，默认的修饰符就是public，public修饰的属性和方法可以在类的内/外部访问，子类也可以访问

// protected修饰的属性和方法只能在类的内部访问，子类可以访问，外部不能访问
// private修饰的属性和方法只能在类的内部访问，子类和外部都不能访问
// readonly设置属性为只读，只能读取不能修改
// static 静态属性 专门给类用的，可以修改
class Person {
    public readonly name: string
    // protected name: string
    // private name: string
    static title: string = '人'
    constructor(name: string) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let p = new Person('张三')

Person.title = '人2'

console.log(Person);