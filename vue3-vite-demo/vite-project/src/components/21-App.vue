<template>
    <div class=''>
        <h1>配置项目路径别名</h1>
        <AppChild></AppChild>
    </div>
</template>

<script lang='ts' setup>
// [vite] Internal server error: Failed to resolve import "@/components/17-AppChild.vue" from "src/components/21-App.vue". Does the file exist?

// TS 这里没有对@进行报错是：是因为继承的 tsconfig 开启了 moduleResolution: "bundler"，它不强制校验这些裸模块路径
// 要让运行时正常，还得在 vite.config.ts 的 resolve.alias（以及可选的 tsconfig paths）里手动把 @ 指到 src。
import AppChild from '@/components/17-AppChild.vue'
// import type { UserType } from '../../types/16'
import type { UserType } from 'types/16'

import {  } from 'vue'
let props = defineProps({
    arr: {
        type: Array,
        default: []
    }
})

let arr2 = props.arr as UserType[]


</script>

<style lang='scss' scoped>

</style>