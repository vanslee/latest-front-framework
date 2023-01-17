<template>
    <div>

    </div>
</template>
<script setup lang='ts'>
import { toRef, reactive } from 'vue'
const person = reactive({
    username: '李登祥',
    age: 22,
})
const toRefs = <T extends object>(object: T) => {
    let map: any = {};
    for (let key in object) {
        console.log(key);
        map[key] = toRef(object, key);
    }
    return map;
}
let temp = toRefs(person)
console.log(temp);

</script>
<style scoped>

</style>
