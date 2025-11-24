<template>
    <div class=''>
        <h1>类型增强 declare</h1>
        <h2>TypeScript 的“环境声明”语法”，declare var 是“告诉 TS 某个全局变量已经存在”，只用来消除类型错误，不会生成任何运行时代码。</h2>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

// 找不到名称“globalVar”
console.log('打印index.html定义的全局变量---->', globalVar, globalObj)
fn('313')
</script>

<style lang='scss' scoped>

</style>