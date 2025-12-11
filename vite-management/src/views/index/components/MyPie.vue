<template>
    <div id="pie" style="width: 100%;height:400px;"></div>
</template>

<script lang='ts' setup>
import { watch } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
    data: {
        name: string
        today_money: string
    }[]
}>()

watch(() => props.data, () => {
    const arr = props.data.map(item => ({ name: item.name, value: item.today_money}))
    console.log('arr---->', arr)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pie'));

    // 指定图表的配置项和数据
    var option = {
        legend: {
            right: 10,
            top: 20,
            width: 300,
            height: 100,
            orient: 'vertical'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['35%', '45%'],
                data: arr
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})
</script>

<style lang='less' scoped>

</style>