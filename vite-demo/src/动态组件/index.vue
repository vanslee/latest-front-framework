<template>
    <div style="display: flex">
        <div @click="swithCom(component, index)" :class="[active == index ? 'active' : '', 'tabs']"
            v-for="(component,index) in data">
            <div>{{ component.name }}</div>
        </div>
    </div>

    <component :is="comId"></component>
</template>
<script setup lang='ts'>
import { ref, reactive, shallowRef, markRaw } from 'vue'
/**
 * 使用了组件统一注册
 */
// import AVue from './A.vue'
// import BVue from './B.vue'
// import CVue from './C.vue'

const comId = shallowRef(AVue)
const active = ref(0)

const data = reactive(
    /**
     * 如果不使用组件同一注册就需要这样写
     */
    // [
    //     {
    //         name: 'A组件',
    //         com: markRaw(AVue)
    //     },
    //     {
    //         name: 'B组件',
    //         com: markRaw(BVue)
    //     },
    //     {
    //         name: 'C组件',
    //         com: markRaw(CVue)
    //     }
    // ]
    /**
     * 使用了组件统一注册就这样写,当然也可以跟上面一样
     */
    [
        {
            name: 'A组件',
            com: 'AVue'
        },
        {
            name: 'B组件',
            com: 'BVue'
        },
        {
            name: 'C组件',
            com: 'CVue'
        }
    ]
)

const swithCom = (component: any, index: number) => {
    console.log(component.name);
    comId.value = component.com
    active.value = index
}
</script>

<!-- 组件统一注册 -->
<script lang="ts">
import AVue from './A.vue'
import BVue from './B.vue'
import CVue from './C.vue'
export default {
    components: {
        AVue,
        BVue,
        CVue
    }
}
</script>
<style scoped>
.tabs {
    border: 1px solid #ccc;
    padding: 5px 1px;
    margin: 5px
}

.active {
    background-color: red;
}
</style>
