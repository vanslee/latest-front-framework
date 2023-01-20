<template>
    <div>

    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
instance?.proxy?.$loading1.show();
setTimeout(() => {
    instance?.proxy?.$loading1.hide();
}, 5000);
</script>
<style scoped>

</style>
