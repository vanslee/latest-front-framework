<template>
    <div>
        <h3>
            兄弟B
        </h3>
        <div>接收到兄弟A传的值: {{ flag }}</div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from 'vue'
/**
 * 使用自定义事件总线接受
 */
import Bus from './Bus'
let flag = ref<boolean>(false)
Bus.on('on-click', (params: Ref<boolean>) => {
    flag.value = params.value
})

</script>
<style scoped>

</style>
