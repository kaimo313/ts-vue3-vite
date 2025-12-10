<template>
    <el-dialog v-model="dialogVisible" title="Shipping address" width="500" :before-close="close">
        <el-form :model="newForm" label-width="120px">
            <el-form-item label="Promotion name">
                <el-input v-model="newForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones">
                <el-select v-model="newForm.nickName" placeholder="Please select a zone">
                <el-option label="Zone No.1" value="shanghai" />
                <el-option label="Zone No.2" value="beijing" />
                </el-select>
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
    close()
}

</script>

<style lang='less' scoped>

</style>