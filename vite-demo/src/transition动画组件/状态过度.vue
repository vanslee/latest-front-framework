<template>
    <div>
        <input v-model="num.current" step="20" type="number">
        <div>
            {{ num.tweenedNumber }}
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'
const num = reactive({
    current: 0,
    tweenedNumber: 0,
})
watch(() => num.current, (newVal, oldVal) => {
    gsap.to(num, {
        duration: 2,
        tweenedNumber: newVal
    })

})
</script>
<style scoped>

</style>
