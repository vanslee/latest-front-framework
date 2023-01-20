<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>商品ID</th>
                    <th>商品名</th>
                    <th>商品价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td><button @click="toDetail(item)">详情</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { data } from '../../assets/data.json'
import { useRouter } from 'vue-router'
import { Data } from '../../types/Data';

const router = useRouter()
const toDetail = (item: Data) => {
    router.push({
        path: '/detail',
        query: item
    })
}
</script>
<style scoped>

</style>
