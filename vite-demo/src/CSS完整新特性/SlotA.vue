<template>
    <div>
        我是插槽
        <slot class="a">这是SlotA组件插槽</slot>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped>
:slotted(.a) {
    background-color: red;
}
</style>
