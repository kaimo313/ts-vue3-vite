export {}

interface Data {
    a: number;
    b: number;
}

interface Res {
    code: number;
    data: Data[]; // {a: number, b: number}[];
    msg: string;
}

// p对象名:Promise<Res>的类型
let p:Promise<Res> = new Promise((resolve, reject) => {
    resolve({
        code: 0,
        data: [
            {
                a: 1,
                b: 2
            },
            {
                a: 11,
                b: 22
            },
        ],
        msg: 'success'
    })
})

p.then((res) => {
    if(res.code === 0) {
        res.data.map(item => item.a)
    }
})