<template>
    <div class=''>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号"/>
            <el-table-column prop="username" label="账号"/>
            <el-table-column prop="nickName" label="姓名"/>
            <el-table-column prop="email" label="邮箱"/>
            <el-table-column prop="createTime" label="添加时间"/>
            <el-table-column prop="loginTime" label="最后登录"/>
            <el-table-column prop="status" label="是否启用"/>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue'
import { getAdminListApi } from '@/api/ums'
import { ElMessage } from 'element-plus'

const state = reactive<{
    tableData: {}[]
}>({
    tableData: []
})

let { tableData } = toRefs(state)

getAdminListApi({
    keyword: '',
    pageNum: 1,
    pageSize: 10
}).then((res) => {
    if(res.code === 200) {
        tableData.value = res.data.list
    } else {
        ElMessage.error('获取用户数据列表失败')
    }
})

</script>

<style lang='less' scoped>

</style>