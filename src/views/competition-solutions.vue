<template>
  <div class="competition-header">
    <el-carousel :show-indicators="true" @change="handleCarouselChange" indicator-position="none"
                 ref="carousel">
      <!--一定记得在JavaScript中设置numItems以确保指示器的创建正确-->
      <el-carousel-item id="carousel-item1">
        <div class="overlay"></div>
        <el-row class="carousel-container" align="middle" justify="start" style="width: 100%">
          <el-row class="carousel-container" justify="space-between"
                  style="flex-direction: column; margin-left: 3.5rem;   width: 100rem; ">
            <div id="carousel-header">
              竞赛解决方案
            </div>
            <div class="carousel-title">
              FRC
            </div>
            <div id="carousel-text1">
              <p class="carousel-description" style="padding:0.625rem;"> FIRST Robotics Competition
                FIRST机器人挑战赛，简称FRC。是由美国非盈利机构FIRST主办，针对高中生的一项工业级机器人竞赛，把运动的刺激性和科学技术的严谨性结合在一起，学生在有限是时间和资源下，严格遵守规则，制作完成机器人，与志同道合的竞争对手完成一场机器人挑战。迄今为止已经举办30多届，并且获得全球多所高校的认可。</p>
            </div>
          </el-row>
        </el-row>
      </el-carousel-item>

      <el-carousel-item id="carousel-item2">
        <div class="overlay"></div>
        <el-row class="carousel-container" align="middle" justify="start" style="width: 100%">
          <el-row class="carousel-container" justify="space-between"
                  style="flex-direction: column; width: 100rem; margin-left: 3.5rem">
            <div class="carousel-title" id="carousel-title1">
              ROBOMASTER
            </div>
            <div id="carousel-text1">
              <p class="carousel-description" style="padding: 0.625rem"> FIRST Robotics Competition
                FIRST机器人挑战赛，简称FRC。是由美国非盈利机构FIRST主办，针对高中生的一项工业级机器人竞赛，把运动的刺激性和科学技术的严谨性结合在一起，学生在有限是时间和资源下，严格遵守规则，制作完成机器人，与志同道合的竞争对手完成一场机器人挑战。迄今为止已经举办30多届，并且获得全球多所高校的认可。</p>
            </div>
          </el-row>
        </el-row>
      </el-carousel-item>

    </el-carousel>

    <!--指示器容器-->
    <div class="indicator-container"/>
  </div>

  <div class="competition-intro">
    <h2 id="intro-title">让每一场比赛都精彩绝伦</h2>
    <div id="intro-text">
      <p>北京智慧土豆公司，致力于为竞赛团队提供全面、专业的解决方案，以增强其在各类比赛中的竞争力。</p>
    </div>

    <el-row align="middle" justify="center" style="margin-top: 6.625rem;width: 100%;">
      <el-row class="intro-container" justify="space-evenly">
        <div id="intro-img1">
          <h2 id="competition-advising">竞赛辅导</h2>
          <p id="advising-text">
            采取个性化的辅导方案，通过详细的初步评估来了解每个队伍的具体情况，包括队伍的技能水平、技术需求以及之前的竞赛经验。基于这些信息，制定出个性化辅导计划，这个计划将围绕比赛的具体需求，如技术论文提交、演讲、实操等多个方面进行全方位的指导。
          </p>
        </div>

        <div id="intro-img2">
          <h2 id="competition-advising">竞赛机器人设计</h2>
          <p id="advising-text" class="advising-text-desk" >
            公司注重实践和创新，不仅提供机器人的硬件设计和软件编程指导，还会帮助团队进行创新设计的思维训练。设计师和工程师团队会与学生紧密合作，确保设计的机器人能够在满足比赛规则的同时，具备较强的实战能力和创新点。整个设计过程中，团队会定期进行设计的测试和优化，以确保最终的机器人设计能够高效完成比赛任务，从而在竞赛中取得优异成绩。
          </p>
          <p id="advising-text-mobile">
            公司注重实践和创新，不仅提供机器人的硬件设计和软件编程指导，还会帮助团队进行创新设计的思维训练。设计师和工程师团队会与学生紧密合作，确保设计的机器人能够在满足比赛规则的同时，具备较强的实战能力和创新点。
          </p>
        </div>

      </el-row>


    </el-row>
  </div>
  <div class="past-projects">
    <hr class="line" >
    <h2 id="past-projects-title">过往项目</h2>
    <hr class="line">
    <h2 id="card-title">X大学智能车大赛方案设计</h2>
    <el-row align="middle" justify="center" style="width: 100%">
      <el-row class="past-projects-container" justify="space-between">
        <div id="card-content1">
          <p class="card-text1">
            基于X大学信息学院对学习软硬件技术的具体需求，我们着手设计了智能车大赛规则。按照这些规则的要求，我们进一步设计并配置了比赛所需的硬件。最终，比赛在周密的准备和专业的组织下成功举行。</p>
          <p class="float" id="competition-float1">确定需求</p>
        </div>
        <div class="carousel-container">
          <el-carousel class="mobile-carousel">
            <el-carousel-item>
              <img class="carousel-img" src="../assets/competition-carousel-img1.png">
            </el-carousel-item>
            <el-carousel-item>
              <img class="carousel-img" src="../assets/competition-carousel-img2.png">
            </el-carousel-item>
            <el-carousel-item>
              <img class="carousel-img" src="../assets/competition-carousel-img3.png">
            </el-carousel-item>
            <el-carousel-item>
              <img class="carousel-img" src="../assets/competition-carousel-img4.png">
            </el-carousel-item>
          </el-carousel>
          <p class="float" id="competition-mobile-float1">确定需求</p>
          <p class="float" id="competition-mobile-float2">硬件设计</p>
          <p class="float" id="competition-mobile-float3">规则策划</p>
        </div>

        <div id="card-content2">
          <img src="../assets/competition-img3.png" class="card-img1" alt="">
          <img src="../assets/competition-img4.png" class="card-img2" alt="">
          <p class="float" id="competition-float2">硬件设计
            <br> 规则策划</p>


        </div>

        <div id="card-content3">
          <div>
            <image-zoom class="image-zoom1"
                        :src="getAssetsFile('competition-img5.png')"></image-zoom>
            <image-zoom class="image-zoom2"
                        :src="getAssetsFile('competition-img6.png')"></image-zoom>
            <p class="float" id="competition-float3">协助比赛顺利进行</p>
          </div>

        </div>

      </el-row>

    </el-row>
  </div>

  <div class="past-projects">
    <h2 id="card-title">MakeX 挑战赛竞赛方案</h2>
    <el-row align="middle" justify="center" style="width: 100%;">
      <el-row justify="space-between" class="past-projects-container">
        <div id="card-content4" style="position: relative;">
          <p class="card-text1">
            在指导参加MakeX的队伍时，首先分析比赛要求和队伍的实际情况，然后提供一个包含技术指导、策略规划和实战训练的全面辅导方案。此外，公司会针对MakeX比赛的特点，帮助队伍设计能够高效完成比赛任务的机器人，并确保其设计既创新又实用。</p>
          <p class="float" id="competition-float4">确定需求</p>
        </div>
        <div class="carousel-container" id="carousel-container1">
          <el-carousel class="mobile-carousel1">
            <el-carousel-item class="carousel-item1">
              <img class="carousel-img1" src="../assets/competition-img7.png">
            </el-carousel-item>
            <el-carousel-item class="carousel-item1">
              <img class="carousel-img1" src="../assets/competition-img8.png">
            </el-carousel-item>
          </el-carousel>
          <p class="float" id="competition-mobile-float4">确定需求</p>
          <p class="float" id="competition-mobile-float5">方案确定</p>
          <p class="float" id="competition-mobile-float6">成品交付</p>
        </div>
        <div id="card-content5">
          <img src="../assets/competition-img7.png" id="card-img3" alt="">
          <p class="float" id="competition-float5">方案确定 </p>
        </div>
        <div id="card-content6">
          <img src="../assets/competition-img8.png" id="card-img4" alt="">
          <p class="float" id="competition-float6">成品交付</p>
        </div>
      </el-row>
    </el-row>
  </div>

  <div class="information">
    <h2 id="card-title" style="color:#31354D; margin-bottom: 1.875rem">为您提供专业竞赛解决方案</h2>
    <p id="info-text">创赛精准、资源全面，专业定制竞赛方案。定制方案，全程服务，打造极致竞赛体验。</p>
    <div class="info-text-area">
      <p id="info-text1">创赛精准、资源全面，专业定制竞赛方案。</p>
      <p id="info-text1" style="margin-top: -1rem">定制方案，全程服务，打造极致竞赛体验。</p>
    </div>

    <el-row justify="center">
      <info-bubbles></info-bubbles>
    </el-row>
  </div>


