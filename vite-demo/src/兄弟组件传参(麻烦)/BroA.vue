<template>
    <h3>
        兄弟A
    </h3>
    <button @click="emitB">A组件派发一个事件</button>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from 'vue'
const emit = defineEmits(['on-click'])
let flag = ref<boolean>(false)
const emitB = () => {
    flag.value = !flag.value
    emit('on-click', flag)
}

</script>
<style scoped>

</style>
