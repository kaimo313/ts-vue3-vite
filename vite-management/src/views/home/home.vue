<template>
    <div class="home-container">
        <h1>欢迎，{{ username }}！</h1>
        <p>登录成功，这是首页</p>
        <el-button @click="logout">退出登录</el-button>
    </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const username = ref('')

onMounted(() => {
    username.value = localStorage.getItem('username') || '用户'
})

const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    ElMessage.success('已退出登录')
    router.push('/login')
}
</script>

<style lang='less' scoped>
.home-container {
    padding: 40px;
    text-align: center;
    
    h1 {
        margin-bottom: 20px;
    }
}
</style>

