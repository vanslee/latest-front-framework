<template>
    <div>
        <CustomBtn text="这是帽子" @on-click="getBtn"> </CustomBtn>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, h } from 'vue'
type Props = {
    text: string
}
const CustomBtn = (prop: Props, ctx: any) => {
    return h('div', {
        class: ['rounded', 'bg-green-500', 'text-gray-50', 'text-center', 'p-1.5'],
        onClick: () => {
            ctx.emit('on-click', '我是按钮')
        }
    },
        prop.text
    )
}
const getBtn = (target: string) => {
    console.log(target);
}
</script>
<style scoped>

</style>
