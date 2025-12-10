<template>
    <el-dialog v-model="dialogVisible" title="编辑用户信息" width="500" :before-close="close">
        <el-form :model="newForm" label-width="120px">
            <el-form-item label="账号">
                <el-input v-model="newForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="newForm.nickName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="newForm.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="newForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="newForm.note" type="textarea" autocomplete="off" />
            </el-form-item>
            <el-form-item label="是否启用">
                <el-radio v-model="newForm.status" :label="1">是</el-radio>
                <el-radio v-model="newForm.status" :label="0">否</el-radio>
            </el-form-item>
        </el-form>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click="close">取消</el-button>
            <el-button type="primary" @click="modifyAdmin">确定</el-button>
        </div>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, reactive, toRefs, watch } from 'vue'
import { updateAdmin } from '@/api/ums'
import { ElMessage } from 'element-plus'

const props = defineProps<{
    visible: boolean,
    form: AdminObjItf
}>()

const state = reactive<{
    newForm: AdminObjItf
}>({
    newForm: {}
})

const { newForm } = toRefs(state)
// 拷贝form
watch(() => props.form, () => {
    newForm.value = { ...props.form }
})

const emit = defineEmits<{
    (event: 'update:visible', value: boolean): void
    (event: 'sure'): void
}>()

// 双向绑定 dialog 显示状态（emit 更新父组件）
const dialogVisible = computed({
    get: () => props.visible,
    set: (val: boolean) => emit('update:visible', val)
})
// 点击关闭
const close = () => {
    dialogVisible.value = false
}
// 确定
const modifyAdmin = () => {
    if(!newForm.value.id) return
    updateAdmin(newForm.value.id, newForm.value).then((res) => {
    if(res.code === 200) {
        close()
        emit('sure')
        ElMessage.success('修改指定用户信息成功')
    } else {
        ElMessage.error('修改指定用户信息失败')
    }
})
}

</script>

<style lang='less' scoped>

</style>