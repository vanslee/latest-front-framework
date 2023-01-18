<template>
    <div>
        <h3>
            兄弟A
        </h3>
        <button @click="emitB">A组件派发一个事件</button>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from 'vue'
/**
 * 使用自定义事件总线
 */
import Bus from './Bus'

let flag = ref<boolean>(false)
const emitB = () => {
    flag.value = !flag.value
    Bus.emit('on-click', flag)
}

</script>
<style scoped>

</style>
