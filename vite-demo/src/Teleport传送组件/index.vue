<template>
    <div class="parent">
        <h1>我是父级</h1>
        <!-- body: 传送到body标签下,也可以是id名类名 -->
        <!-- disabled: 控制是否把组件传送到body标签下 -->
        <Teleport to="body" :disabled="true">
            <useDialogVue></useDialogVue>
        </Teleport>

    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useDialogVue from './dialog.vue'
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

.parent {
    background-color: yellow;
    height: 50vh;
    position: relative;
}
</style>
