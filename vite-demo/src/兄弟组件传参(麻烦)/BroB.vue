<template>
    <h3>
        兄弟B
    </h3>
    <div>接收到兄弟A传的值: {{ flag }}</div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
type Props = {
    flag: boolean
}
defineProps<Props>()

</script>
<style scoped>

</style>