</template>

<script setup>
import ImageZoom from "../components/image-zoom.vue";
import {getAssetsFile} from "../utils/getAssetsFile.js";
import InfoBubbles from "../components/info-bubbles.vue";
import {onMounted, ref} from "vue";


let activeItem = 0

// 监听走马灯的切换事件
const handleCarouselChange = (val) => {
  document.querySelector(`#indicator-${activeItem}`).style.backgroundColor = 'white';
  document.querySelector(`#indicator-${val}`).style.backgroundColor = '#6374B6';

  activeItem = val;
}

// 获取走马灯实例
const carousel = ref(null);

// 获取 competition-header里面有几个el-carousel-item
onMounted(() => {
  // 获取有多少个el-carousel-item
  const numItems = 2;

  for (let i = 0; i < numItems; i++) {
    // 创建指示器
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    indicator.id = `indicator-${i}`;
    document.querySelector('.indicator-container').appendChild(indicator);

    // 设置指示器样式
    indicator.style.width = '24px';
    indicator.style.height = '24px';
    indicator.style.borderRadius = '50%';
    indicator.style.backgroundColor = 'white';
    indicator.style.cursor = 'pointer';
    indicator.style.transition = 'all 0.3s';

    // 设置当前元素对应的指示器的样式
    if (i === activeItem) {
      indicator.style.backgroundColor = '#6374B6';
    }

    // 设置指示器的点击事件
    indicator.addEventListener('click', () => {
      handleCarouselChange(i);
      carousel.value.setActiveItem(i);
    });

  }
  // 设置指示器容器的宽度 24px是指示器的宽度，12px是指示器之间的间距
  document.querySelector('.indicator-container').style.width = `${numItems * 24 + 12 * (numItems - 1)}px`;
})

