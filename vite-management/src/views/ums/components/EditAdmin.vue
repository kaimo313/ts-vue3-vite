<template>
    <el-dialog v-model="dialogVisible" title="Shipping address" width="500" :before-close="close">
        <el-form :model="form" label-width="120px">
            <el-form-item label="Promotion name">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones">
                <el-select v-model="form.name" placeholder="Please select a zone">
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
import { computed, reactive, toRefs } from 'vue'

const props = defineProps<{
    visible: boolean
}>()

const state = reactive({
    form: {
        name: ''
    }
})

const { form } = toRefs(state)

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