<template>
    <el-button @click="flag = !flag">切换组件</el-button>
    <!-- KeepAlive标签 -->
    <!-- include: 只缓存A组件,里面的值不是你引入之后起的组件名，而是引入的文件名 -->
    <!-- exclude: 不缓存B组件， -->
    <!-- max: 缓存最大组件数量，使用lru算法 -->
    <keep-alive :include="['A']" :exclude="['B']" :max="10">
        <A v-if="!flag"></A>
        <B v-else></B>
    </keep-alive>
</template>
<script setup lang='ts'>
import { ref, reactive, onMounted, onActivated, onUnmounted, onDeactivated } from 'vue'
import A from './A.vue'
import B from './B.vue'
let flag = ref<boolean>(false)


</script>
<style scoped>

</style>
