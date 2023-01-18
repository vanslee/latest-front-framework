<template>
    <button @click='flag = !flag'>显示动画</button>
    <!-- appear: 设置初始节点过渡 -->
    <Transition appear-from-class="from" appear-active-class="animate__animated animate__bounce" appear-to-class="to"
        appear>
        <div v-if='flag' class="box">1</div>
    </Transition>
</template>
<script setup lang='ts'>
import 'animate.css'
import { ref, reactive } from 'vue'
let flag = ref<boolean>(true)




</script>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: red;
}

.from {
    width: 0;
    height: 0;
}

.active {
    transition: all 2s ease-in;
}

.to {
    width: 200px;
    height: 200px;
}

.loading {
    position: absolute;
}
</style>
