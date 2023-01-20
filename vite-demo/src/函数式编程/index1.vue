<template>
    <div>
        <CustomBtn @on-click="getBtn">
            <!-- 不知道为什么报错,可以正常使用 -->
            <!-- <template #default>123</template> -->
        </CustomBtn>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, h } from 'vue'
type Props = {
    text?: string
}
const CustomBtn = (prop: Props, ctx: any) => {
    return h('div', {
        class: ['rounded', 'bg-green-500', 'text-gray-50', 'text-center', 'p-1.5'],
        onClick: () => {
            ctx.emit('on-click', '我是按钮')
        }
    },
        ctx.slots.default()
    )
}
const getBtn = (target: string) => {
    console.log(target);
}
</script>
<style scoped>

</style>
