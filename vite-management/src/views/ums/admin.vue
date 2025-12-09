<template>
    <div class=''>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号"/>
            <el-table-column prop="username" label="账号"/>
            <el-table-column prop="nickName" label="姓名"/>
            <el-table-column prop="email" label="邮箱"/>
            <el-table-column label="添加时间">
                <template v-slot:default="scope">
                    {{ formateDate(scope.row.createTime) }}
                </template>
            </el-table-column>
            <el-table-column label="最后登录">
                <template v-slot:default="scope">
                    {{ formateDate(scope.row.loginTime) }}
                </template>
            </el-table-column>
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

const addZero = (num: number) => {
    return num > 9 ? num : '0' + num
}

// 格式化时间
const formateDate = (time: string | undefined) => {
    if (!time) return '';
    const date = new Date(time);
    const year = date.getFullYear();
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());
    let hour = addZero(date.getHours());
    let min = addZero(date.getMinutes());
    let sec = addZero(date.getSeconds());
    return  `${year}-${month}-${day} ${hour}:${min}:${sec}`
}

</script>

<style lang='less' scoped>

</style>