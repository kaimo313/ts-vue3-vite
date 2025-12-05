import { createStore } from 'vuex'
import { type App } from 'vue'

interface MenuObj {
    id: string
    parentId: string
    children?: MenuObj[]
}

interface State {
    menus: MenuObj[]
}

interface NewMenus {
    [key: string]: Partial<MenuObj>
}

const store = createStore<State>({
    state() {
        return {
            menus: []
        }
    },
    getters: {
        getNewMenus(state) {
            const newMenus: NewMenus = {}
            const menus = state.menus

            for (let i = 0; i < menus.length; i++) {
                const menu = menus[i] as MenuObj
                if (menu.parentId === '0') {
                    // 一级菜单：初始化 children 为空数组，方便后续 push
                    newMenus[menu.id] = {
                        ...menus[i],
                        children: newMenus[menu.id]?.children || []
                    }
                } else {
                    // 子级菜单：根据 parentId 找到对应的父级
                    const parentId = menu.parentId
                    newMenus[parentId] = newMenus[parentId] || {}
                    newMenus[parentId].children = newMenus[parentId].children || []
                    newMenus[parentId].children.push(menu)
                }
            }
            console.log('newMenus--------------------', newMenus)
            return newMenus;
        }
    },
    mutations: {
        updateMenus(state, menus) {
            console.log('updateMenus--->', state, menus)
            state.menus = menus
        }
    },
    actions: {},
    modules: {}
})

export const initStore = (app: App<Element>) => {
    app.use(store)
}

export default store