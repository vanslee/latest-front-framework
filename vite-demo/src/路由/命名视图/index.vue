<template>
    <div>
        <router-link to="/tabsC">C组件</router-link>
        <router-link to="/tabsAB" style="margin-left: 20px">AB组件</router-link>
        <hr>
        <router-view></router-view>
        <hr>
        <router-view name="a"></router-view>
        <hr>
        <router-view name="b"></router-view>
        <hr>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped>

</style>
