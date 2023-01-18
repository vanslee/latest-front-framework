<template>
    <h2>provideA.vue(父亲级别)</h2>
    <div class="box"></div>
    <B></B>
</template>
    
<script setup lang='ts'>
import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import B from './ProvideB.vue'
/**
 * 接受其它组件使用provide传来的值
 */
const color = inject<Ref<string>>('color')

const flag = inject<Ref<number>>('flag', ref(1))



const change = () => {
    flag.value = 2
}
</script>
    
<style>
.box {
    width: 200px;
    height: 200px;
    background-color: v-bind(color);
}
</style>