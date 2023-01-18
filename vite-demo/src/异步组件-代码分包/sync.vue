<template>
    <div class="container">
        <div class="user-info">
            <img :src="data.url" alt="" class="user-avatar">
            <div>
                <div class="username">{{ data.name }}</div>
                <div class="userage">{{ data.age }}</div>
            </div>
        </div>
        <hr>
        <div class="desc">{{ data.desc }}</div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { axios } from '../api/axios'
interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string,
    }
}
const { data } = await axios.get<Data>('http://localhost:5173/data.json')
console.log('data', data);


</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.containner {
    width: 100%;
    height: 500px;
    border: 1px solid red
}

.user-info {
    width: 100%;
    height: 100px;
    border: 1px solid pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: darkgray;
}

.username .userage {
    margin-left: 120px;
    background-color: darkgray;
    width: 50px;
    height: 10px;
    border: 1px solid purple;
}

.desc {
    width: 100%;
    height: 50px;
    background-color: darkgray;
}
</style>
