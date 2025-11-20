export {}

/**
 * 抽象类是普通类的描述，指定一个类的规范，给普通的类去继承
 * 继承之后，普通类必须定义抽象类中的抽象属性和抽象方法
 * 
 * 抽象类 Person，定义了人员的基本结构和行为
 * 这是一个抽象类，不能被实例化，只能被继承
 */
abstract class Person {
    // 抽象属性 name，必须在子类中实现
    abstract name: string;
    // 抽象属性 age，必须在子类中实现
    abstract age: number;
    // 抽象方法 getName()，必须在子类中实现
    abstract getName(): string;
    // 具体方法 getAge()，已在父类中实现，子类可以直接继承使用
    getAge() {
        return this.age;
    }
}

// 普通类
class Student extends Person {
    // 实现抽象属性 name
    name: string = 'kk';
    // 实现抽象属性 age
    age: number = 0;
    // 实现抽象方法 getName()
    getName(): string {
        return this.name;
    }
}

let s = new Student();

console.log(s.getName());
console.log(s.getAge());

// new Person(); // 报错，抽象类不能被实例化

// 书写接口给类用
interface PersonInterface {
    name: string;
    age: number;
    getName(): string;
}

// implements 用于类实现接口
class M implements PersonInterface {
    name: string = 'kmm';
    age: number = 18;
    getName(): string {
        return this.name;
    }
}

let m = new M();
m.name = 'kkk';