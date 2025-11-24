<template>
    <div class=''>
        <h1>全选不全选联动案例</h1>
        <input type="checkbox" v-model="checkAll"> 全选/全不选
        <ul>
            <li v-for="item, index in list" :key="item">
                <input type="checkbox" v-model="checkList[index]">{{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, computed } from 'vue'

let data = reactive<DataType>({
    list: [10, 20, 30, 40],
    checkList: []
})

data.checkList = data.list.map(() => false)

let { list, checkList } = toRefs(data)

console.log(checkList)

// checkAll 受 checkList 影响
// checkAll 被修改的时候执行 set 里面的代码
let checkAll = computed({
    get() {
        // 没找到 false 就说明全选中
        return !data.checkList.includes(false)
    },
    set(newVal) {
        console.log('checkAll---->', newVal)
        data.checkList = data.checkList.map(() => newVal)
    }
})


</script>

<style lang='scss' scoped>

</style>