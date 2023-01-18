<template>
    <div>
        <button @click='flag = !flag'>切换</button>
        <!-- 常用的就三个 enter相关的 -->
        <transition @before-enter="EnterForm" @enter="EnterActive" @after-enter="AfterEnter">
            <div v-if='flag' class="box"></div>
        </transition>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import gsap from 'gsap'

let flag = ref<boolean>(false)

/**
 * transition @before-enter钩子
 */
const EnterForm = (el: Element) => {
    //使用gasp
    gsap.set(el, {
        width: 0,
        height: 0,
    })

}
/**
 * transition @enter钩子
 */
const EnterActive = (el: Element, done: gsap.Callback) => {
    //使用gasp
    gsap.to(el, {
        width: 400,
        height: 400,
        onComplete: done
    })

}
/**
 * transition @after-enter钩子
 */
const AfterEnter = (el: Element) => {
    //使用gasp
    gsap.set(el, {
        width: 0,
        height: 0
    })


}


</script>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background-color: pink;
    margin: 0 auto;
}
</style>
