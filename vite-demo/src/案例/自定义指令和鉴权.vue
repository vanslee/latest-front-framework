<template>
    <div class="btns">
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Directive } from 'vue';
/**
 * 模拟权限数据
 */
localStorage.setItem('userId', 'user32131')
const permissions = ['user32131:shop:create', 'user32131:shop:delete']
/**
 * 获取用户id
 */
const userId = localStorage.getItem('userId') as string
/**
 * 自定义指令
 * @param el 标签对象
 * @param binding 绑定的值
 */
const vHasShow: Directive<HTMLElement, object> = (el, binding) => {
    if (!permissions.includes(userId + ':' + binding.value)) {
        el.style.display = 'none'
    }
}
</script>
<style scoped lang="less">
.btns {
    button {
        margin: 10px
    }
}
</style>
