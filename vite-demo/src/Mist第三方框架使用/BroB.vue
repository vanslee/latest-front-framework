<template>
    <div>
        <h4>兄弟组件B</h4>
        <div>接收到兄弟组件A传的值： {{ str }}</div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance() as any;
let str = ref<string>('')

const callback = (params: string) => {
    console.log(params, '==================>B');

}

instance?.proxy?.$event_bus.on('on-click', callback)
/**
 *   ·*· 代表监听所有的事件
 */
// instance?.proxy?.$event_bus.on('*', (params: string) => {
//     str.value = params
// })

/**
 * 卸载事件
 */
// instance?.proxy?.$event_bus.off('on-click', callback)

/**
 * 清空所有事件
 */
// instance?.proxy?.$event_bus.all.clear()
</script>
<style scoped>

</style>