</script>

<script>
export default {
  name: "CompetitionSolutions"
}
</script>

<style scoped lang="less">
#info-text {
  font-family: "Microsoft YaHei", sans-serif;
  color: black;
  font-weight: 400;
  font-size: 0.938rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
}

.information {
  text-align: center;
  width: 100%;
  height: 100%;
  margin-bottom: 150px;
}


.float {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25); /* 添加阴影特效 */
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 700;
  position: absolute;
  color: #8596CB;
  border-style: hidden;
  border-radius: 30px;
  background-color: #ECF1FF;
  z-index: 3;
  padding: 1.125rem 2.063rem 1.125rem 2.063rem;
  text-align: center;
}


#card-content1 {
  width: 23rem;
  height: 22.25rem;
  background-image: url("../assets/card-content-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 0.625rem;
}

#card-content2 {
  width: 27rem;
  position: relative;
}

#card-content4 {
  width: 23rem;
  height: 27.688rem;
  background-image: url("../assets/card-content-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.625rem;
  justify-content: center;
  align-items: center;

}

.card-text1 {
  width: 20rem;
  height: 20.25rem;
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: white;
  text-align: center;
  padding-top: 5.125rem;
  padding-left: 1.25rem;
}

#card-title {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 700;
  font-size: 2.188rem;
  line-height: 2.887rem;
  letter-spacing: 0.12rem;
  color: #6374B6;
  text-align: center;
}

#past-projects-title {
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 60px;
  font-weight: 700;
  color: #31354D;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.12em;

}

.past-projects {
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
}

#advising-text {
  color: white;
  font-weight: 300;
  font-size: 1rem;
  line-height: 2rem;
  font-family: "Microsoft YaHei", sans-serif;
  letter-spacing: 0.12em;
  margin-top: 4.563rem;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  text-align: center;
}

#competition-advising {
  color: white;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 2.188rem;
  font-weight: 700;
  line-height: 2.887rem;
  letter-spacing: 0.12rem;
  text-align: center;
  padding-top: 3.5rem;
}

#intro-img1 {
  background-image: url("../assets/competition-img1.png");
  width: 40.25rem;
  height: 30.25rem;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
}


#intro-img2 {
  background-image: url("../assets/competition-img2.png");
  width: 40.25rem;
  height: 30.25rem;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
}


#intro-text {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  letter-spacing: 0.1rem;
  color: black;
  text-align: center;
}

#intro-title {
  color: #31354D;
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: 700;
  font-size: 2.188rem;
  line-height: 2.887rem;
  letter-spacing: 0.12rem;
  text-align: center;
  margin-bottom: 2.188rem;
}

.competition-intro {
  height: 100%;
  width: 100%;
  margin-top: 3.75rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 黑色半透明蒙版 */
  z-index: 1; /* 确保蒙版在背景图片之上，文本之下 */
}

