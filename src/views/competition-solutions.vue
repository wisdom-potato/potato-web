<template>
  <div class="competition-header">
    <el-carousel height="800px" :show-indicators="true" @change="handleCarouselChange" indicator-position="none"
                 ref="carousel">
      <!--一定记得在JavaScript中设置numItems以确保指示器的创建正确-->
      <el-carousel-item id="carousel-item1">
        <div class="overlay"></div>
        <div id="carousel-header">
          竞赛解决方案
        </div>
        <div id="carousel-text">
          FRC
        </div>
        <div id="carousel-text1" style="width: 1100px; height: 15px">
          <p style="padding:10px"> FIRST Robotics Competition
            FIRST机器人挑战赛，简称FRC。是由美国非盈利机构FIRST主办，针对高中生的一项工业级机器人竞赛，把运动的刺激性和科学技术的严谨性结合在一起，学生在有限是时间和资源下，严格遵守规则，制作完成机器人，与志同道合的竞争对手完成一场机器人挑战。迄今为止已经举办30多届，并且获得全球多所高校的认可。</p>
        </div>
      </el-carousel-item>

      <el-carousel-item id="carousel-item2">
        <div class="overlay"></div>
        <div id="carousel-header">
          竞赛解决方案
        </div>
        <div id="carousel-text">
          ROBOMASTER
        </div>
        <div id="carousel-text1" style="width: 1100px; height: 15px">
          <p style="padding:10px"> FIRST Robotics Competition
            FIRST机器人挑战赛，简称FRC。是由美国非盈利机构FIRST主办，针对高中生的一项工业级机器人竞赛，把运动的刺激性和科学技术的严谨性结合在一起，学生在有限是时间和资源下，严格遵守规则，制作完成机器人，与志同道合的竞争对手完成一场机器人挑战。迄今为止已经举办30多届，并且获得全球多所高校的认可。</p>
        </div>
      </el-carousel-item>

    </el-carousel>

    <!--指示器容器-->
    <div class="indicator-container"/>
  </div>
  <div class="competition-intro">
    <h2 id="intro-title">让每一场比赛都精彩绝伦</h2>
    <p id="intro-text">北京智慧土豆公司，致力于为竞赛团队提供全面、专业的解决方案，以增强其在各类比赛中的竞争力。</p>
    <el-row style="margin-top: 106px">
      <el-col  :span="12">
        <div id="intro-img1">
          <h2 id="competition-advising">竞赛辅导</h2>
          <p id="advising-text">采取个性化的辅导方案，通过详细的初步评估来了解每个队伍的具体情况，包括队伍的技能水平、技术需求以及之前的竞赛经验。基于这些信息，制定出个性化辅导计划，这个计划将围绕比赛的具体需求，如技术论文提交、演讲、实操等多个方面进行全方位的指导。
          </p>
        </div>
      </el-col>

      <el-col  :span="12">
        <div id="intro-img2">
          <h2 id="competition-advising">竞赛机器人设计</h2>
          <p id="advising-text">公司注重实践和创新，不仅提供机器人的硬件设计和软件编程指导，还会帮助团队进行创新设计的思维训练。设计师和工程师团队会与学生紧密合作，确保设计的机器人能够在满足比赛规则的同时，具备较强的实战能力和创新点。整个设计过程中，团队会定期进行设计的测试和优化，以确保最终的机器人设计能够高效完成比赛任务，从而在竞赛中取得优异成绩。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="past-projects">
    <h2 id="past-projects-title">过往项目</h2>
    <hr style="width: 1280px; background-color: #6374B6; height: 1px; border: none">
    <h2 id="card-title">X大学智能车大赛方案设计</h2>
    <el-row>

      <el-col :span="8">
        <div id="card-content1">
          <p id="card-text1">基于X大学信息学院对学习软硬件技术的具体需求，我们着手设计了智能车大赛规则。按照这些规则的要求，我们进一步设计并配置了比赛所需的硬件。最终，比赛在周密的准备和专业的组织下成功举行。</p>
          <p class="float" id="competition-float1" style="left: 340px; top: 325px">确定需求</p>

        </div>

      </el-col>
      <el-col :span="8">
        <div style="justify-content: center;align-items: center">
          <img src="../assets/competition-img3.png" style="width: 440px;height: 302px; margin-top: 67px; z-index: 2; position: relative">
          <img src="../assets/competition-img4.png" style="width: 370px;height: 400px; left: 410px; top:-40px;position: absolute; z-index: 1">
          <p class="float" style="position:absolute; left:800px; top:300px; font-size: 17px; line-height: 27px">硬件设计 <br> 规则策划</p>
        </div>

      </el-col>
      <el-col :span="8">
        <div>
          <image-zoom style="width: 366px; height: 150px; margin-top: 25px" src="src/assets/competition-img5.png"></image-zoom>
          <image-zoom style="width: 366px; height: 150px; margin-top: 33px" src="src/assets/competition-img6.png"></image-zoom>
          <p class="float" style="right: 75px; bottom: -30px">协助比赛顺利进行</p>
        </div>

      </el-col>
    </el-row>
  </div>
  <div class="past-projects">
    <h2 id="card-title">MakeX 挑战赛竞赛方案</h2>
    <el-row>

      <el-col :span="8">
        <div id="card-content2">
          <p id="card-text1">在指导参加MakeX的队伍时，首先分析比赛要求和队伍的实际情况，然后提供一个包含技术指导、策略规划和实战训练的全面辅导方案。此外，公司会针对MakeX比赛的特点，帮助队伍设计能够高效完成比赛任务的机器人，并确保其设计既创新又实用。</p>
          <p class="float" id="competition-float1" style="left: 340px; top: 385px">确定需求</p>
        </div>

      </el-col>
      <el-col :span="8">
        <div  style="justify-content: center; align-items: center; text-align: center">
          <img src="../assets/competition-img7.png" style="width: 368px;height: 443px; z-index: 2">
          <p class="float" style="position:absolute; left:800px; top:385px;">方案确定 </p>
        </div>

      </el-col>
      <el-col :span="8">
        <div style="text-align: center">
          <img src="../assets/competition-img8.png" style="width: 368px;height: 443px; position: relative">
          <p class="float" style="right: 35px; top: 385px">成品交付</p>
        </div>

      </el-col>
    </el-row>
  </div>

  <div class="information">
    <h2 id="card-title" style="color:#31354D; margin-bottom: 30px">为您提供专业竞赛解决方案</h2>
    <p id="info-text">创赛精准、资源全面，专业定制竞赛方案。定制方案，全程服务，打造极致竞赛体验。</p>
    <el-row>
      <el-col :span="12">
        <div id="first-col">
          <p style="padding-top: 30px">需求分析</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="second-col">
          <p style="padding-top: 30px">资源整合</p>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="first-col">
          <p style="padding-top: 30px">方案设计</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="second-col">
          <p style="padding-top: 30px">实施反馈</p>
        </div>
      </el-col>

    </el-row>
  </div>


