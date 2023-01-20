<template>
    <div>
        actions-user: {{ store.user }}
        <hr>
        actions-newName: {{ store.newName }}
    </div>
    <hr>
    <button @click="change">change</button>
    <hr>
    <button @click="reset">reset</button>
    <hr>
    <button @click="update">通过actions修改state</button>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useStore } from '../stores/user'
const store = useStore()
const change = () => {
    store.$patch({
        user: {
            name: '李知恩',
            age: 30,
            gender: '女'
        }
    })
}
const reset = () => {
    store.$reset()
}
/**
 * 使用watch监听store
 */
watch(store.$state, (value, oldVal) => {
    console.log('新值', value);
    console.log('旧值', oldVal);
}, { deep: true })
/**
 * 使用自带方法监听store
 * detached代表组件销毁还会继续监听
 */
store.$subscribe((args, state) => {
    console.log('args', args);
    console.log('state', state);
}, {
    detached: true,
    deep: true,
    flush: 'post'
})
/**
 * 使用actions里的方法修改参数,看是否能被$subscribt监听到
 * 结论: 可以,watch都可以
 */
const update = () => {
    store.setName('李登祥1')
}
/**
 * $onAction即使没有修改state里面的值,只是打印输出语句也会被监听到,$subscribe和watch就不会
 * true: 是代表组件销毁后还想继续监听actions
 */
store.$onAction((args) => {
    args.after(() => {
        console.log('after');
    })
    console.log('$onAction', args);
}, true)

</script>
<style scoped>

</style>
