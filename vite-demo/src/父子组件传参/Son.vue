<template>
    <div>
        <h4>子组件</h4>
        父传值1 {{ title }}
        <hr>
        父传值2 {{ arr }}
    </div>
    <button @click="send()">给父组件传值</button>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
/**
 * 接受父组件值的两种方式
 */
// const props = defineProps({
//     title: {
//         type: String,
//         default: '默认值'
//     }
// })
// const props = defineProps<{
//     title: string,
//     arr: number[]
// }>()

/**
 * ts特有的定义默认值 withDefaults
 */
withDefaults(defineProps<{
    title: string,
    arr: number[]
}>(), {
    title: () => '默认值',
    arr: () => [6, 5, 4, 3, 2, 1]
})
/**
 * 子组件给父组件传值
 */
// const emit = defineEmits(['on-click'])
// const send = () => {
//     emit('on-click', '李知恩')
// }
/**
 * 子组件给父组件传值方式2(ts特有)
 */
const emit = defineEmits<{
    (e: "on-click", name: string): void
    (e: "on-mount", name: string): void
}>()
const send = () => {
    emit('on-click', '李知恩')
}
/**
 * 子组件向父组件暴露属性
 */
defineExpose({
    exposeToFather: '李登祥'
})
</script>
<style scoped>

</style>
