<template>
    <div>
        <A @on-click="getFlag"></A>
        <B :flag="flag"></B>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, Ref } from 'vue'
import A from './BroA.vue'
import B from './BroB.vue'
let flag = ref<boolean>(false)
const getFlag = (val: Ref<boolean>) => {
    flag.value = val.value
}
</script>
<style scoped>

</style>
