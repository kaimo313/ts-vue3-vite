export {}

// 创建类的同时，相当于定义了相同名称的接口
class Person {
    // 定义属性时应该先声明这个类的属性类型，也可以同时设置默认值
    name: string = '张三';
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

// 相当于这个接口
// interface Person {
//     name: string;
//     getName(): string;
// }

let p = new Person('张三');

let obj: Person = {
    name: '李四',
    getName() {
        return "";
    }
}