</template>

<script setup>
import ImageZoom from "../components/image-zoom.vue";
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
#first-col{
  background-color: #EFF1F8;
  width: 266px;
  height: 104px;
  border-radius: 20px;
  font-family: "Microsoft YaHei";
  font-size: 35px;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color:#6374B6;
  text-align: center;
  margin-left:  420px;
}
#second-col {
  background-color: #EFF1F8;
  width: 266px;
  height: 104px;
  border-radius: 20px;
  font-family: "Microsoft YaHei";
  font-size: 35px;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  font-weight: 700;
  color:#6374B6;
  text-align: center;
  margin-right:  420px;
}




#info-text {
  font-family: "Microsoft YaHei";
  color: black;
  font-weight: 400;
  font-size: 15px;
  line-height: 32px;
  letter-spacing: 0.1em;
}

.information{
  text-align: center;
  width: 100%;
  height: 100%;
  margin-bottom: 150px;
}
.float{
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25); /* 添加阴影特效 */
  font-family: "Microsoft YaHei";
  font-weight: 700;
  position: absolute;
  color: #8596CB;
  border-style: hidden;
  border-radius: 30px;
  background-color: #ECF1FF;
  z-index: 3;
  padding: 18px 33px 18px 33px;
  text-align: center;
}



#card-content1{
  width: 368px;
  height: 356px;
  background-image: url("../assets/card-content-bg.png");
  background-size: contain;
  margin-left: 88px;
  background-repeat: no-repeat;
}


#card-content2{
  width: 350px;
  height: 443px;
  background-image: url("../assets/card-content-bg.png");
  background-size: cover;
  margin-top: -15px;
  margin-left: 88px;
  background-repeat: no-repeat;
  border-radius: 10px;

}

#card-text1{
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.1em;
  color: white;
  text-align: center;
  padding-top: 82px;
  padding-left: 34px;
  padding-right: 34px;
}
#card-title{
  font-family: "Microsoft YaHei";
  font-weight: 700;
  font-size: 35px;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  color: #6374B6;
  text-align: center;
}

#past-projects-title{
  font-family: "Microsoft YaHei";
  font-size: 60px;
  font-weight: 700;
  color: #31354D;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.12em;

}

.past-projects{
  margin-top: 150px;
  margin-bottom: 100px;
}
#advising-text{
  color: white;
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  font-family: "Microsoft YaHei";
  letter-spacing: 0.12em;
  margin-top: 73px;
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
}

#competition-advising{
  color:white;
  font-family: "Microsoft YaHei";
  font-size: 35px;
  font-weight: 700;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  text-align: center;
  padding-top: 56px;
}

#intro-img1{
  background-image: url("../assets/competition-img1.png");
  width: 566px;
  height: 420px;
  margin-left: 88px;
  border-radius: 10px;
  background-size: contain;
}


#intro-img2{
  background-image: url("../assets/competition-img2.png");
  width: 575px;
  height: 420px;
  margin-right: 125px;
  border-radius: 10px;
  background-size: contain;
}


#intro-text{
  font-family: "Microsoft YaHei";
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.1em;
  color: black;
  text-align: center;
}

#intro-title{
  color: #31354D;
  font-family: "Microsoft YaHei";
  font-weight: 700;
  font-size: 35px;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  text-align: center;
  margin-bottom: 35px;
}

.competition-intro{
  height: 100%;
  width: 100%;
  margin-top: 59px;
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
  margin-left: 60px;
  margin-top: 100px;
  font-family: "Microsoft YaHei", serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  z-index: 2;
  position: relative;

}

#carousel-text {
  font-family: "TT Supermolot";
  color: white;
  font-weight: 900;
  font-size: 100px;
  line-height: 123px;
  font-style: italic;
  margin-left: 60px;
  margin-top: 350.16px;
  z-index: 2;
  position: relative;

}

#carousel-text1 {
  margin-left: 60px;
  color: white;
  font-size: 16px;
  line-height: 32px;
  font-family: "Microsoft YaHei",serif;
  padding-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 2;
  position: relative;


}

#carousel-item1 {
  background-image: url("../assets/competition-title-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

#carousel-item2 {
  background-image: url("src/assets/robomaster.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

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

</style>