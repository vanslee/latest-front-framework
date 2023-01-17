<template>

    <h1>生命周期</h1>
    <hr>
    <div ref="div">测试数据在生命周期中的存在范围: {{ str }}</div>
    <hr>
    <button @click="change()">修改测试数据</button>

</template>
<script setup lang='ts'>
import {
    ref,
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
    onRenderTracked, onRenderTriggered
} from 'vue'
/**
 * beforCreate created setup语法糖模式是没有这两个生命周期的, 使用 setup 代替
 */
console.log('set up');

const str = ref<string>('张满月')

const div = ref<HTMLDivElement>()


// 1. 创建时的钩子
onBeforeMount(() => { console.log('创建之前======>', div.value?.innerHTML); })
// 2. 创建完成的钩子
onMounted(() => { console.log('创建完成======>', div.value?.innerHTML); })
// 3. 更新之前的钩子
onBeforeUpdate(() => { console.log('更新之前======>', div.value?.innerHTML); })
// 4. 更新完成的钩子
onUpdated(() => { console.log('更新完成======>', div.value?.innerHTML); })
// 5. 销毁之前的钩子
onBeforeUnmount(() => { console.log('销毁之前======>', div.value); })
// 6. 销毁完成的钩子
onUnmounted(() => { console.log('销毁完成======>', div.value); })

// 下面是两个调式时常用的钩子
onRenderTracked((e) => {
    console.log(e);

})
onRenderTriggered((e) => {
    console.log(e);

})

const change = () => {
    str.value = '李知恩'
}

/**
 * 总结
 * onBeforeMount 读不到 dom, onMounted可以读取dom
 * onBeforeUpdate 获取的是更新前的dom,onUpdated获取的是更新后的dom
 */
</script>
<style scoped>

</style>
