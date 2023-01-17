<template>
    <div>
        <input type="text" v-model="message">
        <hr>
        <input type="text" v-model="message2">
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue'
const message = ref<string>('lll')
const message2 = ref<string>('dddd')
watchEffect(() => {
    console.log('message========>', message.value);

})
</script>
<style scoped>

</style>
