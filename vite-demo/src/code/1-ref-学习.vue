<template>
    <div>
        姓名: {{ name }}
    </div>
    <button @click="updateName()">修改名字</button>
    <hr>
    自定义Ref
    <div>{{ diyName }}</div>
    <button @click="change()">修改名字</button>
    <div ref="dom">我是dom节点</div>
    <button @click="printDom()">打印dom</button>
</template>
<script setup lang='ts'>
import { ref, isRef, customRef } from 'vue'

// 自定义customRef的实现
function MyRef<T>(value: T) {
    let timer: any
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newVal) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    console.log('自定义customRef中间件');
                    value = newVal;
                    trigger()
                }, 500)
            }

        }
    })
}

const dom = ref<HTMLElement>()



const diyName = MyRef<string>('李登祥')

let name = ref('李登祥')
let name1 = '李登祥'


const updateName = () => {
    console.log('name是否是ref对象', isRef(name));
    console.log('name1是否是ref对象', isRef(name1));

}

const printDom = () => {
    console.log(dom.value?.innerHTML);

}

const change = () => {
    console.log(diyName);
    diyName.value = '李知恩'
}
/**
  如果不用响应式,那么name的值即使改变页面也不会渲染
  let name = '李登祥';
  const updateName = () => {
    name = '李知恩'
  }
**/
/**
 * 使用响应式
 * let name = ref('李登祥')
 * const updateName = () => {
 *   name.value = '李知恩'
 * }
 */

</script>
<style scoped>

</style>
