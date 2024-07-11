<template>
  <el-row align="middle" justify="center" class="common menu-container">
    <!--标签-->
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-solution')" style="line-height: 100%">竞赛解决方案</el-link>
    </el-col>
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-hardware')">硬件产品</el-link>
    </el-col>
    <el-col :span="8" class="centered-content">
      <el-link @click.prevent="scrollTo('home-ed')">STEAM教育</el-link>
    </el-col>

  </el-row>


  <div class="home-container">
    <div class="title-container">
      <h1 id="title">智慧土豆</h1>
      <h2 id="subtitle">机器人技术支持专家</h2>
    </div>
  </div>

  <div class="home-content-left">
    <el-row id="home-solution">
      <el-col id="competition-text-col" :span="12">
        <span id="competition-text">竞赛解决方案</span>
        <img src="../assets/star.png" width="52px" height="53px">
        <span id="competition-english-text">Competition Solutions</span>
        <el-card id="competition-description" style="width: 561px">
          <p style="margin-right: -15px">
            在机器人竞赛学习与教育领域，我们致力于为每位学员提供个性化定制的学习指导方案和专业化的技能培训，帮助他们实现学习上的突破和提升。无论是机械设计、电子电路、编程语言还是控制算法，我们都会全力以赴，为学员创造最佳的学习环境和机会，助力他们在机器人竞赛中取得成功。</p>
        </el-card>
      </el-col>
      <el-col :span="9" class="solution-image">
        <p class="float" id="competition-float1">竞赛辅导</p>
        <p class="float" id="competition-float2">竞赛机器人设计</p>
        <image-zoom id="home-solution-img" :src="getAssetsFile('home-solution-image.png')"></image-zoom>
      </el-col>
    </el-row>
  </div>

  <div class="home-content-right">
    <el-row id="home-hardware">
      <el-col :span="12">
        <image-zoom id="home-product-img" :src="getAssetsFile('product.png')"></image-zoom>
        <img id="home-product-bg1" src="../assets/img.png">
        <img id="home-product-bg2" src="../assets/img.png">
        <p class="float" id="hardware1-float">自研硬件</p>
        <p class="float" id="hardware2-float">开发平台</p>

      </el-col>

      <el-col id="hardware-text-col" :span="12">
        <img src="../assets/star.png" width="52px" height="53px" style="margin-left: 200px; margin-right: 15px">
        <span id="hardware-text">硬件产品</span> <br>

        <span id="hardware-english-text">Hardware Products</span>
        <el-card id="hardware-description" style="width: 561px">
          <p>
            我们自研的MP-0、MP-1等教育机器人为机器人竞赛学习与教育提供了强大的支持。它们不仅助力比赛进行，还为学员提供了一个实践和技能提升的平台。通过与这些教育机器人的互动和实践，学员将能够全面提升自己的机器人竞赛能力和STEM领域的学习和发展水平。</p>
        </el-card>
      </el-col>

    </el-row>
  </div>

  <div class="home-content-left">
    <el-row id="home-ed">
      <el-col id="competition-text-col" :span="12">
        <span id="competition-text">STEAM 教育</span>
        <img src="../assets/star.png" width="52px" height="53px">
        <span id="competition-english-text">STEAM Education</span>
        <el-card id="competition-description" style="width: 561px">
          <p style="margin-right: -15px">
            我们的专业Robomaster、Robocon、FRC等竞赛培训旨在为学生提供全面且深入的竞赛准备，帮助他们在机器人领域斩获佳绩，并为未来STEM领域的学习和发展奠定坚实基础。通过我们的培训服务，学生将能够掌握机器人竞赛所需的专业技能，培养创新思维和团队合作能力，为未来的成功铺就坚实的道路。</p>
        </el-card>
      </el-col>
      <el-col class="solution-image" :span="9">
        <p class="float" id="edu-float1">专业师资</p>
        <p class="float" id="edu-float2">参与比赛</p>
        <p class="float" id="edu-float3">培养兴趣</p>


        <image-zoom id="home-steam-ed-img" :src="getAssetsFile('steam-education.png')"></image-zoom>

      </el-col>
    </el-row>
  </div>

  <div class="home-past-project">
    <h2 id="past-project-header">过往项目</h2>
    <el-carousel height="500px" :show-indicators="true" :motion-blur="true">
      <el-carousel-item>
        <el-row>
          <el-col id="project-idx" :span="3">
            <p id="project-idx-text">案例一</p>
          </el-col>
          <el-col class="project-card" :span="17">
            <div class="black-filter">
              <img src="../assets/project-card.png"
                   style="width: 439px;height:320px; position:absolute; right: 124px; top:68px">
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

          </el-col>

        </el-row>
      </el-carousel-item>

      <el-carousel-item>
        <el-row>
          <el-col class="project-card" :span="17">
            <div class="black-filter">
              <img src="../assets/project-card-2.png"
                   style="width: 300px;height:382px; position:absolute; right: 424px; top:33px">
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

          </el-col>
          <el-col id="project-idx" :span="3">
            <p id="project-idx2">案例二</p>
          </el-col>
        </el-row>
      </el-carousel-item>


    </el-carousel>

  </div>

  <div class="home-about-us">
    <h2 id="about-title-cn"> 关于我们 </h2>
    <h3 id="about-title-en"> about us</h3>
    <div class="home-about-us-text">
      <img id="logo" src="../assets/logo.png">
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
.black-filter {
  background: black;
  opacity: 90%;
}

