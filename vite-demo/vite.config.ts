import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
/**
 * 引入tsx
 */
import vueJsx from '@vitejs/plugin-vue-jsx'
/**
 * 自动引入插件
 */


// https://vitejs.dev/config/
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
/**
 * 打印所有环境参数
 */
console.log(process.env);

export default ({ mode }: any) => {
  console.log('mode', mode); //development
  console.log('当前项目根目录', process.cwd()); //C:\Users\ldx\Desktop\workspace\最新前端框架学习\latest-front-framework\vite-demo
  console.log('项目环境参数', loadEnv(mode, process.cwd())); //{ VITE_HOST: 'localhost:127.0.0.1:3030' }
  return defineConfig({
    plugins: [
      vue({ reactivityTransform: true }),
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue'],
        dts: "src/auto-import.d.ts"
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
