<template>
  <el-container>

    <!--页眉-->
    <el-header>
      <the-header/>
    </el-header>

    <!--正文-->
    <!--    <el-main >-->
    <router-view/>
    <!--    </el-main>-->

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
  padding: 0;
}

.el-header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 75px;
  z-index: 100;
}

//.el-main {
//  background-color: #F8FAFF;
//  position: sticky;
//  top: 75px;
//}

</style>