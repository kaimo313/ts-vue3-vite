<template>
    <div class=''>
        <h1>toRefs 用法的使用</h1>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <button @click="handleClick">修改</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    setup () {
        // toRefs 的作用：在解构 reactive() 得到的对象的时候，把他们解构成响应式数据
        // 解构出来的数据需要通过 .value 的形式来操作
        let { name, age} = toRefs(reactive({
            name: 'kaimo',
            age: 313
        }))
        const handleClick = () => {
            name.value = '李四'
            age.value = 18
        }
        return {
            name,
            age,
            handleClick
        };
    }
})
</script>

<style lang='scss' scoped>

</style>