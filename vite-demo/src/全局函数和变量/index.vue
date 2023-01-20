<template>
    <div>
        使用main.ts里定义的全局变量:
        {{ $env }}
        <hr>
        调用main.ts里定义的全局函数:
        {{ $filters.format('字符串') }}
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const str = instance?.proxy?.$filters.format('测试')
console.log(str);
console.log(instance?.proxy?.$env);
console.log(instance);

</script>
<style scoped>

</style>
