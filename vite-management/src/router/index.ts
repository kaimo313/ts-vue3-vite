import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from 'vue-router'
import { type App } from 'vue'
import store from '../store'
import Cookie from 'js-cookie'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // 路由配置
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
    // 1、token && vuex里面的 menus 为空
    const token = Cookie.get('token')
    console.log(store)
    if(token && store.state.menus.length === 0) {
        console.log('menus为空')
        // 获取用户信息
        store.dispatch('getAdminInfoApi');
    }
    next()
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}