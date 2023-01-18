<!-- 本章参考资料 -->
<!-- https://blog.csdn.net/qq1195566313/article/details/123187523?ops_request_misc=%7B%22request_id%22:%22167403899216782429718948%22,%22scm%22:%2220140713.130102334..%22%7D&request_id=167403899216782429718948&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-123187523-null-null.142%5Ev71%5Econtrol_1,201%5Ev4%5Eadd_ask&utm_term=%E5%AD%A6%E4%B9%A0vue3%20%E7%AC%AC%E4%BA%8C%E5%8D%81%E5%85%AD&spm=1018.2226.3001.4187 -->
<template>
    <div>
        <h3>我是子组件</h3>
        <div v-if='propData.modelValue' class="dialog">
            <div class="dialog-header">
                <div>标题</div>
                <div @click="close">x</div>
            </div>
            <div class="dialog-content">
                内容 <input type="text" :value="propData.textVal" @input="changeText">
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

type Props = {
    modelValue: boolean,
    textVal: string,
    textValModifiers?: {
        isBt: boolean
    }
}
const propData = defineProps<Props>()


const emit = defineEmits(['update:modelValue', 'update:textVal'])

const close = () => {
    emit('update:modelValue', false)
}
const changeText = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:textVal', propData.textValModifiers?.isBt ? target.value + '变态' : target.value)

}

</script>

<style lang='less'>
.dialog {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &-header {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    &-content {
        padding: 10px;
    }
}
</style>