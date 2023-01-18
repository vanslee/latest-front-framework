import { onMounted } from 'vue'
type test = {
    el: string
}
export default function (options: test): Promise<{ baseUrl: string }> {
    return new Promise((resolve) => {
        onMounted(() => {
            const imgElement = document.querySelector(options.el) as HTMLImageElement
            // console.log(imgElement);
            imgElement.onload = () => {
                resolve({
                    baseUrl: base64(imgElement)
                })
            }
        })
        const base64 = (el: HTMLImageElement) => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = el.width;
            canvas.height = el.height;
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
            return canvas.toDataURL('image/png')
        }
    })
}