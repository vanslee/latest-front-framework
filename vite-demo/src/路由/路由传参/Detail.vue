<template>
    <div>
        <button @click="router.back()">返回</button>
        <hr>
        商品详情
        <hr>
        商品ID: {{ route.query.id }}
        <br>
        商品名: {{ $route.query.name }}
        <br>
        商品价格: {{ route.query.price }}
        <br>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
</script>
<style scoped>

</style>
