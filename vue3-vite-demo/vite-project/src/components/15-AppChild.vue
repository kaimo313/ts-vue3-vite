<template>
    <div class=''>
        <slot name="btn" title="kaimo" :myNum="num"></slot>
        <p>我是子组件</p>
        <slot name="link"></slot>
        <slot></slot>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

let num = ref(313)
</script>

<style lang='scss' scoped>

</style>