#carousel-header {
  color: white;
  margin-top: 6.25rem;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 4.949rem;
  letter-spacing: 0.12rem;
  z-index: 2;
  position: relative;

}

.carousel-title {
  font-family: "TT Supermolot", sans-serif;
  color: white;
  font-weight: 900;
  font-size: 6.25rem;
  line-height: 7.688rem;
  font-style: italic;
  z-index: 10;
  position: relative;
  margin-top: 19rem;

}

#carousel-text1 {
  color: white;
  font-size: 1rem;
  line-height: 2rem;
  font-family: "Microsoft YaHei", sans-serif;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.625rem;
  z-index: 2;
  width: 68.75rem;
  height: 9rem;
  position: relative;
  justify-content: center


}

#carousel-item1 {
  background-image: url("../assets/competition-title-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50rem;
}

#carousel-item2 {
  background-image: url("src/assets/robomaster.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50rem;
}

#carousel-title1 {
  margin-top: 30rem;
}

.competition-header {
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 50px;
}

.indicator-container {
  position: absolute;
  //width:96px;
  height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  object-fit: cover;

  z-index: 10;

  right: 0;
  bottom: 0;

  margin-right: 50px;
  margin-bottom: 20px;
}

.el-carousel {
  height: 50rem;
}

.carousel-container {
  height: 50rem;
}

.intro-container {
  width: 100%;
}

.past-projects-container {
  width: 100%;
  margin-left: 5rem;
  height: 30rem
}

#competition-float2 {
  position: absolute;
  margin-top: 19rem;
  margin-left: 15rem;
  font-size: 1.063rem;
  line-height: 1.688rem;
  width: 5rem;
}

#competition-float1 {
  width: 4rem;
  margin-left: 17rem;
  margin-top: -6.5rem;
}

#competition-float4 {
  width: 4rem;
  margin-left: 15rem;
  margin-top: -1.5rem;
}

.card-img1 {
  width: 27rem;
  height: 18.875rem;
  z-index: 2;
  margin-top: 5rem;
  position: absolute;
}

.card-img2 {
  width: 23.125rem;
  height: 25rem;
  position: absolute;
  z-index: 1;
  margin-left: -5rem;
  margin-top: -1rem;

}

#card-content3 {
  width: 27rem;
}

.image-zoom1 {
  width: 22.875rem;
  height: 9.375rem;
  margin-top: 1.5rem
}

.image-zoom2 {
  width: 22.875rem;
  height: 9.375rem;
  margin-top: 1.5rem
}

#competition-float3 {
  margin-top: -2rem;
  margin-left: 12rem;
  width: 8rem;
}

#card-img3 {
  width: 23rem;
  height: 27.688rem;
  z-index: 2;
}

#card-img4 {
  width: 23rem;
  height: 27.688rem;
  position: relative;
}

#card-content5 {
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 27rem;
  position: relative

}

#card-content6 {
  justify-content: center;
  align-items: center;
  width: 27rem;
  position: relative

}

#competition-float5 {
  position: absolute;
  width: 4rem;
  margin-left: 18rem;
  margin-top: -2rem;
}

#competition-float6 {
  position: absolute;
  width: 4rem;
  margin-top: -2rem;
  margin-left: 16rem;
}

#advising-text-mobile{
  display: none;
}
.line{
  width: 75rem;
  background-color: rgba(99,116,182,0.2);
  height: 0.063rem;
  border: none;
}

.info-text-area{
  display: none;
}

