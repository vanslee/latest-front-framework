/**
 * 返回一个渲染函数
 * optionsAPI
 */
import { defineComponent, ref } from "vue"
// export default defineComponent({
//     data() {
//         return {
//             age: 23
//         }
//     },
//     render() {
//         return (<div>{this.age}</div>)
//     }
// })
/**
 * setup语法糖模式
 * v-show 支持
 * v-if   不支持
 * ref template中自动解包 tsx并不会
 */
export default defineComponent({
    setup() {
        const flag = ref<boolean>(true)
        return () => (<div v-show={flag.value}>李知恩</div>)
    }
})