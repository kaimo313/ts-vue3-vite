import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from 'vue-router'
import { type App } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // 路由配置
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}