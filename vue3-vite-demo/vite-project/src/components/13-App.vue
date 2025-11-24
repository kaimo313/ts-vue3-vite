<template>
    <div class=''>
        <h1>v-model的传值</h1>
        <AppChild v-model:num="num"></AppChild>
    </div>
</template>

<script lang='ts' setup>
import AppChild from './13-AppChild.vue'
import { ref } from 'vue'

let num = ref(20)
</script>

<style lang='scss' scoped>

</style>