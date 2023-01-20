<template>
    <div>
        <el-input placeholder="测试代码" class="ipt"></el-input>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>
<style scoped lang="less">
.ipt {
    width: 300px;
    margin: 100px 400px;

    /**
    * vue2中使用的方法,vue3也可以使用但有警告
    */
    // /deep/ .el-input__inner {
    //     background-color: red;
    // }
    :deep(.el-input__inner) {
        background-color: red;
    }
}
</style>
