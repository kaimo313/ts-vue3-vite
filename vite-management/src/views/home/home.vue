<template>
    <div class="home-container">
        <div class="home-header">头部</div>
        <div class="home-menu">
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <el-sub-menu v-for="menu in newMenus" :index="menu.id">
                    <template #title>
                        <span>{{ menu.title }}</span>
                    </template>
                    <template v-for="submenu in menu.children">
                        <el-menu-item v-if="submenu.hidden === 0" :index="submenu.id">{{ submenu.title }}</el-menu-item>
                    </template>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="home-content">右侧内容</div>
    </div>
</template>

<script lang='ts' setup>
/**
{
    id: {
        title: "一级菜单"，
        children: [
            {title: "二级菜单"},
            {title: "二级菜单"},
            {title: "二级菜单"},
            {title: "二级菜单"},
        ]
    }
}
 * */ 
import { } from 'vue'
import { useStore } from 'vuex'

interface MenuObj {
    id: string
    title: string
    parentId: string
    hidden: 0 | 1
    children?: MenuObj[]
}

interface NewMenus {
    [key: string]: MenuObj
}

const store = useStore();
const newMenus: NewMenus = store.getters.getNewMenus;
console.log('newMenus---------home-----------', newMenus)
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
