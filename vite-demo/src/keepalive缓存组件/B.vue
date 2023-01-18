<template>
    <div>
        <h1>B组件</h1>
        <input type="text" v-model="value">
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
const value = ref('')
</script>
<style scoped>

</style>
