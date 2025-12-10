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
            <el-table-column label="是否启用">
                <template v-slot:default="scope">
                    <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template #default="{row}">
                    <el-button type="text">分配角色</el-button>
                    <el-button type="text" @click="editAdmin(row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 编辑 -->
        <EditAdmin v-model:visible="visible" :form="rowData" @sure="getTableData"></EditAdmin>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue'
import { getAdminListApi } from '@/api/ums'
import { ElMessage } from 'element-plus'
import EditAdmin from './components/EditAdmin.vue'

const state = reactive<{
    tableData: {}[]
    visible: boolean,
    rowData: AdminObjItf
}>({
    tableData: [],
    visible: false,
    rowData: {}
})

let { tableData, visible, rowData } = toRefs(state)
const getTableData = () => {
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
}
getTableData();

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

// 点击编辑按钮
const editAdmin = (row: AdminObjItf) => {
    visible.value = true
    rowData.value = row
}

</script>

<style lang='less' scoped>

</style>