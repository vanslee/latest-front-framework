<template>
    <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <div>
            {{ name }}
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, computed } from 'vue'
let firstName = ref('')
let lastName = ref('')
const name = computed(() => {
    return '' + lastName + firstName
})
</script>
<style scoped>

</style>
