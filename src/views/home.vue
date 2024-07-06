<template>
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

  <div class="home-competition">
      <el-row >
        <el-col id="competition-text-col" :span="12">
          <span id="competition-text">竞赛解决方案</span>
          <img src="../assets/star.png" width="52px" height="53px">
          <span id="competition-english-text">Competition Solutions</span>
          <el-card id="competition-description" style="width: 561px">
            <p style="margin-right: -15px">在机器人竞赛学习与教育领域，我们致力于为每位学员提供个性化定制的学习指导方案和专业化的技能培训，帮助他们实现学习上的突破和提升。无论是机械设计、电子电路、编程语言还是控制算法，我们都会全力以赴，为学员创造最佳的学习环境和机会，助力他们在机器人竞赛中取得成功。</p>
          </el-card>
        </el-col>
        <el-col :span="9" class="solution-image">
          <p class="float" id="competition-float1">竞赛辅导</p>
          <p class="float" id="competition-float2">竞赛机器人设计</p>
          <img id="home-solution-img" src="../assets/home-solution-image.png"  alt="">
        </el-col>
      </el-row>
  </div>


  <div class="home-competition">
      <el-row >
        <el-col id="competition-text-col" :span="12">
          <span id="competition-text">STEAM 教育</span>
          <img src="../assets/star.png" width="52px" height="53px">
          <span id="competition-english-text">STEAM Education</span>
          <el-card id="competition-description" style="width: 561px">
            <p style="margin-right: -15px">我们的专业Robomaster、Robocon、FRC等竞赛培训旨在为学生提供全面且深入的竞赛准备，帮助他们在机器人领域斩获佳绩，并为未来STEM领域的学习和发展奠定坚实基础。通过我们的培训服务，学生将能够掌握机器人竞赛所需的专业技能，培养创新思维和团队合作能力，为未来的成功铺就坚实的道路。</p>
          </el-card>
        </el-col>
        <el-col class="solution-image" :span="9" >
          <p class="float" id="edu-float1">专业师资</p>
          <p class="float" id="edu-float2">参与比赛</p>
          <p class="float" id="edu-float3">培养兴趣</p>
          <img id="home-education-img" src="../assets/steam-education.png" alt="">
        </el-col>
      </el-row>
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
#edu-float1{
  position: absolute;
  top:5px;
  right: 544px;

}
#edu-float2{
  position: absolute;
  top: 360px;
  right: 550px;

}
#edu-float3{
  position: absolute;
  right: 130px;
  top: 220px;

}

#home-steam-ed-img{
  position: absolute;
  left: 730px;
  top: 60px;
  width: 499px;
  height: 375px;
  z-index: 0;
}

.float{
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
  z-index: 1;
  padding: 18px 33px 18px 33px;
}

#competition-float1{
  margin-top: 107px;
  //margin-left: 10px;
}

#competition-float2{
  margin-top: 320px;
  margin-left: 354px;
}


.common {
  background-color: #6374B6;
  background-size: contain;
  height: 65px;
}

#home-solution-img{
  width: 527px;
  height: 279px;
  position: absolute;
  margin-top: 66px;
  margin-left: 66px;
  z-index: 0;
}

#home-education-img{
  width: 520px;
  height: 393px;
  position: absolute;
  right:200px;
  top: 40px;
  z-index: 0;
}

.solution-image{
  background-image: url("../assets/img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 30px;
  border-radius: 30px;
}

#competition-description{
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

#competition-text-col{
  padding-top: 40px;
}

#competition-english-text{
  font-family: "TT Supermolot";
  font-size: 50px;
  font-style: italic;
  line-height: 61.5px;
  color: #BDC8E4;
  font-weight: 900;
  padding-left: 149px;

}

#competition-text{
  padding-left: 149px;
  font-size: 60px;
  line-height: 79.19px;
  font-weight: 700;
  color: #31354D;
  letter-spacing: 0.05em;
  font-family: "Microsoft YaHei";
  align-items: center;
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
.home-competition{
  margin-top: 180px;
  width:100%;
  height:100%;
  margin-bottom: 50px;
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