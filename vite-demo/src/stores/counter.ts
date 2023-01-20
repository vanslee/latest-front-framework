import { defineStore } from "pinia";
export const useStore = defineStore('count', {
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        increment() {
            this.counter++
        },
        randomizeCounter() {
            this.counter = Math.round(100 * Math.random())
        },
    }

}

)