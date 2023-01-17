<!-- 递归组件 -->
<template>
    <!-- @click.stop阻止事件冒泡 ; $event: vue提供的关键字,用来帮助函数传递事件参数-->
    <div class="tree" v-for="item in data" @click.stop="clickTap($event, item)">
        <input type="checkbox" v-model="item.checked"><span>{{ item.name }}</span>
        <Tree-Vue v-if="item?.children?.length" :data="item?.children"></Tree-Vue>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { TreeInterface } from './Tree-demo.vue';
const props = defineProps<{
    data?: TreeInterface[],
}>()

const clickTap = (e: Event, item: TreeInterface) => {
    console.log(e.target);

    console.log(item);

}

</script>

<!-- 自定义组件标签名1 -->
<script lang="ts">
export default {
    name: 'Tree-Vue'
}
</script>
<style scoped>
.tree {
    margin-left: 10px;
}
</style>
