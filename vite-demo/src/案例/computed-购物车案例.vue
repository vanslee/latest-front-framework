<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>商品名</th>
                    <th>数量</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.num }}</td>
                    <td>{{ item.price }}</td>
                    <td>编辑 删除</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue'
type Shop = {
    name: string,
    num: number,
    price: string
}

const data = reactive<Shop[]>(
    [
        {
            name: "龙族",
            num: 56,
            price: '$25',
        },
        {
            name: "三体",
            num: 23,
            price: '$25',
        },
        {
            name: "斗破苍穹",
            num: 78,
            price: '$25',
        },
    ]
)
</script>
<style scoped>

</style>
