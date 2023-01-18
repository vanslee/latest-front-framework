<template>
    <div>
        <h1>我是父组件</h1>
        <button @click="show = !show">开关:{{ show }}</button>
        <hr>
        <div>内容: {{ text }}</div>
        <!-- 一个标签多个v-model -->
        <Dialog v-model="show" v-model:textVal.isBt="text"></Dialog>
    </div>
</template>
 
<script setup lang='ts'>
import Dialog from "./Son.vue";
import { ref } from 'vue'
const show = ref(false)
const text = ref<string>('李知恩')
</script>
 
<style>

</style>