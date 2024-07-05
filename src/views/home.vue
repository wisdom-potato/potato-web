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
        <el-col :span="12">
          <img src="../assets/img.png" width="450px" height="417px" alt="">
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
.common {
  background-color: #6374B6;
  height: 65px;
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
  margin-bottom: 100px;
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