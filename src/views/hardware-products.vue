<template>

  <!--硬件产品专区板块-->
  <el-row class="mid-title">硬件产品专区</el-row>
  <el-row align="middle" justify="center" class="slider-container">
    <img src="../assets/inactive-slider-switch-triangle.png" alt="" class="header-switch-triangle">

    <div class="header-container">
      <div class="header-text">成就<br>属于你的<br>无限可能。</div>
      <img class="polygon-combinations" src="../assets/polygons-combinations.png" alt="">
    </div>

    <img src="../assets/active-slider-switch-triangle.png" alt="" class="header-switch-triangle">
  </el-row>

  <!--现有产品板块-->
  <el-row class="product-title">现有产品</el-row>
  <el-row class="product-store-link" justify="end">前往官方店铺查看更多</el-row>

  <el-row justify="center">
    <el-row class="products-container" justify="space-between" align="middle">

      <div class="product-card" id="product-card-1">
        <div class="product-text">土豆泥<br/>系列</div>
        <!--产品图片-->
        <img id="product-1" src="../assets/product-1.png" alt=""/>
      </div>

      <div class="product-card" id="product-card-2">
        <div class="product-text">比赛<br/>定制</div>
        <!--产品图片-->
        <img id="product-2" src="../assets/product-2.png" alt=""/>
      </div>

      <div class="product-card" id="product-card-3">
        <div class="product-text">敬请<br/>期待</div>
        <!--产品图片-->
        <img id="product-3" src="../assets/product-3.png" alt=""/>
      </div>

    </el-row>
  </el-row>


  <!--分割线-->
  <el-divider/>

  <!--流程介绍板块-->
  <el-row class="roadmap-title" justify="center">专业设计团队 一站式解决硬件需求</el-row>
  <!--流程-->
  <el-row justify="center">
    <el-row class="steps-container" justify="space-between">
      <div class="step">确定需求</div>
      <div class="step">设计打样</div>
      <div class="step">批量生产</div>
    </el-row>
  </el-row>
  <!--流程配图-->
  <el-row justify="center">
    <el-row class="step-images-container" justify="space-between">
      <img class="step-images" src="../assets/step-image-1.png" alt=""/>
      <img class="step-images" src="../assets/step-image-2.png" alt=""/>
      <img class="step-images" src="../assets/step-image-3.png" alt=""/>
    </el-row>
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
  font-family: Microsoft YaHei, serif;
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

.slider-container {
  height: 476px;
  margin-bottom: 115px;
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
  border-radius: 47px;
}

.header-text {
  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: white;

  margin-left: 100px;
}

.polygon-combinations {
  width: 628.03px;
  height: 642.21px;

  position: relative;
  top: 110px;
}

.el-divider {
  width: 1300px;
  margin-left: 70px;
}

.product-title {
  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: #31354D;
  margin-left: 114px;
}

.product-store-link {
  font-family: Microsoft YaHei, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  text-align: left;

  color: #0000008A;

  margin-right: 120px;
  margin-top: -20px;
}

.products-container {
  width: 1216px;
  height: 513px;
  margin-top: -10px;
}

.product-card {
  width: 370px;
  height: 467px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition-duration: 0.5s;

  &:hover {
    width: 407px;
    height: 513px;
  }
}

#product-card-1 {
  background-image: url("../assets/product-card-bg-1.png");
  background-size: 170% 170%;
  background-position: left bottom;
}

#product-card-2 {
  background-image: url("../assets/product-card-bg-1.png");
  background-size: 320% 320%;
  background-position: 70% 100%;
  background-blend-mode: darken;
}

#product-card-3 {
  background-image: url("../assets/product-card-bg-2.png");
  background-size: 100% 100%;
}

#product-1 {
  position: absolute;
  width: 140%;
  left: -10%;
  top: 40%;
}

#product-2 {
  position: absolute;
  width: 120%;
  left: 5%;
  top: 30%;
  background-blend-mode: hard-light;
}

#product-3 {
  position: absolute;
  width: 80%;
  left: 20%;
  bottom: 0;

}

.product-text {
  //styleName: 标题1;
  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: white;

  position: absolute;
  top: 5%;
  left: 5%;
}

.roadmap-title {
  font-family: Microsoft YaHei, serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  text-align: left;

  color: #31354D;

  margin-top: 80px;
  margin-bottom: 56px;
}

.steps-container {
  width: 938px;
  height: 104px;

  margin-bottom: 50px;
}

.step {
  width: 286px;
  height: 104px;
  border-radius: 20px;
  background-color: #EFF1F8;

  //styleName: 中标题;
  font-family: Microsoft YaHei, serif;
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: center;
  line-height: 104px;
  color: #6374B6;
}

.step-images-container {
  width: 1060px;
  height: 316px;

  margin-bottom: 220px;
}

.step-images {
  width: 316px;
  height: 316px;
  border-radius: 10px;

  object-fit: cover;
}

</style>