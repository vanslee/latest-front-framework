<template>
    <div class="loading" v-if="isShow">
        Loding....
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
console.log(instance);

const isShow = ref<boolean>(false)
const hide = () => {
    isShow.value = false
}
const show = () => {
    isShow.value = true
}
defineExpose({
    isShow,
    hide,
    show
})
</script>
<style scoped>
.loading {
    background-color: black;
    opacity: 0.8;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
</style>
