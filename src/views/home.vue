<template>
  <el-row align="middle" justify="center" class="common menu-container">
    <!--主页标题-->
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-solution')">竞赛解决方案</el-link>
    </el-col>
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-hardware')">硬件产品</el-link>
    </el-col>
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-ed')">STEM教育</el-link>
    </el-col>
  </el-row>


    <div class="home-container">
      <div class="title-container">
        <div class="overlay">
          <h1 class="title">智慧土豆</h1>
          <h2 class="subtitle">机器人技术支持专家</h2>
        </div>
      </div>
    </div>



  <el-row align="middle" justify="center" class="home-content-left">
    <el-row id="home-solution" justify="space-between">
      <div id="competition-text-col">
        <span id="competition-text">竞赛解决方案</span>
        <img src="../assets/star.png" class="star" alt="">
        <br>
        <span id="competition-english-text">Competition Solutions</span>
        <div id="competition-description" >
          <p style="padding:2.063rem 1.375rem 1.563rem 1.313rem">
            在机器人竞赛学习与教育领域，我们致力于为每位学员提供个性化定制的学习指导方案和专业化的技能培训，帮助他们实现学习上的突破和提升。无论是机械设计、电子电路、编程语言还是控制算法，我们都会全力以赴，为学员创造最佳的学习环境和机会，助力他们在机器人竞赛中取得成功。</p>
        </div>
      </div>

      <div class="solution-image">
        <p class="float" id="competition-float1">竞赛辅导</p>
        <p class="float" id="competition-float2">竞赛机器人设计</p>
        <image-zoom id="home-solution-img" :src="getAssetsFile('home-solution-image.png')"></image-zoom>
      </div>



    </el-row>
  </el-row>

  <el-row align="middle" justify="center" class="home-content-right">
    <el-row id="home-hardware" justify="space-between">

      <div class="hardware-img">
        <image-zoom id="home-product-img" :src="getAssetsFile('product.png')"></image-zoom>
        <img id="home-product-bg1" src="../assets/img.png" alt="">
        <img id="home-product-bg2" src="../assets/img.png" alt="">
        <p class="float" id="hardware1-float">自研硬件</p>
        <p class="float" id="hardware2-float">开发平台</p>

      </div>

      <div id="hardware-text-col">
        <div class="hardware-text-container" >
          <img src="../assets/star.png" class="star" style="margin-right: 0.938rem;" alt="">
          <span id="hardware-text">硬件产品</span> <br>
          <span id="hardware-english-text">Hardware Products</span>
        </div>


        <div id="competition-description">
          <p style="padding:2.063rem 1.375rem 1.563rem 1.313rem">
            我们自研的MP-0、MP-1等教育机器人为机器人竞赛学习与教育提供了强大的支持。它们不仅助力比赛进行，还为学员提供了一个实践和技能提升的平台。通过与这些教育机器人的互动和实践，学员将能够全面提升自己的机器人竞赛能力和STEM领域的学习和发展水平。</p>
        </div>
      </div>

    </el-row>
  </el-row>

  <el-row align="middle" justify="center" class="home-content-left">
    <el-row id="home-ed" justify="space-between">
      <div id="competition-text-col">
        <span id="competition-text">STEM 教育</span>
        <img src="../assets/star.png" class="star" alt="">
        <br>
        <span id="competition-english-text">STEM Education</span>

        <div id="competition-description">
          <p style="padding:2.063rem 1.375rem 1.563rem 1.313rem">
            我们的专业Robomaster、Robocon、FRC等竞赛培训旨在为学生提供全面且深入的竞赛准备，帮助他们在机器人领域斩获佳绩，并为未来STEM领域的学习和发展奠定坚实基础。通过我们的培训服务，学生将能够掌握机器人竞赛所需的专业技能，培养创新思维和团队合作能力，为未来的成功铺就坚实的道路。</p>
        </div>
      </div>
      <div class="solution-image" >
        <p class="float" id="edu-float1">专业师资</p>
        <p class="float" id="edu-float2">参与比赛</p>
        <p class="float" id="edu-float3">培养兴趣</p>
        <image-zoom id="home-steam-ed-img" :src="getAssetsFile('steam-education.png')"></image-zoom>
      </div>
    </el-row>
  </el-row>

  <div class="home-past-project">
    <h2 id="past-project-header">过往项目</h2>
    <el-carousel style="height: 30rem;" autoplay="false" motion-blur="true">
      <el-carousel-item style="height: 30rem">
        <el-row align="middle" justify="center">
          <el-row justify="space-between" style="width: 80rem">
            <div id="project-idx">
              <p id="project-idx-text">案例一</p>
            </div>
            <div class="project-card" style="position: relative">
              <div class="black-filter">
                <el-carousel motion-blur="true" indicator-position="none" arrow="never"  style="width: 27.438rem;height:20rem; position:absolute; right: 2.75rem; top:4.25rem">
                <div class="black-filter">
                  <el-carousel-item>
                    <img src="../assets/project-card.png"
                         style="width: 27.438rem;height:20rem;" alt="">
                  </el-carousel-item>

                  <el-carousel-item>
                    <img src="../assets/home-car1.png"
                         style="width: 27.438rem;height:20rem;" alt="">
                  </el-carousel-item>

                  <el-carousel-item>
                    <img src="../assets/home-car2.png"
                         style="width: 27.438rem;height:20rem;" alt="">
                  </el-carousel-item>

                  <el-carousel-item>
                    <img src="../assets/home-car3.png"
                         style="width: 27.438rem;height:20rem;" alt="">
                  </el-carousel-item>
                </div>
              </el-carousel>
              </div>

              <p id="card-title">x大学智能车大赛方案设计</p>
              <div class="card-text-div">
                <p class="card-text">提供比赛方案策划</p>

              </div>
              <div class="card-text-div">
                <p class="card-text">比赛道具硬件支持</p>


              </div>
              <div class="card-text-div">
                <p class="card-text">竞赛技术规则指导</p>
              </div>

            </div>

          </el-row>
        </el-row>

      </el-carousel-item>

      <el-carousel-item style="height: 30rem">
        <el-row align="middle" justify="center">
          <el-row justify="space-between" style="width: 80rem">
            <div class="project-card">
              <div class="black-filter" style="position: relative">
                <el-carousel motion-blur="true" arrow="never" indicator-position="none" style="width: 18.75rem;height:23.875rem; position:absolute; margin-left: 40.5rem; margin-top:2.363rem">
                  <div class="black-filter">
                    <el-carousel-item>
                      <img src="../assets/project-card-2.png"
                           style="width: 18.75rem;height:23.875rem;" alt="">
                    </el-carousel-item>

                    <el-carousel-item>
                      <img src="../assets/home-competition1.png"
                           style="width: 18.75rem;height:23.875rem;" alt="">
                    </el-carousel-item>

                    <el-carousel-item>
                      <img src="../assets/home-competition2.png"
                           style="width: 18.75rem;height:23.875rem;" alt="">
                    </el-carousel-item>
                  </div>
                </el-carousel>
              </div>

              <p id="card-title">MakeX 挑战赛竞赛方案</p>
              <div class="card-text-div">
                <p class="card-text">竞赛技术教育指导</p>

              </div>
              <div class="card-text-div">
                <p class="card-text">道具硬件开发支持</p>


              </div>
              <div class="card-text-div">
                <p class="card-text">竞赛技术规则指导</p>
              </div>

            </div>
            <div id="project-idx">
              <p>案例二</p>
            </div>
          </el-row>
        </el-row>

      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="home-about-us">
    <h2 id="about-title-cn"> 关于我们 </h2>
    <h3 id="about-title-en"> about us</h3>
    <div class="home-about-us-text">
      <img id="logo" src="../assets/logo.png" alt="">
      <p id="home-about-text"> 致力于为中小学生提供以机器人科技研发为核心的创新实践平台。我们提供个性化定制的学习指导方案和专业化的技能培训，旨在激发学生的科技创新精神，让他们在接触顶尖机器人赛事的同时感受
        STEM 教育的魅力。Infinity Geek Robotics Club 科研基地主营项目为 FRC 竞赛培训，助力学生在机器人领域斩获佳绩，并为未来
        STEM 领域的学习和发展奠定坚实基础。</p>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import ImageZoom from "../components/image-zoom.vue";
