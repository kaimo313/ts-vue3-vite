<template>
    <div class="home-container">
        <div class="home-header">头部</div>
        <div class="home-menu">菜单</div>
        <div class="home-content">右侧内容</div>
    </div>
</template>

<script lang='ts' setup>
import {  } from 'vue'

</script>

<style lang='less' scoped>
.home-container {
    position: relative;
    height: 100%;
    .home-header {
        height: 70px;
        background-color: goldenrod;
    }
    .home-menu {
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        width: 250px;
        background-color: #a37676;
    }
    .home-content {
        position: absolute;
        top: 70px;
        right: 0;
        left: 250px;
        bottom: 0;
        background-color: skyblue;
    }
}
</style>

