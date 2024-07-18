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
    <div class="products-container">

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

    </div>
  </el-row>


  <!--分割线-->
  <el-row align="middle" justify="center">
    <el-divider/>
  </el-row>

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
  font-size: 2.1875rem; /* 35px */
  font-weight: 700;
  line-height: 2.8869rem; /* 46.19px */
  letter-spacing: 0.12rem;
  text-align: left;
  color: #31354D;

  margin-top: 3.4375rem; /* 55px */
  margin-left: 6.0625rem; /* 97px */
  margin-bottom: 3.125rem; /* 50px */
}

.slider-container {
  margin-bottom: 7.1875rem; /* 115px */
}

.header-switch-triangle {
  width: 1.817rem; /* 29.07px */
  height: 4.345rem; /* 69.52px */
}

.header-container {
  background-image: url("../assets/orange-rectgangle-long.png");
  background-size: cover;
  width: 66.9375rem; /* 1071px */
  height: 29.75rem; /* 476px */

  display: flex;
  align-items: center;

  margin-left: 1.25rem; /* 20px */
  margin-right: 1.25rem; /* 20px */
  border-radius: 47px; /* 47px */
}

.header-text {
  font-family: Microsoft YaHei, serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 4.9494rem; /* 79.19px */
  letter-spacing: 0.12rem;
  text-align: left;
  color: white;

  margin-left: 6.25rem; /* 100px */
}

.polygon-combinations {
  width: 39.252rem; /* 628.03px */
  height: 40.1381rem; /* 642.21px */

  position: relative;
  top: 6.875rem; /* 110px */
}

.product-title {
  font-family: Microsoft YaHei, serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 4.9494rem; /* 79.19px */
  letter-spacing: 0.12rem;
  text-align: left;
  color: #31354D;
  margin-left: 7.125rem; /* 114px */
}

.product-store-link {
  font-family: Microsoft YaHei, serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 2rem; /* 32px */
  letter-spacing: 0.1rem;
  text-align: left;

  color: #0000008A;

  margin-right: 7.5rem; /* 120px */
  margin-top: -1.25rem; /* -20px */
}

.products-container {
  width: 76rem; /* 1216px */
  height: 32.0625rem; /* 513px */
  margin-top: -0.625rem; /* -10px */

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card {
  width: 23.125rem; /* 370px */
  height: 29.1875rem; /* 467px */
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition-duration: 0.5s;

  &:hover {
    width: 25.4375rem; /* 407px */
    height: 32.0625rem; /* 513px */
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
  font-family: Microsoft YaHei, serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 4.9494rem; /* 79.19px */
  letter-spacing: 0.12rem;
  text-align: left;
  color: white;

  position: absolute;
  top: 5%;
  left: 5%;
}

.el-divider {
  width: 81.25rem; /* 1300px */
}

.roadmap-title {
  font-family: Microsoft YaHei, serif;
  font-size: 2.1875rem; /* 35px */
  font-weight: 700;
  line-height: 2.8869rem; /* 46.19px */
  letter-spacing: 0.12em;
  text-align: left;

  color: #31354D;

  margin-top: 5rem; /* 80px */
  margin-bottom: 3.5rem; /* 56px */
}

.steps-container {
  width: 58.625rem; /* 938px */
  height: 6.5rem; /* 104px */
  margin-bottom: 3.125rem; /* 50px */
}

.step {
  width: 17.875rem; /* 286px */
  height: 6.5rem; /* 104px */
  border-radius: 1.25rem; /* 20px */
  background-color: #EFF1F8;

  font-family: Microsoft YaHei, serif;
  font-size: 2.1875rem; /* 35px */
  font-weight: 700;
  letter-spacing: 0.12rem;
  text-align: center;
  line-height: 6.5rem; /* 104px */
  color: #6374B6;
}

.step-images-container {
  width: 66.25rem; /* 1060px */
  height: 19.75rem; /* 316px */
  margin-bottom: 13.75rem; /* 220px */
}

.step-images {
  width: 19.75rem; /* 316px */
  height: 19.75rem; /* 316px */
  border-radius: 0.625rem; /* 10px */
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .mid-title {
    font-size: 5rem;
    line-height: 5rem;
  }

  .header-container {
    width: 80%;
    height: 80rem;
    align-items: normal;

    flex-direction: column;
    overflow: hidden;
  }

  .header-switch-triangle {
    width: 2rem;
    height: 5rem;
    display: none;
  }

  .header-text {
    margin-top: 10rem;
    font-size: 10rem;
    line-height: 12rem;
  }

  .polygon-combinations {
    width: 100rem;
    height: 100rem;
    opacity: 0.7;
    top: -30rem;
    left: 20rem;

  }

  .product-title {
    display: none;

    font-size: 5rem;
    line-height: 5rem;
  }

  .product-store-link {
    display: none;

    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  .products-container {
    width: 80%;
    height: auto;

    display: grid;
    justify-content: center;
    justify-items: center;
    gap: 10rem;
  }

  .product-card {
    width: 80rem;
    height: 90rem;

    pointer-events: none;

    &:hover {
      width: 100rem;
      height: 115rem;
    }
  }

  .product-text {
    font-size: 1500%;
    line-height: 120%;
  }

  .el-divider {
    width: 90%;
  }

  .roadmap-title {
    font-size: 4rem;
  }

  .steps-container {
    width: 75%;
    height: 7rem;
  }

  .step {
    width: 28rem;
    height: 7rem;
    line-height: 7rem;
    font-size: 3.2rem;
  }

  .step-images-container {
    width: 85%;
    height: 30rem;
  }

  .step-images {
    width: 30rem;
    height: 30rem;
  }


}

</style>