<template>
    <div>
        <button @click="add">数字递增</button>
        {{ count }}
    </div>
</template>
<script setup lang='ts'>
import { $ref, $$ } from 'vue/macros'
let count = $ref<number>(0)
const add = () => {
    count++
}
/**
 * watch是无法监听$ref对象的
 */
watch(count, (value, oldVal) => {
    //count变化也不会执行
    console.log('新值', value);
    console.log('旧值', oldVal);
})
/**
 * $$(count) 这样就可以监听了
 */
watch($$(count), (value, oldVal) => {
    console.log('新值', value);
    console.log('旧值', oldVal);
})

</script>
<style scoped>

</style>
