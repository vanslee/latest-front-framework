<template>
    <div>
        <A class="A" a="456" title="123"></A>
        <img id="img" src="./assets/img1.png" style="width: 100px;height: 100px" />
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive, useAttrs } from 'vue'
import A from './A.vue'
import useBase64 from './hooks'
useBase64({ el: '#img' }).then(res => {
    console.log(res.baseUrl);
})
</script>
<style scoped>

</style>
