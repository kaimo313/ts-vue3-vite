<template>
    <div id="map" style="width: 100%;height:700px;"></div>
</template>

<script lang='ts' setup>
import { watch } from 'vue'
import * as echarts from 'echarts'
import chinaGeojson from '@/mock/data/china.geojson.json'
// ECharts 提供的 API，用于注册地图数据
// 注册后，在 ECharts 的 option 中设置 map: 'china' 即可显示中国地图。
echarts.registerMap('china', chinaGeojson as any)

const props = defineProps<{
    data: {
        areaName: string
        saleNum: number
    }[]
}>()
let myMap: echarts.ECharts;

watch(() => props.data, () => {
    const data = props.data.map(item => ({ name: item.areaName, value: item.saleNum }))
    console.log('data----->', data)
    // 基于准备好的dom，初始化echarts实例
    if(!myMap) {
        myMap = echarts.init(document.getElementById('map'));
        const option = {
            tooltip: {
                show: true,
                formatter: '{b}<br />销量：{c}',
                borderWidth: 0,
                backgroundColor: 'rgba(50, 50, 50, 0.7)',
                textStyle: {
                    color: '#fff'
                }
            },
            series: {
                type: 'map',
                map: 'china',
                itemStyle: {
                    borderColor: '#fff'
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    itemStyle: {
                        areaColor: 'skyblue'
                    }
                },
                data
            },
            // 连续型视觉映射组件
            visualMap: {
                type: 'continuous',
                min: 0,
                max: 1000000,
                calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
                inRange: {
                    color: ['#eeeeee', '#aaaaaa', 'green', 'yellow', 'orange', 'red']
                }
            }
        }
        myMap.setOption(option);
    }
})
</script>

<style lang='less' scoped>

</style>