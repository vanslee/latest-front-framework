<template>
    <div>
        <input type="text" v-model="message"> 值: {{ message }}
        <hr>
        <input type="text" v-model="message1"> 值: {{ message1 }}
        <hr>
        <button @click="change()">修改地址</button>
        <button @click="change2()">修改地址2</button>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
let message = ref<string>('里灯箱')
let message1 = ref<string>('里灯箱')

/**
 * 监听多个值
 **/

// watch([message, message1], (newVal, oldVal) => {
//   console.log('新值', newVal); //是数组
//   console.log('旧值', oldVal);
// })
watch(message, (newVal, oldVal) => {
    console.log('新值', newVal);
    console.log('旧值', oldVal);
})
/**
 * 使用watch监听ref对象
 */
const person = ref({
    otherInfo: {
        addr: '湖北武汉'
    }
})
const change = () => {
    person.value.otherInfo.addr = '中国湖北武汉'
    console.log(person);

}
watch(person, (newVal, oldVal) => {
    // 开启深度监听, 新值和旧值的内容一样的
    console.log('修改地址旧值', oldVal);
    console.log('修改地址新值', newVal);
}, {
    // 如果不开启,那么是无法检测到person中的属性发生变化的
    deep: true
})
/**
 * 使用watch监听reactive对象
 */
const person1 = reactive({
    otherInfo: {
        addr: '李知恩'
    }
})
watch(person1, (value, oldVal) => {
    // 监听reactive对象不需要开启深度监听,oldVal和value的值是一样的
    console.log('监听reactive对象旧值', oldVal);
    console.log('监听reactive对象新值', value);
})
const change2 = () => {
    person1.otherInfo.addr = '李登祥'
}
/** 
 * 使用watch监听单一属性
 */
watch(() => person1.otherInfo.addr, (value, oldVal) => {
    // () => person1.otherInfo.addr,因为addr是一个字符串,并不是一个proxy对象,所以需要创建一个回调函数
})
/**
 * watch中的immediate属性
 */
watch(person1, (value, oldVal) => {
    console.log(value);
    console.log(oldVal);
}, {
    /**
     * 设置immediate为true会导致页面一刷新就会打印value,oldVal,此属性默认为false
     */
    immediate: true,
    /**
     * flush: 如果为pre组件更新之前调用,async同步执行,post组件更新之后执行
     */
    flush: "pre"
}
)
</script>
<style scoped>

</style>
