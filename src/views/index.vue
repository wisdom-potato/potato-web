<template>
  <el-container>

    <!--页眉-->
    <el-header>
      <the-header/>
    </el-header>

    <!--正文-->
    <el-main>

      <router-view/>

    </el-main>

    <!--页脚-->
    <el-footer>
      <the-footer/>
    </el-footer>

  </el-container>
</template>

<script setup>
import TheHeader from "../components/the-header.vue";
import TheFooter from "../components/the-footer.vue";
</script>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="less">
.el-container, .el-header, .el-main, .el-footer {
  width: 100%;
  padding: 0;
}

.el-header, .el-main, .el-footer {
  height: 100%;
}
</style>