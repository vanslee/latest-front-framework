import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import('../App.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: "/hello",
        component: () => import('../components/HelloWorld.vue'),
        meta: {
            title: '欢迎页'
        }
    },
    {
        path: '/login',
        component: () => import('../路由/路由传参/Login.vue')
    }, {
        path: '/detail',
        component: () => import('../路由/路由传参/Detail.vue')
    },
    {
        path: '/tabs',
        /**
         * 访问 /tabs和/ldx1、/ldx2、/ldx3一样的效果
         */
        alias: ['/ldx1', '/ldx2', '/ldx3'],
        component: () => import('../路由/命名视图/index.vue'),
        redirect: to => {
            console.log(to, '============>');
            return {
                path: '/tabsC',
                query: {
                    name: 'ldx'
                }
            }
        },
        children: [
            {
                path: '/tabsC',
                components: {
                    default: () => import('../路由/命名视图/C.vue')
                }
            },
            {
                path: '/tabsAB',
                components: {
                    a: () => import('../路由/命名视图/A.vue'),
                    b: () => import('../路由/命名视图/B.vue'),
                }
            }
        ]
    },
    {
        path: "/user",
        component: () => import('../路由/嵌套路由/Header.vue'),
        /**
         * redirect: 访问/user时默认跳转到/user/login
         */
        redirect: '/login',
        children: [
            {
                /**
                 * 如果 path的值为空字符串,相当于访问/user默认展示Login.vue组件
                 */
                path: 'login',
                component: () => import('../路由/路由传参/Login.vue')
            },
            {
                path: 'detail',
                component: () => import('../路由/路由传参/Detail.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: (to, from, savePosition) => {
        console.log(savePosition);
        if (savePosition) {
            return savePosition
        } else {
            return {
                top: 0,
            }
        }
    }

})
export default router