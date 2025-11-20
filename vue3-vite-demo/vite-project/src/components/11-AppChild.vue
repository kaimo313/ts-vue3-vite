<template>
    <div class=''>
        我是子组件
        <p>{{ num }}</p>
        <button @click="handleClick">发射事件给父组件</button>
    </div>
</template>

<script lang='ts' setup>
// defineProps 和 defineEmits 都是只能在 <script setup> 中使用的`编译器宏`。
// 他们不需要导入，且会随着 <script setup> 的处理过程一同被编译掉。

defineProps({
    num: {
        type: Number,
        default: 30
    }
})

// 子传父的时候需要先定义好 emit 这个方法
// const emit = defineEmits(['fn'])
const emit = defineEmits<{
    (event: 'fn'): void
}>()
const handleClick = () => {
    emit('fn')
}
</script>

<style lang='scss' scoped>

</style>