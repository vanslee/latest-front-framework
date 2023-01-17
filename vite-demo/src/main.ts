import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CardVue from './全局组件-局部组件-递归组件/Card.vue'

createApp(App).mount('#app')

export const app = createApp(App)

app.component('CardVue', CardVue)
