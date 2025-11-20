<template>
    <div class=''>
        ref 操作复杂数据类型
        <p>{{ obj2.name }}</p>
        <p>{{ obj2.age }}</p>
        <button @click="handleClick">修改</button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        let obj2 = ref({
            name: '张三',
            age: 18
        })
        console.log(obj2)
        const handleClick = () => {
            obj2.value.name = '李四'
            obj2.value.age = 20
        }
        return {
            obj2,
            handleClick
        };
    }
})
</script>

<style lang='scss' scoped>

</style>