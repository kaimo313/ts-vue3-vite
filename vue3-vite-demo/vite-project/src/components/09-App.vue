<template>
    <div class=''>
        <h1>watch 的其他写法和 watchEffect 的使用</h1>
        <p>{{ objRet.num }}</p>
        <button @click="objRet.num++">加num</button>
        <button @click="objRet.age++">加age</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, watch, watchEffect } from 'vue'
let obj = {
    num: 33,
    age: 18
}

let objRet = reactive(obj)
// 方式一
watch(() => objRet.num, (n, o) => {
    console.log(n, o)
})
// 方式二：写成数组，可以监听多个
watch([() => objRet.num, () => objRet.age], (n, o) => {
    console.log('数组方式---->', n, o)
})

// 在页面刷新的时候就立即监听
watchEffect(() => {
    // 凡是写在这里的数据，只要发生变化，都会触发这里的代码执行
    console.log('watchEffect---->', objRet.num, objRet.age)
})
</script>

<style lang='scss' scoped>

</style>