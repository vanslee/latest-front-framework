<template>
    <div>
        <button @click='flag = !flag'>切换</button>

        <transition :duration="{ enter: 500, leave: 500 }" leave-active-class="animate__animated animate__bounceIn"
            enter-active-class="animate__animated animate__bounceOut">
            <div v-if='flag' class="box"></div>
        </transition>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import 'animate.css'
let flag = ref<boolean>(false)
</script>
<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: yellow;
}

// //开始过度
// .fade-enter-from {
//     background: red;
//     width: 0px;
//     height: 0px;
//     transform: rotate(360deg)
// }

// //开始过度了
// .fade-enter-active {
//     transition: all 2.5s linear;
// }

// //过度完成
// .fade-enter-to {
//     background: yellow;
//     width: 200px;
//     height: 200px;
// }

// //离开的过度
// .fade-leave-from {
//     width: 200px;
//     height: 200px;
//     transform: rotate(360deg)
// }

// //离开中过度
// .fade-leave-active {
//     transition: all 1s linear;
// }

// //离开完成
// .fade-leave-to {
//     width: 0px;
//     height: 0px;
// }
</style>
