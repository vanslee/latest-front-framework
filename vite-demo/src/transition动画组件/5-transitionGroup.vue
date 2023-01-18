<template>
    <button @click="add()">添加</button>
    <br>
    <button @click="pop()">删除</button>
    <div class="content">
        <div class="wraps">
            <TransitionGroup tag="setion" enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__hinge">
                <div class="item" v-for="item in arr" :key="item">{{ item }}</div>
            </TransitionGroup>
        </div>
    </div>
</template>
<script setup lang='ts'>
import 'animate.css'
import { ref, reactive } from 'vue'

const arr = ref<Array<number>>([1, 2, 3, 4, 5])

const add = () => {
    arr.value.push(arr.value.length + 1)
}
const pop = () => {
    arr.value.pop()
}


</script>
<style scoped lang="less">
.loading {
    position: absolute;
}

.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;

    .item {
        border: 1px solid pink;
        margin: 100px;
        font-size: 50px;
    }
}
</style>
