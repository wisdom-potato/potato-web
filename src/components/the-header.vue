<template>
  <el-container>
    <el-header>
      <el-row justify="space-between" align="middle">

        <!--logo-->
        <el-col :span="16" :offset="2">
          <el-row align="middle">
            <el-image class="logo" :src="getAssetsFile('logo-with-text.png')" fit="contain"></el-image>
          </el-row>
        </el-col>

      </el-row>
    </el-header>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
</script>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>