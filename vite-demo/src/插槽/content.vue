<template>
    <Dialog>
        <template v-slot:header>
            <div>我在上面被插入</div>
        </template>
        <template v-slot="{ index, data }">
            <div>
                {{ data.name }} --- {{ data.age }} --- {{ index }}
            </div>
        </template>
        <template #[name]>
            <div>我在下面被插入1</div>
        </template>
    </Dialog>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Dialog from './dialog.vue';

/**
 * 动态插槽
 * 前提: 插槽得有名字
 */
const name = ref('footer')
</script>
<style scoped>

</style>
