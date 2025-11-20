<template>
    <div class=''>
        <h1>setup 语法糖</h1>
        <p>{{ num }}</p>
        <button @click="num++">加</button>
    </div>
</template>

<script lang='ts' setup>
// setup 语法糖添加之后，script 之间的代码会被 vue 内部自动添加到原先的 setup 方法中
import { reactive, toRefs } from 'vue'

let obj = {
    num: 313
}

let objRet = reactive(obj)
let { num } = toRefs(objRet)

</script>

<style lang='scss' scoped>

</style>