#home-about-text {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  margin-left: 68px;
  margin-right: 69px;
  color: #4d4d4d;
}

#logo {
  width: 683px;
  height: 159px;
  margin-top: 54px;
  margin-bottom: 46px;
}

.home-about-us-text {
  margin: auto;
  width: 1009px;
  height: 448px;
  background-image: url("../assets/about-bg.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#about-title-cn {
  font-family: "Microsoft YaHei";
  font-weight: 700;
  font-size: 60px;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  color: #31354D;
  display: inline-block;
}

#about-title-en {
  font-family: "TT Supermolot";
  font-size: 50px;
  line-height: 61.5px;
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
  margin-bottom: 100px;
}

.card-text {
  padding-top: 20px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-size: 30px;
  color: white;
  line-height: 35.59px;
  letter-spacing: 0.12em;
}

.card-text-div {
  background-image: url("../assets/card-bg.png");
  height: 79px;
  width: 466px;
  margin-left: 43px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  text-align: center;

  margin-bottom: 0px;


}


#card-title {
  color: white;
  font-weight: 700;
  font-family: "Microsoft YaHei";
  font-size: 35px;
  line-height: 46px;
  letter-spacing: 0.12em;
  margin-top: 45px;
  margin-left: 55px;
}

.project-card {
  margin-left: 70px;
  background-color: #31354D;
  border-radius: 15px;
}

#project-idx {
  background-color: #D0D5E9;
  height: 449px;
  border-radius: 15px;
  width: 138px;
  margin-left: 79px;
  color: #6374B6;
  font-size: 35px;
  line-height: 45.19px;
  font-weight: 700;
  text-orientation: upright;
  text-align: center;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  justify-content: center;
}

#project-idx2 {
  background-color: #D0D5E9;
  height: 449px;
  border-radius: 15px;
  width: 138px;
  margin-right: 79px;
  color: #6374B6;
  font-size: 35px;
  line-height: 45.19px;
  font-weight: 700;
  text-orientation: upright;
  text-align: center;
  writing-mode: vertical-rl;
  letter-spacing: 0.3em;
  justify-content: center;
}

#project-idx-text {
  padding-right: 35px;
}


.home-past-project {
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 130px;

}

#past-project-header {
  font-size: 60px;
  line-height: 79.19px;
  font-family: "Microsoft YaHei";
  color: #31354D;
  text-align: center;
}

#hardware1-float {
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 215px;
}

#hardware2-float {
  position: absolute;
  z-index: 3;
  left: 564px;
  top: 306px;
}

#edu-float1 {
  position: absolute;
  top: 5px;
  right: 544px;

}

