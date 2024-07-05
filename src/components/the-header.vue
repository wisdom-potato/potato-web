<template>
  <el-container>
    <el-header class="common">
      <el-row align="middle">

        <!--logo-->
        <el-col :span="6">
          <el-row align="middle">
            <el-image class="logo" :src="getAssetsFile('text-logo.png')" fit="contain"></el-image>
          </el-row>
        </el-col>

        <!--标签-->
        <el-col :span="17" :offset="1">
          <el-row justify="end" align="middle">

            <el-col :span="4">
              <el-link @click="router.push({name: 'Home'})">首页</el-link>
            </el-col>

            <el-col :span="4">
              <el-link>开源资料</el-link>
            </el-col>

            <el-col :span="4">
              <el-link @click="router.push({name: 'HardwareProducts'})">硬件产品</el-link>
            </el-col>

            <el-col :span="4">
              <el-link @click="router.push({name: 'CompetitionSolutions'})">竞赛解决方案</el-link>
            </el-col>

            <el-col :span="4">
              <el-link @click="router.push({name: 'SteamEducation'})">STEAM教育</el-link>
            </el-col>

            <el-col :span="4">
              <el-link @click="scrollToAnchor('footer')">联系我们</el-link>
            </el-col>

          </el-row>
        </el-col>

      </el-row>
    </el-header>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
import {scrollToAnchor} from "../utils/scrollToAnchor";
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
.common {
  background-color: #31354D;
  height: 75px;
}

.el-row {
  height: 75px;
}


.logo {
  height: 35px;
}

.el-link {
  font-family: "Microsoft YaHei", serif;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: left;

  &:hover {
    color: #8596CB;

    &::after {
      content: "";
      border-bottom: 1px solid white;
    }
  }
}


</style>