<template>
    <div class=''>
        <h1>父组件</h1>
        <button @click="num = 0">修改</button>
        <Child :num="num" @fn="fnCall"></Child>
    </div>
</template>

<script lang='ts' setup>
import Child from './11-AppChild.vue';
import { ref } from 'vue'

let num = ref(20)

const fnCall = () => {
    num.value++
}

</script>

<style lang='scss' scoped>

</style>