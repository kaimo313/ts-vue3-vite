declare function $(n:string):any

// 对象名.方法名 需要用命名空间来写 $.ajax()
declare namespace ${
    function ajax():void
}

// 市面上写好了的针对 jquery 的 ts 类型声明 npm i --save-dev @types/jquery 