#edu-float2 {
  position: absolute;
  top: 360px;
  right: 550px;

}

#edu-float3 {
  position: absolute;
  right: 130px;
  top: 220px;

}

#home-steam-ed-img {
  position: absolute;
  left: 730px;
  top: 60px;
  width: 499px;
  height: 375px;
  z-index: 0;
}

.float {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25); /* 添加阴影特效 */
  font-family: "Microsoft YaHei";
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  justify-content: center;
  position: absolute;
  color: #8596CB;
  border-style: hidden;
  border-radius: 30px;
  background-color: #ECF1FF;
  z-index: 3;
  padding: 18px 33px 18px 33px;
}

#competition-float1 {
  margin-top: 107px;
  //margin-left: 10px;
}

#competition-float2 {
  margin-top: 320px;
  margin-left: 354px;
}

.common {
  background-color: #6374B6;
  background-size: contain;
  height: 65px;
}

#home-solution-img {
  width: 527px;
  height: 279px;
  position: absolute;
  margin-top: 66px;
  margin-left: 66px;
  //z-index: this.zIndex;
}

#home-education-img {
  width: 520px;
  height: 393px;
  position: absolute;
  right: 200px;
  top: 40px;
  //z-index: 0;
}

#home-product-img {
  width: 609px;
  height: 418px;
  z-index: 2;
  padding-left: 111px;
  position: absolute;

}

#home-product-bg1 {
  width: 453px;
  height: 349px;
  z-index: 1;
  position: absolute;
  left: 257px;
  top: 10px;
  border-radius: 10px;

}

#home-product-bg2 {
  width: 287px;
  height: 221px;
  z-index: 0;
  position: absolute;
  left: 168px;
  top: 207px;
  border-radius: 10px;
}

.solution-image {
  background-image: url("../assets/img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 30px;
  border-radius: 30px;
}

#competition-description {
  border-radius: 10px;
  margin-left: 149px;
  font-family: "Microsoft YaHei";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  color: #000000B2;
  background-color: #EFF1F87A;
}

#hardware-description {
  border-radius: 10px;
  margin-left: 20px;
  font-family: "Microsoft YaHei";
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  color: #000000B2;
  background-color: #EFF1F87A;
}

#competition-text-col {
  padding-top: 40px;
}

#hardware-text-col {
  padding-top: 40px;
}

#competition-english-text {
  font-family: "TT Supermolot";
  font-size: 50px;
  font-style: italic;
  line-height: 61.5px;
  color: #BDC8E4;
  font-weight: 900;
  padding-left: 149px;
}

#competition-text {
  padding-left: 149px;
  font-size: 60px;
  line-height: 79.19px;
  font-weight: 700;
  color: #31354D;
  letter-spacing: 0.05em;
  font-family: "Microsoft YaHei";
  align-items: center;
}

#hardware-text {
  font-size: 60px;
  line-height: 79.19px;
  font-weight: 700;
  color: #31354D;
  letter-spacing: 0.05em;
  font-family: "Microsoft YaHei";
  align-items: center;
}

#hardware-english-text {
  font-family: "TT Supermolot";
  font-size: 50px;
  font-style: italic;
  line-height: 61.5px;
  color: #BDC8E4;
  font-weight: 900;
  position: relative;
  left: 55px;
}

.centered-content {
  text-align: center;
  height: 100%;
}

.el-link {
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

.home-content-left {
  margin-top: 180px;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
}

.home-content-right {
  height: 100%;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
}

.title-container {

  color: #FFFFFF;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#title {
  font-family: Microsoft YaHei;
  font-size: 64px;
  line-height: 77.61px;
  letter-spacing: 0.5em;
  text-align: center;
  font-weight: 700;
}

#subtitle {
  font-family: Microsoft YaHei;
  font-size: 24px;
  line-height: 29.1px;
  letter-spacing: 0.5em;
  text-align: center;
  font-weight: 700;

}

.menu-container {
  position: sticky;
  top: 75px;
  width: 100%;
  z-index: 100;
}

</style>