<template>
    <div>
        {{ name }}
    </div>
</template>
<script setup lang='ts'>
import { $ } from 'vue/macros'
const person = reactive({
    name: '李登祥',
    age: 22
})
/**
 * 普通解构,变量是基础类型
 */
// let { name, age } = person
// console.log('普通解构', name, age);
// name = '李知恩'
/** 修改name, person里面的name属性不会修改  */
// console.log(person);

/**
 * toRefs,解构的变量是ref类型,所以修改值得加.value
 */
// const { name, age } = toRefs(person)
// console.log('toRefs()', name, age);
// age.value = 23
/**
 * $(),解构的变量打印虽然是基本类型,但是其实是浅拷贝
 */
let { name, age } = $(person)
console.log('$()', name, age);
name = '李知恩'
/** 修改name, person里面的name属性也会修改  */
console.log(person);





</script>
<style scoped>

</style>
