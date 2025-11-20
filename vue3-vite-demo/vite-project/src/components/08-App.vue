<template>
    <div class=''>
        <h1>watch的写法</h1>
        <p>{{ num }}</p>
        <button @click="num++">加</button>
        <p>{{ num2 }}</p>
        <button @click="num2++">加2</button>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, watch, toRefs } from 'vue'

let num = ref(20)

// watch(要监听的响应式数据，数据更新的时候执行的回调函数)
watch(num, (n, o) => {
    console.log(n, o)
})

let obj = {
    num2: 33
}

let objRet = reactive(obj)
let { num2 } = toRefs(objRet)
watch(num2, (n, o) => {
    console.log(n, o)
})

</script>

<style lang='scss' scoped>

</style>