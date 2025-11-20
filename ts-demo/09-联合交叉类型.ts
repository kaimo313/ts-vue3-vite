export {}

// | & 一起使用


// & 优先于 |

let obj: { name: string } & { age: number } | { name: number } & { age: string };
obj = {
    name: "kaimo",
    age: 18
}
obj = {
    name: 123,
    age: "18"
}