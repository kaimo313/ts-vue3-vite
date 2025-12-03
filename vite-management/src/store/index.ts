import { createStore } from 'vuex'
import { type App } from 'vue'

const store = createStore<{ menus: {}[] }>({
    state() {
        return {
            menus: []
        }
    },
    getters: {},
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