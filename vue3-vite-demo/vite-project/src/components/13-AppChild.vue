<template>
    <div class=''>
        我是子组件
        <p>{{ num }}</p>
        <button @click="handleClick">发射事件给父组件</button>
    </div>
</template>

<script lang='ts' setup>
let props = defineProps({
    num: {
        type: Number,
        default: 30
    }
})
let n = props.num

// update: 固定写法，后面的变量是父组件中 v-model: 后面的这个变量
const emit = defineEmits<{
    (event: 'update:num', n: number): void
}>()
const handleClick = () => {
    n++
    emit('update:num', n)
}
</script>

<style lang='scss' scoped>

</style>