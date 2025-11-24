<template>
    <div class=''>
        <h1>插槽作用域：在父组件中获取子组件标签内部数据，获取子组件的数据</h1>
        <AppChild>
            <div>我是测试代码</div>
            <template #link>
                <a href="http://">a标签</a>
            </template>
            <!-- 
                scope 这个对象自定义的，但一般都叫 scope 
                scope 专门收集所对应的子组件内部的 slot 标签身上的标签属性，做为自己的属性（除了 name 属性）
            -->
            <template #btn="scope">
                <button>按钮</button>{{ scope }}
            </template>
        </AppChild>
    </div>
</template>

<script lang='ts' setup>
import AppChild from './15-AppChild.vue'
import {  } from 'vue'

</script>

<style lang='scss' scoped>

</style>