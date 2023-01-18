<template>
    <div>
        <button @click="flag = !flag">切换</button>
        <A v-move:aaa.xiaoman="{ background: 'red', flag: flag }"></A>
    </div>
</template>
<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue'
import A from './A.vue'
let flag = ref<boolean>(true)
type Dir = {
    background: string
}
const vMove: Directive = {
    created() { console.log('==============> created') },
    beforeMount() { console.log('==============> beforeMount') },
    mounted(el: HTMLElement, dir: DirectiveBinding<Dir>,) {
        console.log('==============> mounted'), el.style.background = dir.value.background;
    },
    beforeUpdate() { console.log('==============> beforeUpdate') },
    updated() { console.log('==============> updated') },
    beforeUnmount() { console.log('==============> beforeUnmount') },
    unmounted() { console.log('==============> unmounted') },
}
</script>
<style scoped>

</style>