import {getAssetsFile} from "../utils/getAssetsFile.js"

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

function scrollToAnchorPoint(refName: any) {
  const el = this.$refs[refName]
  el.scrollIntoView({behavior: 'smooth'})

}

</script>

<script lang="ts">
export default {
  name: "Home",
  computed: {
    imageStyle() {
      return {
        zIndex: this.zIndex
      };
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      const headerOffset = 200; // 固定头部的高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style scoped lang="less">
@header-height: 5rem;
@mobile-header-height: 12rem;

.black-filter {
  background: black;
  opacity: 90%;
}

#home-about-text {
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  margin-left: 4.25rem;
  margin-right: 4.313rem;
  color: #4d4d4d;
}

#logo {
  width: 42.688rem;
  height: 9.938rem;
  margin-top: 3.375rem;
  margin-bottom: 2.875rem;
}

.home-about-us-text {
  margin: auto;
  width: 63.063rem;
  height: 28rem;
  background-image: url("../assets/about-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#about-title-cn {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 4.949375rem;
  letter-spacing: 0.12rem;
  color: #31354D;
  display: inline-block;
}

#about-title-en {
  font-family: "TT Supermolot", sans-serif;
  font-size: 3.125rem;
  line-height: 3.84375rem;
  font-style: italic;
  font-weight: bolder;
  color: #CCD2E9;
  display: inline-block;
}

.home-about-us {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6.25rem;
}

.card-text {
  padding-top: 1.25rem;
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 400;
  font-size: 1.875rem;
  color: white;
  line-height: 2.224375rem;
  letter-spacing: 0.12rem;
}

.card-text-div {
  background-image: url("../assets/card-bg.png");
  height: 4.9375rem;
  width: 29.125rem;
  margin-left: 2.6875rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.9375rem;
  text-align: center;
}


#card-title {
  color: white;
  font-weight: 700;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 2.1875rem;
  line-height: 2.875rem;
  letter-spacing: 0.12rem;
  margin-top: 2.8125rem;
  margin-left: 3.4375rem;
}

