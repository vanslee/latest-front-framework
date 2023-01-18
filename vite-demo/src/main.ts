import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import CardVue from './全局组件-局部组件-递归组件/Card.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mit from 'mitt'
const Mit = mit()
export const app = createApp(App)
app.use(ElementPlus)
/**
 * 注册全局组件
 */
app.component('CardVue', CardVue)
/**
 * 注册全局总线
 */
declare module 'vue' {
    export interface ComponentCustomProperties {
        $event_bus: typeof Mit
    }
}
app.config.globalProperties.$event_bus = Mit
/**
 * 定义全局变量
 */
app.config.globalProperties.$env = 'dev'
app.mount('#app')
