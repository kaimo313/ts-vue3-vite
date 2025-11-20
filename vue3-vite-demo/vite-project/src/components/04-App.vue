<template>
    <div class=''>
        <p ref="pRef">通过 ref 方法获取到元素</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, nextTick } from 'vue'
export default defineComponent({
    setup () {
        let pRef = ref()

        onMounted(() => {
            console.log('onMounted---->', pRef.value)
        })
        nextTick(() => {
            console.log('nextTick---->', pRef.value)
        })
        return {
            pRef
        }
    }
})
</script>

<style lang='scss' scoped>

</style>