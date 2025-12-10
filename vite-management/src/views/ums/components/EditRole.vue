<template>
    <el-dialog v-model="dialogVisible" title="分配角色" width="420" :before-close="close">
        <el-form :model="form" label-width="70px">
            <el-form-item label="权限">
                <el-select v-model="roles" multiple>
                    <el-option v-for="role in form.roleLists" :label="role.name" :value="role.id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="modifyRole">确定</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang='ts' setup>
import { computed, reactive, toRefs, watch } from 'vue'

const props = defineProps<{
    visible: boolean,
    form: AdminRoleFormData
}>()

const state = reactive<{
    roles: number[]
}>({
    roles: []
})

const { roles } = toRefs(state)
// 拷贝form
watch(() => props.form.userRoles, () => {
    roles.value = props.form.userRoles?.map(el => el.id) || []
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
const modifyRole = () => {
    close()
}

</script>

<style lang='less' scoped>

</style>