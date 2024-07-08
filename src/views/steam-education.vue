<template>
  <!--STEAM教育专区板块-->
  <el-row class="mid-title">STEAM教育专区</el-row>
  <el-row align="middle" justify="center" class="slider-container">
    <img src="../assets/inactive-slider-switch-triangle.png" alt="" class="header-switch-triangle">

    <div class="header-container">
      <div class="header-text">
        <p class="header-english-text">Meshed Potato</p><br/>开源教程<br/>
        <a class="header-link">点击查看></a>
      </div>
      <img class="header-pic-1" src="../assets/product-1.png" alt="">
    </div>

    <img src="../assets/active-slider-switch-triangle.png" alt="" class="header-switch-triangle">
  </el-row>

  <!--分割线-->
  <el-divider/>

  <!--教育目标-->
  <el-row justify="center">
    <el-row class="ed-goals" justify="space-between" align="middle">

      <div class="goal-card" id="ed-goal-1">
        <p>
          为您提供优质<br/>STEAM教育方案
        </p>
      </div>

      <div class="goal-card" id="ed-goal-2">
        <img class="goal-card-bg" src="../assets/ed-goal-card-bg-2.png" alt="">
        <div class="card-title">创新教学</div>
        <div class="card-text">通过实践学习，激发创意思维</div>
      </div>

      <div class="goal-card" id="ed-goal-3">
        <img class="goal-card-bg" src="../assets/ed-goal-card-bg-3.png" alt="">
        <div class="card-title">技能培养</div>
        <div class="card-text">关注学生综合技能与实际操作提升</div>
      </div>
      <div class="goal-card" id="ed-goal-4">
        <img class="goal-card-bg" src="../assets/ed-goal-card-bg-4.png" alt="">
        <div class="card-title">个性发展</div>
        <div class="card-text">尊重并支持每个学生的个性和兴趣，个性化教学，激发无限可能</div>
      </div>

      <div class="goal-card" id="ed-goal-5">
        <img class="goal-card-bg" src="../assets/ed-goal-card-bg-5.png" alt="">
        <div class="card-title">团队合作</div>
        <div class="card-text">鼓励团队协作，共同完成项目任务，成为未来创造者</div>

      </div>
      <div class="goal-card" id="ed-goal-6">
        <img class="goal-card-bg" src="../assets/ed-goal-card-bg-6.png" alt="">
        <div class="card-title">实践应用</div>
        <div class="card-text">将课堂知识应用于实际问题解决，<br/>学以致用，让知识成就未来</div>
      </div>
    </el-row>
  </el-row>

  <!--教师团队板块-->
  <el-row class="teachers-title" justify="center">专业教师团队</el-row>
  <el-row justify="center">
    <el-row class="teachers-descriptions" justify="center">
      <div class="description" id="description1">拥有丰富机器人竞赛、培训经验</div>
      <div class="description">荣获多项国内外知名机器人比赛大奖</div>
      <div class="description">均毕业于国内外知名高校、985/211学校理工类专业</div>
    </el-row>
  </el-row>
  <el-row justify="center">
    <div class="teachers-container">
      <!--背景颜色-->
      <div class="teachers-background"/>

      <img class="teacher-pic" src="../assets/teacher-1.png" alt=""/>
      <img class="teacher-pic" src="../assets/teacher-2.png" alt=""/>
      <img class="teacher-pic" src="../assets/teacher-3.png" alt=""/>
      <img class="teacher-pic" src="../assets/teacher-4.png" alt=""/>
    </div>
  </el-row>

</template>

<script setup>

</script>

<script>
export default {
  name: "SteamEducation"
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

.slider-container {
  height: 476px;
  margin-bottom: 50px;
}

.header-switch-triangle {
  width: 29.07px;
  height: 69.52px;
}

.header-container {
  background-image: url("../assets/green-rectgangle-long.png");
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
  width: 423px;
  height: 476px;

  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
  color: #3A3A3A;

  margin-left: 100px;

  opacity: 0.8;
}

.header-link {
  //styleName: 中标题;
  font-family: Microsoft YaHei, serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 46.19px;
  letter-spacing: 0.12em;
  text-align: left;

  color: #44AA92;

  &:hover {
    //color: #3A3A3A;
    text-decoration: underline;
    cursor: pointer;
  }
}

.header-english-text {
  font-family: TT Supermolot, serif;
  font-size: 50px;
  font-style: italic;
  font-weight: 900;
  line-height: 61.5px;
  text-align: left;
  white-space: nowrap;
  color: #3A3A3A;
  margin-bottom: -50px;
}

.header-pic-1 {
  width: 628.03px;
  position: relative;
  top: 50px;
  left: -30px;
}

.el-divider {
  width: 1300px;
  margin-left: 70px;
}

.ed-goals {
  width: 1090px;
}

.goal-card {
  width: 337px;
  height: 370px;
  border-radius: 10px;


  margin-top: 50px;
  margin-bottom: 50px;
}

#ed-goal-1 {
  background-image: url("../assets/ed-goal-card-bg-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;

  p {
    font-family: Microsoft YaHei, serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 31.68px;
    letter-spacing: 0.1em;
    text-align: left;
    color: #31354D;

    margin-top: 251px;
    margin-left: 30px;
  }
}

#ed-goal-2 {
  background-color: #D0D5E9;
}

.goal-card-bg {
  width: 337px;
  height: 239px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

.card-title {
  font-family: Microsoft YaHei, serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: black;
  text-align: left;

  margin-top: 13px;
  margin-left: 20px;

}

.card-text {
  width: 297px;

  font-family: Microsoft YaHei, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.1em;
  color: black;
  text-align: left;

  opacity: 0.7;

  margin-top: 10px;
  margin-left: 20px;

}

#ed-goal-3 {
  background-color: #D5D5FF;
}

#ed-goal-4 {
  background-color: rgba(235, 194, 48, 0.2);
}

#ed-goal-5 {
  background-color: #F9EBD4;
}

#ed-goal-6 {
  background-color: #DCEDF9;
}

.teachers-title {
  font-family: Microsoft YaHei, serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  color: #31354D;

  margin-top: 70px;
  margin-bottom: 20px;
}

.teachers-descriptions {
  width: 821px;
  //height: 100px;
}

.description {
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #ECF1FF;
  padding: 20px 32.5px 20px 32.5px;

  font-family: Microsoft YaHei,serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.1em;
  color: #8596CB;

  margin-bottom: 20px;
}

#description1 {
  margin-right: 30px;
}

.teachers-container{
  width: 1206px;
  height: 504px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 200px;
}

.teachers-background{
  width: 1206px;
  height: 476px;
  background-color: #6374B6;
  position: absolute;
}

.teacher-pic{
  width: 270px;
  height: 504px;

  object-fit: cover;

  border-radius: 10px;

  z-index: 10;
}

</style>