.project-card {
  position: relative;
  width: 65rem;
  //margin-left: 4.375rem;
  background-color: #31354D;
  border-radius: 0.9375rem;
}

#project-idx {
  background-color: #D0D5E9;
  height: 28.063rem;
  border-radius: 0.9375rem;
  width: 8.625rem;
  //margin-left: 8.9375rem;
  color: #6374B6;
  font-size: 2.1875rem;
  font-weight: 700;
  text-orientation: upright;
  text-align: center;
  writing-mode: vertical-rl;
  letter-spacing: 0.3rem;
  justify-content: center;
  align-items: center;
  display: flex;
}


//#project-idx-text {
//  padding-left: 2.188rem;
//}


.home-past-project {
  width: 100%;
  height: 100%;
  margin-top: 6.25rem;
  margin-bottom: 8.125rem;

}

#past-project-header {
  font-size: 3.75rem;
  line-height: 4.949rem;
  font-family: "Microsoft YaHei", sans-serif;
  color: #31354D;
  text-align: center;
}

#hardware1-float {
  width: 6.563rem;
  position: absolute;
  z-index: 3;
  margin-top: 2rem;
  margin-left: 3.438rem;
}

#hardware2-float {
  width: 6.563rem;
  position: absolute;
  z-index: 3;
  margin-left: 23.25rem;
  margin-top: 20.125rem;
}

#edu-float1 {
  position: absolute;
  margin-top: 1.3rem;
  margin-left: 1.2rem;
  width: 5rem;

}

#edu-float2 {
  position: absolute;
  margin-top: 23.5rem;
  margin-right: 33.375rem;
  width: 5rem;

}

#edu-float3 {
  position: absolute;
  margin-left: 26.8rem;
  margin-top: 13.75rem;
  width: 5rem;

}

#home-steam-ed-img {
  position: relative;
  margin-left: -2rem;
  margin-top: 3rem;
  width: 31.1875rem;
  height: 23.4375rem;
  z-index: 0;
}

