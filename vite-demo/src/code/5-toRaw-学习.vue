<template>
    <div>
        <!-- {{ name }} -- {{ age }} -- {{ like }} -->
    </div>
</template>
<script setup lang='ts'>
import { toRaw, reactive } from 'vue'
const person = reactive({
    name: '李登祥',
    age: 22,
    like: 'JK'
})
console.log(person, toRaw(person));

</script>
<style scoped>

</style>
