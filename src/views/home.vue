<template>
<!--  TODO: 加入顶部菜单粘滞功能-->
  <div class="menu-container">
    <el-container>
      <el-header class="common">
        <el-row align="middle">
          <!--标签-->
          <el-col :span="24">
            <el-row>
              <el-col :span="8" class="centered-content">
                <el-link>硬件产品</el-link>
              </el-col>
              <el-col :span="8" class="centered-content">
                <el-link>竞赛解决方案</el-link>
              </el-col>
              <el-col :span="8" class="centered-content">
                <el-link>STEAM教育</el-link>
              </el-col>
            </el-row>
          </el-col>

        </el-row>

      </el-header>
    </el-container>
  </div>





  <div class="home-container">
    <div class="title-container">
      <h1 id="title">智慧土豆</h1>
      <h2 id="subtitle">机器人技术支持专家</h2>
    </div>
  </div>

</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {console.log(key, keyPath)
  }
</script>

<script lang="ts">
export default {
  name: "Home"
}
</script>

<style scoped lang="less">
.common {
  background-color: #6374B6;
  height: 65px;
}


.centered-content{
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;    /* 垂直居中 */
  height: 100%;
}
.el-link{
  font-family: "Microsoft YaHei", serif;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.1em;
  text-align: left;
  margin-top: 15px;

  &:hover {
    color: #8596CB;

    &::after {
      content: "";
      border-bottom: 1px solid white;
    }
  }
}
.home-container {
  background-image: url("../assets/home-bg.png");
  background-size: cover;
  width: 100%;
  height: 493px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-container {

  color: #FFFFFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#title{
  font-family: Microsoft YaHei;
  font-size: 64px;
  line-height: 77.61px;
  letter-spacing: 0.5em;
  text-align: center;
  font-weight: 700;
}
#subtitle{
  font-family: Microsoft YaHei;
  font-size: 24px;
  line-height: 29.1px;
  letter-spacing: 0.5em;
  text-align: center;
  font-weight: 700;

}
.el-header {
  position: fixed;
  top: 75px;
  width: 1440px;
  z-index: 10;
}


</style>