.float {
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25); /* 添加阴影特效 */
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
  justify-content: center;
  text-align: center;
  position: absolute;
  color: #8596CB;
  border-style: hidden;
  border-radius: 1.875rem;
  background-color: #ECF1FF;
  z-index: 3;
  padding: 1.125rem 2.063rem 1.125rem 2.063rem;
}

#competition-float1 {
  width: 6.563rem;
  height: 2.125rem;
  margin-top: 6.688rem;
}

#home-hardware {
  width: 71.5rem;
}

#competition-float2 {
  width: 8.8rem;
  margin-top: 20rem;
  margin-left: 22.125rem;
}

.common {
  background-color: #6374B6;
  background-size: contain;
  height: 4.063rem;
}

#home-solution {
  width: 71.5rem;
}
#home-ed{
  width: 71.5rem;
}

#home-solution-img {
  width: 32.938rem;
  height: 17.438rem;
  position: absolute;
  margin-top: 4.125rem;
  margin-left: 4.125rem;

}

#home-education-img {
  width: 32.5rem;
  height: 24.563rem;
  position: absolute;
  right: 12.5rem;
  top: 2.5rem;
}

#home-product-img {
  width: 38.063rem;
  height: 26.125rem;
  z-index: 2;
  position: absolute;
}

#home-product-bg1 {
  width: 28.313rem;
  height: 21.813rem;
  z-index: 1;
  position: absolute;
  margin-left: 7.063rem;
  border-radius: 0.625rem;
}

#home-product-bg2 {
  width: 17.938rem;
  height: 13.813rem;
  z-index: 0;
  position: absolute;
  margin-top: 12.938rem;
  border-radius: 0.625rem;
}

.solution-image {
  position: relative;
  background-image: url("../assets/img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1.875rem;

  width: 31.875rem;
  height: 26.063rem;
}

#competition-description {
  width: 35.063rem;
  border-radius: 0.625rem;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: #000000B2;
  background-color: #EFF1F87A;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

#hardware-description {
  border-radius: 0.625rem;
  margin-left: 1.25rem;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: #000000B2;
  background-color: #EFF1F87A;
}

#competition-text-col {
  width: 35.063rem;
  height: 30rem;
}

#hardware-text-col {
  width: 35.063rem;
}

#competition-english-text {
  //width: 553px;

  //styleName: 英文标题;
  font-family: TT Supermolot, sans-serif;
  font-size: 2.875rem;
  font-style: italic;
  font-weight: 900;
  line-height: 3.844rem;

  text-align: left;
  color: #BDC8E4;
}

#competition-text {
  //padding-left: 9.313rem;
  font-size: 3.75rem;
  line-height: 4.949rem;
  font-weight: 700;
  color: #31354D;
  letter-spacing: 0.05rem;
  font-family: "Microsoft YaHei", sans-serif;
  align-items: center;
}

#hardware-text {
  font-size: 3.75rem;
  line-height: 4.949rem;
  font-weight: 700;
  color: #31354D;
  letter-spacing: 0.05rem;
  font-family: "Microsoft YaHei", sans-serif;
  align-items: center;
  //margin-right: 8rem;
}

#hardware-english-text {
  font-family: "TT Supermolot", sans-serif;
  font-size: 3.125rem;
  font-style: italic;
  line-height: 3.844rem;
  color: #BDC8E4;
  font-weight: 900;
  position: relative;
  //margin-right: 8rem;
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.el-link {
  font-family: "Microsoft YaHei", sans-serif;
  color: white;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.1rem;
  text-align: left;

  &:hover {
    color: #8596CB;

    &::after {
      content: "";
      border-bottom: 0.063rem solid white;
    }
  }
}

