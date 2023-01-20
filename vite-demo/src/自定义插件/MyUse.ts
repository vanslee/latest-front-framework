import { App } from 'vue'
import { app } from '../main'
interface Use {
    install: (app: App, ...options: any[]) => void
}
const pluginsSet = new Set()
export function MyUse<T extends Use>(plugin: T, ...options: any[]) {
    if (pluginsSet.has(plugin)) {
        console.log('此组件以注册', plugin);
    } else {
        plugin.install(app, options)
        pluginsSet.add(plugin)
    }
}