<template>
    <!-- 异步组件得写在Suspense标签中 -->
    <Suspense>
        <!-- Suspense提供了两种插槽 -->
        <template #default>
            <!-- default插槽写异步组件 -->
            <SyncVue></SyncVue>
        </template>
        <template #fallback>
            <!-- fallback插槽写普通组件 -->
            <SeketonVue></SeketonVue>
        </template>
    </Suspense>
</template>
<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
import SeketonVue from './skeleton.vue'
/**
 * 引入异步组件的两种方式,回调函数
 */
const SyncVue = defineAsyncComponent(() => import('./sync.vue'))

</script>
<style scoped>

</style>