.home-container {
  background-image: url("../assets/home-bg.png");
  background-size: cover;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-content-left {
  margin-top: 11.25rem;
  margin-bottom: 5.125rem;
}

.home-content-right {
  margin-top: 11.25rem;
  margin-bottom: 5.125rem;
}

.title-container {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
}

.title {
  font-family: Microsoft YaHei, sans-serif;
  font-size: 4rem;
  line-height: 4.851rem;
  letter-spacing: 2rem;
  text-align: center;
  font-weight: 700;
  z-index: 2;
  position: relative;
}

.subtitle {
  font-family: Microsoft YaHei, sans-serif;
  font-size: 1.5rem;
  line-height: 1.819rem;
  letter-spacing: 1.2rem;
  text-align: center;
  font-weight: 700;
  z-index: 2;
  position: relative;
}

.menu-container {
  position: sticky;
  top: @header-height;
  width: 100%;
  z-index: 100;
}


.overlay {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.star{
  width: 3.25rem;
  height: 3.25rem;
}

.hardware-img{
  height: 30rem;
  position: relative;
  width:35.063rem;
}

.hardware-text-container{
  text-align: right;
}

@media screen and (max-width: 768px) {
  .menu-container {
    top: @mobile-header-height;
  }
  .home-container{
    height: 80rem;
  }

  .title{
    font-size: 8rem;
  }
  .subtitle{
    font-size: 3rem;
  }
  .star{
    display: none;
  }

  #home-solution {
    height: 70rem;
  }

  #competition-text-col{
    width: 71.5rem;
    height: 40rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
  }

  #competition-text{
    font-size: 6rem;
    letter-spacing: 1.2rem;
    margin-bottom: 2rem;
  }

  #competition-english-text{
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  #competition-description{
    width: 80rem;
    border-radius: 0;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 3rem;
    background-color: rgb(246,249,255) ;
    line-height: 3.5rem;
    letter-spacing: 0.5rem;
    box-shadow: 0 0 0 0;

  }

  #home-solution{
    margin-bottom: 15rem;
  }

  .solution-image {
    width: 47.8125rem;
    height: 39.0945rem;
    margin-left: 8rem;
  }

  #home-solution-img{
    width: 50.938rem;
    height: 30.438rem;
    position: absolute;
    margin-top: 4.125rem;
    margin-left: 4.125rem;
  }

  #competition-float1{
    font-size: 2rem;
    width: 8rem;
    margin-top: 7.3rem;
  }

  #competition-float2{
    font-size: 2rem;
    width: 14rem;
    margin-top: 32rem;
    margin-left: 32.125rem;
  }

  #home-hardware{
    flex-direction: column-reverse;
  }

  #hardware-text-col{
    width: 71.5rem;
    height: 60rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  #hardware-text{
    font-size: 6rem;
    letter-spacing: 1.2rem;
    margin-bottom: 2rem;
  }

  #hardware-english-text{
    font-size: 5rem;
    margin-bottom: 2rem;
  }

  .hardware-text-container{
    height: 15rem;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .hardware-img{
    height: 50rem;
    position: relative;
    width:75.063rem;
  }

  #home-product-img {
    width: 70.063rem;
    height: 35.125rem;
    z-index: 2;
    position: absolute;
    margin-top: -5rem;
  }

  #home-product-bg1 {
    width: 37.313rem;
    height: 27.813rem;
    margin-left: 21.063rem;
    margin-top: -3rem;
  }

  #home-product-bg2 {
    width: 28.938rem;
    height: 18.813rem;
    margin-top: 11.938rem;
    margin-left: 13rem;
  }

  #hardware1-float {
    width: 8rem;
    margin-top: -1rem;
    margin-left: 17.9rem;
    font-size: 2rem;
  }

  #hardware2-float {
    width: 8rem;
    margin-top: 23rem;
    margin-left: 44.438rem;
    font-size: 2rem;
  }

  #home-ed {
    height: 70rem;
  }

  .home-content-left {
    margin-top: 11.25rem;
    margin-bottom: 5.125rem;
    height: 100rem;
  }

  #home-steam-ed-img {
    margin-left: -4rem;
    margin-top: 1rem;
    width: 48.1875rem;
    height: 42.4375rem;
    z-index: 0;
  }

  #edu-float1 {
    margin-top: 2.5rem;
    margin-left: 2.5rem;
    width: 8rem;
    font-size: 2rem;

  }

  #edu-float2 {
    margin-top: 37.5rem;
    margin-left: -1rem;
    width: 8rem;
    font-size: 2rem;

  }

  #edu-float3 {
    margin-left: 40rem;
    margin-top: 23.75rem;
    width: 8rem;
    font-size: 2rem;

  }







}</style>