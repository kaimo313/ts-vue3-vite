<template>
    <div>
        <p>P1：{{ num }}</p>
        <p>P2：{{ num2 }}</p>
        <button @click="handleClick">增加</button>
    </div>
</template>
    
<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
    setup() {
        // 通过 ref 创建响应式数据
        // js 中要操作 num2 这种响应式数据需要添加 value
        // 模板使用 num2 不需要加 value，可以直接使用，因为 vue 在编译模板的时候已经帮我们用 .value 获取一次了
        let num = 100
        let num2 = ref(100)
        console.log(num2)
        const handleClick = () => {
            num++
            num2.value++
        }
        return {
            num,
            num2,
            handleClick
        }
    }
})
</script>
    
<style>
    
</style>