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
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('../views/home/home.vue')
    // },
    // 动态生成的路由配置结构需要如下
    // {
    //     path: '/pms',
    //     name: 'pms',
    //     component: () => import('../views/home/home.vue'),
    //     children: [
    //         {
    //             path: 'product',
    //             name: 'product',
    //             component: () => import('../views/pms/product.vue'),
    //         }
    //     ]
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes // 路由配置
})

// 根据 getters 里面的菜单生成路由规则
const genRoutes = () => {
    const menus = store.getters.getNewMenus;
    console.log('menus--->', menus)
    // const newRoutes:RouteRecordRaw[] = []
    // 循环菜单对象
    for(let key in menus) {
        const newRoute: RouteRecordRaw = {
            path: `/${menus[key].name}`,
            name: menus[key].name,
            component: () => import(`../views/home/home.vue`),
            redirect: `/${menus[key].name}/${menus[key].children[0].name}`,
            children: []
        }
        for(let i = 0; i < menus[key].children.length; i++) {
            newRoute.children?.push({
                path: menus[key].children[i].name,
                name: menus[key].children[i].name,
                component: () => import(`../views/${menus[key].name}/${menus[key].children[i].name}.vue`),
            })
        }
        // 动态添加路由规则
        router.addRoute(newRoute)
    }
    // 动态添加首页
    router.addRoute({
        path: "/",
        name: "home",
        component: () => import(`../views/home/home.vue`),
        redirect: '/index', // 访问 / 跳转到 /index 然后匹配上 index.vue
        children: [{
            path: "index",
            name: "index",
            component: () => import(`../views/index/index.vue`),
        }]
    })
    console.log('routes--->', routes)
}

// 前置导航守卫
router.beforeEach((to, from, next) => {
    // 1、token && vuex里面的 menus 为空
    const token = Cookie.get('token')
    console.log(store)
    if(token && store.state.menus.length === 0) {
        console.log('menus为空')
        // 获取用户信息
        store.dispatch('getAdminInfoApi').then(() => {
            genRoutes()
            // 路由规则没有刷新，需要再次next进入路由守卫
            next(to)
        })
    } else if(token && store.state.menus.length !== 0 && to.path === '/temp' && from.path === '/login') {
        // 第一次登录，动态添加路由规则 to.path === '/index' 要改成其他路由 /temp 避免登录进来进入 index 直接死循环
        genRoutes()
        // 路由规则没有刷新，需要再次next进入路由守卫
        next()
    } else {
        next()
    }
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}