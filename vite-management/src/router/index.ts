import {
    createRouter,
    createWebHashHistory,
    type RouteRecordRaw
} from 'vue-router'

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

export default router