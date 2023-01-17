<template>
    <div>
        toRef: {{ like }}
        <br>
        <button @click="change()">修改</button>
    </div>
</template>
<script setup lang='ts'>
import { toRef, reactive } from 'vue'
const man = reactive({ name: '李登祥', age: 23, like: 'JK' })
const like = toRef(man, 'name')
const change = () => {
    like.value = '洛丽塔'
    console.log(man);
}
</script>
<style scoped>

</style>
