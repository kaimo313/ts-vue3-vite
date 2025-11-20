<template>
    <div class=''>
        <p>reactive 返回一个对象的响应式代理</p>
        <p>{{ obj.name }}</p>
        <p>{{ obj.age }}</p>
        <button @click="handleClick">修改</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
    setup () {
        // ref 用来实现基础数据类型的响应式
        // reactive 用来实现复杂数据类型的响应式

        // reactive 不用.value 就是 Proxy 代理对象
        let obj = reactive({
            name: '张三',
            age: 18
        })
        console.log('obj---->', obj)
        // ref .value 才是 Proxy 代理对象
        let obj2 = ref({
            name: '张三',
            age: 18
        })
        console.log('obj2---->', obj2)
        const handleClick = () => {
            // 不需要 .value
            obj.name = '李四'
            obj.age = 20
        }
        return {
            obj,
            obj2,
            handleClick
        };
    }
})
</script>

<style lang='scss' scoped>

</style>