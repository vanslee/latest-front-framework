<template>
    <div class="demo">
        动态CSS
    </div>

</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
const style = ref('red')
const styles = ref({
    fontSize: 50 + 'px'
})
setTimeout(() => {
    style.value = 'pink'
}, 3000);
</script>
<style scoped>
.demo {
    font-size: v-bind('styles.fontSize');
    color: v-bind(style);
}
</style>
