<template>
    <div>
        <h1>爷爷级别</h1>
        <label>
            <input v-model="colorVal" value="red" name="color" type="radio" />
            红色
        </label>
        <label>
            <input v-model="colorVal" value="pink" name="color" type="radio" />
            粉色
        </label>
        <label>
            <input v-model="colorVal" value="yellow" name="color" type="radio" />
            黄色
        </label>
        <hr>
        <A />
        <hr>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, provide, readonly } from 'vue'
import A from './ProvideA.vue'
const colorVal = ref<string>('red')
/**
 * 向子组件或者子组件的子组件传值
 */
// provide('color', colorVal)
/**
 * 传的值是可以被子组件修改的，如果像不被修改使用readonly
 */
const readonlyColor = readonly(colorVal)
provide('color', readonlyColor)
</script>
<style scoped>

</style>
