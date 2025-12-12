<template>
    <div class=''>
        <MyPie :data="salePie"></MyPie>
        <MyMap :data="saleMap"></MyMap>
    </div>
</template>

<script lang='ts' setup>
import MyPie from './components/MyPie.vue'
import MyMap from './components/MyMap.vue'
import { reactive, toRefs } from 'vue'
import { getAdminStat} from '@/api/index'
import { ElMessage } from 'element-plus'

const state = reactive<{
    salePie: {}[]
    saleMap: {}[]
}>({
    salePie: [],
    saleMap: []
})

let { salePie, saleMap } = toRefs(state)

getAdminStat().then((res) => {
    if(res.code === 200) {
        salePie.value = res.data.salePie
        saleMap.value = res.data.saleMap
    } else {
        ElMessage.error('获取首页数据失败')
    }
})

</script>

<style lang='less' scoped>

</style>