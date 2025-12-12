<template>
    <el-radio-group v-model="selectLabel" @change="selectChange">
        <el-radio-button label="sale_">销量</el-radio-button>
        <el-radio-button label="_money">销售额</el-radio-button>
    </el-radio-group>
    <el-select v-model="selectDay" @change="selectChange" style="width: 240px; margin-left: 10px;">
        <el-option v-for="item in options"
            :label="item.name"
            :value="item.value">
        </el-option>
    </el-select>
    <div id="pie" style="width: 100%;height:400px;"></div>
</template>

<script lang='ts' setup>
import { reactive, watch, toRefs } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
    data: {}[]
}>()

const state = reactive({
    selectLabel: '_money',
    selectDay: 'today',
    options: [
        { name: '今天', value: 'today' },
        { name: '昨天', value: 'yesterday' },
        { name: '前7天', value: 'seven_days' },
        { name: '前30天', value: 'thirty_days' },
    ],
})

let myChart: echarts.ECharts;

const { selectLabel, selectDay, options } = toRefs(state)

const initPie = () => {
    let key = ''
    if(selectLabel.value === '_money') {
        key = selectDay.value + selectLabel.value
    } else {
        key = selectLabel.value + selectDay.value
    }
    const arr = props.data.map((item: {
        [key:string]: string
    }) => ({ name: item.name, value: item[key]}))
    console.log('arr---->', arr)
    // 基于准备好的dom，初始化echarts实例
    if(!myChart) {
        myChart = echarts.init(document.getElementById('pie'));
    }

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
}

const selectChange = () => {
    initPie()
}

watch(() => props.data, () => {
    initPie()
})
</script>

<style lang='less' scoped>

</style>