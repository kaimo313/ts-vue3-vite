import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'

const app = createApp(App);
// 初始化路由
initRouter(app);
app.mount('#app')
