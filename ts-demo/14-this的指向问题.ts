// // 在全局上，给 window 接口拓展这个属性
// interface Window {
//     myName: string
// }

// // ts 提供了 Window 类型，window 就是 Window 类型的一个对象
// function Person(this: Window, name: string) {
//     // 在 ts 中，需要指明 this 的指向，在函数的第一个形参的位置注明
//     // Window 类型中没有 myName 属性，所以需要自己拓展这个属性
//     this.myName = name
// }

// window.Person('张三')