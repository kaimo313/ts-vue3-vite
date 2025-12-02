import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'
// 导入 Element Plus 样式
import 'element-plus/dist/index.css'

const app = createApp(App);
// 初始化路由
initRouter(app);
app.mount('#app')
