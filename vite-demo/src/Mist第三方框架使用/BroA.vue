<template>
    <div>
        <h1>我是A组件</h1>
        <button @click="emit">emit</button>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance() as any;
const emit = () => {
    instance?.proxy?.$event_bus.emit('on-click', 'mitt')
}
</script>
<style scoped>

</style>
