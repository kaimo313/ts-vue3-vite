<template>
    <div class=''>
        <h1>Teleport 传送门</h1>
        <!-- 能够把里面的标签传送到指定标签的最后的位置 -->
        <teleport to='#test'>
            <div class="kaimo">kaimo文本测试</div>
        </teleport>
        <AppChild :arr="state.arr">
            <template v-slot:btns="scope">
                <button @click="handleEdit(scope.index)">编辑</button>
            </template>
        </AppChild>
        <AppChild :arr="state.arr">
            <template #btns="{index}">
                <button @click="handleEdit(index)">编辑</button>
                <button>删除</button>
            </template>
        </AppChild>
    </div>
</template>

<script lang='ts' setup>
import AppChild from './16-AppChild.vue'
import { reactive } from 'vue'

let state = reactive({
    arr: [
        {
            name: '小红',
            age: 18,
        },{
            name: '小明',
            age: 20,
        }
    ]  
})

const handleEdit = (index: number) => {
    console.log(state.arr[index])
}
</script>

<style lang='scss' scoped>

</style>