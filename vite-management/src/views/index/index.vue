<template>
    <div class=''>
        <MyPie :data="salePie"></MyPie>
    </div>
</template>

<script lang='ts' setup>
import MyPie from './components/MyPie.vue'
import { reactive, toRefs } from 'vue'
import { getAdminStat} from '@/api/index'
import { ElMessage } from 'element-plus'

const state = reactive<{
    salePie: {}[]
}>({
    salePie: []
})

let { salePie } = toRefs(state)

getAdminStat().then((res) => {
    if(res.code === 200) {
        salePie.value = res.data.salePie
    } else {
        ElMessage.error('获取首页数据失败')
    }
})

</script>

<style lang='less' scoped>

</style>