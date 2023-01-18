<template>
    <div>
        <button @click='flag = !flag'>切换</button>
        <!-- 常用的就三个 enter相关的 -->
        <transition @before-enter="EnterForm" @enter="EnterActive" @after-enter="AfterEnter" @before-leave="LeaveFrom"
            @leave-cancelled="LeaveCancel" @leave="Leave" @after-leave="AfterLeave" @enter-cancelled="EnterCancel">
            <div v-if='flag' class="box"></div>
        </transition>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
let flag = ref<boolean>(false)

/**
 * transition @before-enter钩子
 */
const EnterForm = (el: Element) => {
    console.log('进入之前');

}
/**
 * transition @enter钩子
 */
const EnterActive = (el: Element, done: Function) => {
    console.log('过度曲线');
    setTimeout(() => {
        // 三秒之后执行打印语句
        done();
    }, 3000)

}
/**
 * transition @after-enter钩子
 */
const AfterEnter = (el: Element) => {
    console.log('过度完成');

}
/**
 * transition @enter-cancelld
 */
const EnterCancel = (el: Element) => {
    console.log('过度效果被打断');
}
/**
 * 
 */
const LeaveFrom = (el: Element) => {
    console.log('离开过度曲线之前');
}
const Leave = (el: Element, done: Function) => {
    console.log('离开过度曲线');
    setTimeout(() => {
        // 4s之后才会打印语句
        done()
    }, 4000);
}
/**
 * 
 */
const AfterLeave = (el: Element) => {
    console.log('离开过度曲线完成');
}
/**
 * 仅在 v-show过渡中可用
 */
const LeaveCancel = (el: Element) => {
    console.log('离开被打断');

}

</script>
<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: pink;
    margin: 0 auto;
}
</style>
