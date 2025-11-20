<template>
    <div class=''>
        <h1>计算属性以及get跟set</h1>
        <p>{{ num }}</p>
        <p>{{ dbNum }}</p>
        <button @click="num++">加</button>
        <p>{{ objRet.num }}</p>
        <p>{{ dbNum2 }}</p>
        <button @click="objRet.num++">加</button>
    </div>
</template>

<script lang='ts' setup>
import { ref, computed, reactive } from 'vue'

let num = ref(20)

// computed 返回值就是计算属性的值，接收返回值之后，可以直接在上面展示
let dbNum = computed(() => {
    return num.value * 2
})

let obj = {
    num: 10
}
let objRet = reactive(obj)
let dbNum2 = computed(() => {
    return objRet.num * 2
})

// get 跟 set
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
</script>

<style lang='scss' scoped>

</style>