@media screen and (max-width: 768px) {
  .competition-intro {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 10rem;
    align-items: center;
    justify-content: center;
  }


  .past-projects {
    height: 130rem;
    margin-bottom: 20rem;
    margin-top: 0;
  }

  .carousel-container {
    height: 80rem;
  }
  #carousel-container1{
    height: 100rem;
  }

  .el-carousel {
    height: 80rem;
  }


  #carousel-header {
    margin-top: 25rem;
    font-size: 7rem;
  }

  #carousel-title1 {
    margin-top: 48rem;
  }

  #carousel-item1 {
    height: 80rem;
  }

  #carousel-item2 {
    height: 80rem;
  }

  .carousel-title {
    font-size: 6rem;
  }

  #carousel-text1 {
    font-size: 3rem;
    height: 30rem;
    width: 80rem;
    line-height: 1rem;
  }

  .carousel-description {
    line-height: 4.5rem;
  }

  #intro-title {
    font-size: 5rem;
  }

  #intro-text {
    letter-spacing: 0.5rem;
    font-size: 2.5rem;
    margin-top: 5rem;
    line-height: 5rem;
    width: 70rem;
    text-align: left;
  }

  .intro-container {
    width: 100%;
  }

  #intro-img1 {
    width: 70rem;
    height: 55rem;
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  #competition-advising {
    font-size: 4rem;
    letter-spacing: 0.2rem;
    margin-top: 5rem;
  }
  .advising-text-desk{
    display: none;
  }

  #advising-text {
    font-size: 3rem;
    line-height: 5rem;
    margin-top: 3rem;
    letter-spacing: 0.2rem;
  }

  #advising-text-mobile{
    display: flex;
    font-size: 3.2rem;
    line-height: 5rem;
    margin-top: 7rem;
    letter-spacing: 0.3rem;
    color: white;
    font-weight: 300;
    font-family: "Microsoft YaHei", sans-serif;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
    text-align: center;
  }



  #intro-img2 {
    width: 70rem;
    height: 55rem;
  }

  .line{
    display: none;
  }

  #past-projects-title {
    font-size: 8rem;
    letter-spacing: 1.2rem;
    margin-bottom: 13rem;
  }

  #card-title {
    font-size: 5rem;
    letter-spacing: 0.8rem;
    margin-bottom: 7rem;

  }

  .past-projects-container {
    margin-left: 0;
    width: 100%;
    height: 100rem;

  }


  #card-content1 {
    width: 100%;
    height: 23rem;
    background-image: none;
    display: flex;
    justify-content: center;
  }

  #card-content2 {
    display: none;
  }

  #card-content3 {
    display: none;
  }

  .card-text1 {
    width: 90rem;
    font-size: 3.3rem;
    line-height: 4.3rem;
    letter-spacing: 0.4rem;
    margin-top: 0rem;
    color: black;
    text-align: left;

  }

  #competition-float1 {
    display: none;
  }
  #competition-mobile-float1{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 5rem;
    left: 25rem;
  }
  #competition-mobile-float2{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 5rem;
  }
  #competition-mobile-float3{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 5rem;
    right: 25rem;
  }
  #competition-mobile-float4{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 8rem;
    left: 25rem;
  }
  #competition-mobile-float5{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 8rem;
  }
  #competition-mobile-float6{
    width: 16rem;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    position: absolute;
    bottom: 8rem;
    right: 25rem;
  }

  .carousel-container{
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    margin-top: -10rem;
    justify-content: center;
  }
  .mobile-carousel{
    width: 75rem;
    height: 55rem;
  }
  .carousel-img{
    width: 75rem;
    height: 55rem;
    border-radius: 1rem;
  }


  .card-img1 {
    width: 60rem;
    height: 40rem;
  }

  .card-img2 {
    height: 45rem;
    width: 40rem;
    margin-left: -40rem;
    margin-top: -10rem;
  }

  #competition-float2 {
    font-size: 2rem;
    width: 10rem;
    line-height: 2rem;
    margin-right: -18rem;
    margin-bottom: -10rem;
  }

  .image-zoom1 {
    width: 40.875rem;
    height: 35.375rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  .image-zoom2 {
    width: 40.875rem;
    height: 35.375rem;
    margin-top: -15rem;
    margin-bottom: 0;
  }

  #competition-float3 {
    margin-top: -12rem;
    margin-left: 27rem;
    font-size: 2rem;
    width: 16rem;
    line-height: 2rem;
  }

  #card-content4 {
    //margin-top: 10rem;
    width: 100%;
    height: 23rem;
    margin-bottom: 20rem;
    background-image: none;
    display: flex;
    justify-content: center;
  }


  #competition-float4 {
    display: none;
  }

  #card-img3 {
    margin-left: -15rem;
    width: 45rem;
    height: 50rem;
  }

  #card-img4 {
    width: 45rem;
    height: 50rem;
  }

  #card-content5 {
    display: none;
  }

  #card-content6 {
    display: none;
  }

  #competition-float5 {
    display: none;
  }

  #competition-float6 {
    display: none;
  }

  #info-text {
    display: none;

  }

  .info-text-area{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
  }
  #info-text1{
    font-family: "Microsoft YaHei", sans-serif;
    color: black;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  .mobile-carousel1{
    width: 55rem;
    height: 85rem;
  }
  .carousel-img1{
    width: 55rem;
    height: 75rem;
    border-radius: 1rem;
  }


}


</style>