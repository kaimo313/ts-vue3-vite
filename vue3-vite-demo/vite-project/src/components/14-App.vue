<template>
    <div class=''>
        <h1>匿名插槽和具名插槽</h1>
        <AppChild>
            <div>我是测试代码</div>
            <template v-slot:link>
                <a href="http://">a标签</a>
            </template>
            <template v-slot:btn>
                <button>按钮</button>
            </template>
        </AppChild>
    </div>
</template>

<script lang='ts' setup>
import AppChild from './14-AppChild.vue'
import {  } from 'vue'

</script>

<style lang='scss' scoped>

</style>