<template>
    <div style="margin-left: 20px">

        <router-link to="/user/login">注册</router-link>
        <router-link to="/user/detail" style="margin-left: 20px">商品详情</router-link>
    </div>
    <hr>
    <hr>
    <hr>
    <hr>
    <router-view></router-view>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped>

</style>
