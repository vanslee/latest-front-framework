import type { App, VNode } from 'vue'
import { createVNode, render } from 'vue'
import Message from './Message.vue'
export default {
    install(app: App) {
        console.log(app);

        const vNode: VNode = createVNode(Message);
        render(vNode, document.body)
        app.config.globalProperties.$loading1 = {
            show: vNode.component?.exposed?.show,
            hide: vNode.component?.exposed?.hide,
            isShow: vNode.component?.exposed?.isShow
        }
    }
}