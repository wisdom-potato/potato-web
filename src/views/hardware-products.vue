<template>
  <el-row class="mid-title">硬件产品专区</el-row>
  <el-row align="middle" justify="center" class="slider-container">
    <img src="../assets/inactive-slider-switch-triangle.png" alt="" class="header-switch-triangle">

    <div class="header-container">
      <div class="header-text">成就<br>属于你的<br>无限可能。</div>
      <img class="polygon-combinations" src="../assets/polygons-combinations.png" alt="">
    </div>

    <img src="../assets/active-slider-switch-triangle.png" alt="" class="header-switch-triangle">
  </el-row>

</template>

<script setup>

</script>

<script>
export default {
  name: "HardwareProducts"
}
</script>

<style scoped lang="less">
.mid-title {
  font-family: "Microsoft YaHei", serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: #31354D;

  margin-top: 55px;
  margin-left: 97px;
  margin-bottom: 50px;
}

.slider-container{
  height: 476px;
  margin-bottom: 210px;
}

.header-switch-triangle {
  width: 29.07px;
  height: 69.52px;
}

.header-container {
  background-image: url("../assets/orange-rectgangle-long.png");
  background-size: cover;
  width: 1071px;
  height: 476px;

  display: flex;
  align-items: center;

  margin-left: 20px;
  margin-right: 20px;

}

.header-text {
  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: white;

  white-space: pre-line;

  margin-left: 100px;
}

.polygon-combinations {
  width: 628.03px;
  height: 642.21px;

  position: relative;
  top: 110px;

}

</style>