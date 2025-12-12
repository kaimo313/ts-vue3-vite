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
    data: {}[]
}>()
let myMap: echarts.ECharts;

watch(() => props.data, () => {
    // 基于准备好的dom，初始化echarts实例
    if(!myMap) {
        myMap = echarts.init(document.getElementById('map'));
        const option = {
            series: {
                type: 'map',
                map: 'china'
            }
        }
        myMap.setOption(option);
    }
})
</script>

<style lang='less' scoped>

</style>