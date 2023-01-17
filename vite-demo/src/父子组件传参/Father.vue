<template>
    <div>
        <h1>父组件</h1>
        <Son ref="sonRef" :title="name" :arr="[1, 2, 3, 4]" @on-click="getName"></Son>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import Son from './Son.vue'
let name = '李登祥'
/**
 * 父组件接受子组件传值的方法
 * @param val 子组件传给父组件的值
 */
const getName = (val: string) => {
    console.log('我是父组件', val);
}
/**
 * 父组件获取子组件暴露的属性
 */
const sonRef = ref<InstanceType<typeof Son>>()
// 父组件不能直接拿到dom,需要在onMounted里拿
onMounted(() => {
    console.log('父组件接收到子组件暴露的属性: ', sonRef.value?.exposeToFather);

})
</script>
<style scoped>

</style>
