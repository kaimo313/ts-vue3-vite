export {}

type ObjType = {
    name: string
    Person: (name: string) => void
}

let obj: ObjType = {
    name: 'obj',
    Person: () => {}
}

// 定义函数的时候，this的类型必须和调用的时候的类型一致
// 
// this:Window | ObjType 可以给多种类型所对应的对象，让this去指向
function Person(this:Window | ObjType, name: string) {
    this.name = 'person'
}

obj.Person = Person
obj.Person('kaimo')

window.Person = Person
window.Person('kaimo')