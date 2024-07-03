<template>
  <div class="home-header">
<!--    todo: 需要让home-header粘滞在顶部-->
    <h1 color="black">header</h1>
  </div>
  <div class="home-container">
    <div class="title-container">
      <h1>智慧土豆</h1>
      <h2>机器人技术支持专家</h2>
    </div>
  </div>

</template>

<script setup>

</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped lang="less">
.home-container{
  background-image: url("../assets/home-bg.png");
  background-size: cover;
  width: 100%;
  height: 493px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-container{
  color: #FFFFFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-header{
  color: black;
  position: sticky;
  top: 0;
  background-color: white; /* 可以根据需要设置背景颜色 */
  z-index: 1000; /* 确保 header 处于顶层 */
}

</style>