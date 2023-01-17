<template>
    <div>
        <Tree :data="data" />
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Tree from './Tree.vue';
export interface TreeInterface {
    name: string,
    checked: boolean,
    children?: TreeInterface[]
}
const data = reactive<TreeInterface[]>(
    [
        {
            name: '李登祥1',
            checked: true
        },
        {
            name: '李登祥2',
            checked: true
        },
        {
            name: '李登祥3',
            checked: true,
            children: [
                {
                    name: '李登祥3-son1',
                    checked: true,
                    children: [{
                        name: '李登祥3-son1-son1',
                        checked: true
                    }, {
                        name: '李登祥3-son1-son2',
                        checked: true
                    },
                    ]
                },
                {
                    name: '李登祥3-son2',
                    checked: false
                },
            ]
        },
    ]
)
</script>
<style scoped>

</style>
