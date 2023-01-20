<template>
    <div :class="[custom.demoFont, custom.demoColor]">
        动态CSS1
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, useCssModule } from 'vue'
const css = useCssModule('custom')
console.log(css);

const style = ref('red')
const styles = ref({
    fontSize: 50 + 'px'
})
setTimeout(() => {
    style.value = 'pink'
}, 3000);
</script>
<style scoped module="custom">
.demoFont {
    font-size: 40px;
}

.demoColor {
    color: purple;
}
</style>
