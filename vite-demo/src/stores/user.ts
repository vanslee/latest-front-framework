import { defineStore } from "pinia";

type User = {
    name: string,
    age: number,
    gender?: string,
}
export const useStore = defineStore('user', {
    state: () => {
        return {
            user: <User>{ name: '匿名用户', age: 0, gender: '男' },
            prefix: <string>'虎扑用户_',
        }
    },
    actions: {
        async login(name?: string) {
            /**
             * 模仿开发环境
             */
            // const result = await login()
            // this.user = result.data;
        },
        setName(name: string) {
            // this.user.name = name
            console.log('actions中的setName(val:stirng)方法被调用');

        }

    },
    getters: {
        newName(): string {
            return `${this.prefix}${this.getUsername}`
        },
        getUsername(): string {
            return this.user.name;
        }
    },
})