import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from 'vue-router'
import { type App } from 'vue'

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

export const initRouter = (app: App<Element>) => {
    app.use(router)
}