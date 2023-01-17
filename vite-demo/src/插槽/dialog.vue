<template>
    <div>
        <header class="header">
            <!-- 具名插槽 -->
            <slot name="header"></slot>
        </header>
        <main class="main">
            <!-- 匿名插槽 -->
            <div v-for="(item, index) in data">
                <slot :index="index" :data="item"></slot>
            </div>
        </main>
        <footer class="footer">

            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'

type person = {
    age: number,
    name: string
}
const data = reactive<person[]>(
    [
        {
            name: '李登祥',
            age: 22
        },
        {
            name: '李知恩',
            age: 30
        }
    ]
)
</script>
<style scoped>
.header {
    height: 200px;
    background-color: red;
    color: #fff
}

.main {
    height: 300px;
    background-color: green;
    color: #fff;
}

.footer {
    height: 200px;
    background-color: blue;
    color: #fff;
}
</style>
