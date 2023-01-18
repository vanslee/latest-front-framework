<template>
    <h4>provideB.vue(孙子级别)</h4>
    <button @click="change()">孙子组件修改颜色为粉色</button>
    <div class="box"></div>
</template>
    
<script setup lang='ts'>
import { inject, Ref, ref } from 'vue'
const color = inject<Ref<string>>('color')

/**
 * 孙子组件修改color值
 */
const change = () => {
    // 使用断言
    color!.value = 'pink'
}
</script>
    
<style>
.box {
    width: 200px;
    height: 200px;
    background-color: v-bind(color);
}
</style>