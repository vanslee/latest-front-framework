/// <reference types="vite/client" />
// 由于我们选择了ts,但ts不认识.vue后缀的文件,所以需要做.vue后缀文件声明的扩充
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}