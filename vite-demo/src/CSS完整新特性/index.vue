<template>
    <div>
        这是父组件
        <hr>
        这是子组件
        <A>
            <div class="a">这是插入SloA插槽的内容</div>
        </A>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from './SlotA.vue'
</script>
<style scoped>
:global(div) {
    color: skyblue
}
</style>
