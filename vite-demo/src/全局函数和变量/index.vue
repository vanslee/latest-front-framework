<template>
    <div>
        使用main.ts里定义的全局变量
        {{ $env }}
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped>

</style>
