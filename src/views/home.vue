<template>
<!--  TODO: 加入顶部菜单粘滞功能-->
    <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#6374B6"
        text-color="#FFFFFF"
    >
      <el-menu-item index="1">硬件产品</el-menu-item>
      <el-menu-item index="2">竞赛解决方案</el-menu-item>
      <el-menu-item index="3" >STEAM教育</el-menu-item>
    </el-menu>




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
  const activeIndex2 = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {console.log(key, keyPath)
  }
</script>

<script lang="ts">
export default {
  name: "Home"
}
</script>

<style scoped lang="less">
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

.el-menu-demo {
  display: flex;
  justify-content: space-between; /* 使菜单项之间均匀分布 */
  width: 100%; /* 让菜单占据100%的宽度 */
}

.el-menu-item {
  flex: 1; /* 让每个菜单项占据相同的宽度 */
  text-align: center; /* 让菜单项文本居中 */
  font-family: Microsoft YaHei;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
}
</style>