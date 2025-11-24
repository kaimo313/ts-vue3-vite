<template>
    <div class=''>
        <table>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="item,index in arr2" :key="index">
                <!-- 类型断言 “as 类型”就是 TypeScript 的“强转”，把变量临时当成你指定的形状来用 -->
                <!-- “item”的类型为“未知”，把 item 当成 {name: string} 这种结构来用，别报错。 -->
                <!-- <td>{{ (item as {name: string}).name }}</td> -->
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>
                    <slot name="btns" :index="index"></slot>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

let props = defineProps({
    arr: {
        type: Array,
        default: []
    }
})

interface UserType {
    name: string,
    age: number
}

let arr2 = props.arr as UserType[]

</script>

<style scoped>
table {
    border-collapse: collapse;
}
table,tr,td {
    border: 1px solid #333;
}
tr,td {
    padding: 4px 8px;
}
</style>