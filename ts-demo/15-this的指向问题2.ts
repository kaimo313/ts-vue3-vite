export {} // 加了这个之后的写法，通过 global.d.ts 文件来定义全局变量

// ts 提供了 Window 类型，window 就是 Window 类型的一个对象
function Person(this: Window, name: string) {
    // 在 ts 中，需要指明 this 的指向，在函数的第一个形参的位置注明
    // Window 类型中没有 myName 属性，所以需要自己拓展这个属性
    this.myName = name
}

window.Person = Person

window.Person('张三')