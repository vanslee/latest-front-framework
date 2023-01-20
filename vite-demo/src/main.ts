import { createApp, Ref } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers/index'
import CardVue from './全局组件-局部组件-递归组件/Card.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mit from 'mitt'
import { MyUse } from './自定义插件/MyUse'
const Mit = mit()
export const app = createApp(App)
import LoadingPlugin from './自定义插件/Message'
// 引入tailwind css
import './index.css'
import { createPinia, PiniaPluginContext } from 'pinia'
app.use(ElementPlus)
const store = createPinia()
app.use(store)
/**
 * 使用vue-router
 */
app.use(router)
/**
 * 前置守卫
 */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})
/**
 * 后置守卫
 */
router.afterEach((to, from) => {
    console.log(to);
    console.log(from);

})
/**
 * 注册全局组件
 */
app.component('CardVue', CardVue)
/**
 * 注册全局总线
 */
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $event_bus: typeof Mit
    }
}
app.config.globalProperties.$event_bus = Mit
/**
 * 定义全局变量
 */
app.config.globalProperties.$env = 'dev'
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $env: string
    }
}
/**
 * 定义全局函数
 */
app.config.globalProperties.$filters = {
    format<T>(params: T): string {
        return `李登祥的过滤字符串函数${params}`
    }
}
type Filter = {
    format<T>(str: T): string
}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter
    }
}
/**
 * 1.使用自定义插件
 */
// app.use(LoadingPlugin)
/**
 * 2.不使用app.use()引用插件
 */
MyUse(LoadingPlugin)
/**
 * 声明自定义插件
 */
type Load = {
    show: () => void,
    hide: () => void,
    isShow: Ref<boolean>
}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $loading1: Load
    }
}
/**
 * 自定义pinia插件,并使用
 * @param context 
 */
const __piniaKey__: string = 'ltbblog'
type OPtional = {
    key?: string
}
const piniaPlugin = (options: OPtional) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        store.$subscribe(() => {
            //toRaw将ref/reactive数据类型转成原始数据,降低性能消耗
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })
        return {
            ...data
        }
    }
}
const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
store.use(piniaPlugin({ key: 'pinia' }))




app.mount('#app')
