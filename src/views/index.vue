<template>
  <el-container>

    <!--页眉-->
    <el-header>
      <the-header/>
    </el-header>

    <!--正文-->
    <!--el-main要注释掉要不然那个home里的sticky不会生效-->
<!--            <el-main >-->
    <router-view/>
<!--            </el-main>-->

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
  height: auto;
  padding: 0;
}

.el-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;
}
</style>