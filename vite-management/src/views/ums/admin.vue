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
                    <el-button type="text" @click="allocRole(row.id)">分配角色</el-button>
                    <el-button type="text" @click="editAdmin(row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 编辑 -->
        <EditAdmin v-model:visible="visible" :form="rowData" @sure="getTableData"></EditAdmin>
        <!-- 分配权限 -->
        <EditRole v-model:visible="roleVisible" :form="roleData" @sure="getTableData"></EditRole>
    </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs } from 'vue'
import { getAdminListApi, getRoleListAll, getAdminRoleById } from '@/api/ums'
import { ElMessage } from 'element-plus'
import EditAdmin from './components/EditAdmin.vue'
import EditRole from './components/EditRole.vue'

const state = reactive<{
    tableData: {}[]
    visible: boolean,
    rowData: AdminObjItf
    roleVisible: boolean
    roleData: AdminRoleFormData
}>({
    tableData: [],
    visible: false,
    rowData: {},
    roleVisible: false,
    roleData: {}
})

let { tableData, visible, rowData, roleVisible, roleData } = toRefs(state)
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

// 获取所有角色
getRoleListAll().then((res) => {
    if(res.code === 200) {
        roleData.value.roleLists = res.data
    } else {
        ElMessage.error('获取所有角色失败')
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

// 点击编辑按钮
const editAdmin = (row: AdminObjItf) => {
    visible.value = true
    rowData.value = row
}
// 点击分配权限按钮
const allocRole = (id: number) => {
    getAdminRoleById(id).then(res => {
        if(res.code === 200) {
            roleVisible.value = true
            roleData.value.userRoles = res.data
        }
    })
}

</script>

<style lang='less' scoped>

</style>