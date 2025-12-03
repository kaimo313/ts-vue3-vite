import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'
import { initStore } from './store'
// 导入 Element Plus 样式
import 'element-plus/dist/index.css'

const app = createApp(App);
// 初始化路由
initRouter(app);
// 初始化vuex
initStore(app);
app.mount('#app')
