<template>
  <!--STEAM教育专区板块-->
  <el-row class="mid-title">STEM教育专区</el-row>
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
  <el-row justify="center">
    <el-divider/>
  </el-row>

  <!--教育目标-->
  <el-row justify="center">
    <div class="ed-goals">

      <div class="goal-card" id="ed-goal-1">
        <p>
          为您提供优质<br/>STEM教育方案
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
        <div class="card-text">将课堂知识应用于实际问题解决，学以致用，让知识成就未来</div>
      </div>
    </div>
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

      <div class="teacher-pic-container">
        <img class="teacher-pic" src="../assets/teacher-1.png" alt="" id="teacher-pic-1"/>
        <div class="teacher-text">教师姓名1<p>教师介绍1</p></div>
      </div>

      <div class="teacher-pic-container">
        <img class="teacher-pic" src="../assets/teacher-2.png" alt=""/>
        <div class="teacher-text">教师姓名2<p>教师介绍2</p></div>
      </div>

      <div class="teacher-pic-container">
        <img class="teacher-pic" src="../assets/teacher-3.png" alt=""/>
        <div class="teacher-text">教师姓名3<p>教师介绍3</p></div>
      </div>

      <div class="teacher-pic-container">
        <img class="teacher-pic" src="../assets/teacher-4.png" alt=""/>
        <div class="teacher-text">教师姓名4<p>教师介绍4</p></div>
      </div>

    </div>
  </el-row>

</template>

<script setup>
</script>

<script>
export default {
  name: "StemEducation"
}
</script>

<style scoped lang="less">
.mid-title {
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 2.188rem; /* 35px */
  font-weight: 700;
  line-height: 2.887rem; /* 46.19px */
  letter-spacing: 0.12rem;
  text-align: left;
  color: #31354D;

  margin-top: 3.438rem; /* 55px */
  margin-left: 6.063rem; /* 97px */
  margin-bottom: 3.125rem; /* 50px */
}

.slider-container {
  height: 29.75rem; /* 476px */
  margin-bottom: 7.188rem; /* 115px */

  overflow: hidden;
}

.header-switch-triangle {
  width: 1.817rem; /* 29.07px */
  height: 4.345rem; /* 69.52px */
}

.header-container {
  background-image: url("../assets/green-rectgangle-long.png");
  background-size: cover;

  width: 66.9375rem; /* 1071px */
  height: 29.75rem; /* 476px */
  display: flex;
  align-items: center;

  margin-left: 1.25rem; /* 20px */
  margin-right: 1.25rem; /* 20px */
  border-radius: 2.9375rem; /* 47px */
}

.header-text {
  width: 26.4375rem; /* 423px */
  height: 29.75rem; /* 476px */

  font-family: Microsoft YaHei, sans-serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 4.9494rem; /* 79.19px */
  letter-spacing: 0.12em;
  text-align: left;
  color: #3A3A3A;

  margin-left: 6.25rem; /* 100px */

  opacity: 0.8;
}

.header-link {
  font-family: Microsoft YaHei, sans-serif;
  font-size: 2.188rem; /* 35px */
  font-weight: 700;
  line-height: 2.887rem; /* 46.19px */
  letter-spacing: 0.12em;
  text-align: left;

  color: #44AA92;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.header-english-text {
  font-family: TT Supermolot, sans-serif;
  font-size: 3.125rem; /* 50px */
  font-style: italic;
  font-weight: 900;
  line-height: 3.8438rem; /* 61.5px */
  text-align: left;
  white-space: nowrap;
  color: #3A3A3A;
  margin-bottom: -3.125rem; /* -50px */
}

.header-pic-1 {
  width: 39.252rem; /* 628.03px */
  position: relative;
  top: 3.125rem; /* 50px */
  left: -1.875rem; /* -30px */
}

.el-divider {
  width: 81.25rem; /* 1300px */
}

.ed-goals {
  width: 68.125rem; /* 1090px */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 0.6fr));
  place-content: center center;
  gap: 41px;
  margin-top: 3.125rem; /* 50px */
  margin-bottom: 3.125rem; /* 50px */
}

.goal-card {
  min-height: 23.125rem; /* 370px */
  border-radius: 10px;
}

#ed-goal-1 {
  background-image: url("../assets/ed-goal-card-bg-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;

  p {
    font-family: Microsoft YaHei, sans-serif;
    font-size: 1.5rem; /* 24px */
    font-weight: 700;
    line-height: 1.98rem; /* 31.68px */
    letter-spacing: 0.1rem;
    text-align: left;
    color: #31354D;

    margin-top: 15.688rem; /* 251px */
    margin-left: 1.875rem; /* 30px */
  }
}

#ed-goal-2 {
  background-color: #D0D5E9;
}

.goal-card-bg {
  //width: 21.063rem; /* 337px */
  //height: 14.938rem; /* 239px */
  width: 100%; /* 337px */
  height: 14.938rem; /* 239px */
  border-radius: 10px 10px 0 0; /* 10px 10px 0 0 */
  object-fit: cover;
}

.card-title {
  font-family: Microsoft YaHei, sans-serif;
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  line-height: 1.875rem; /* 30px */
  letter-spacing: 0.1rem;
  color: black;
  text-align: left;

  margin-top: 0.8125rem; /* 13px */
  margin-left: 1.25rem; /* 20px */
}

.card-text {
  //width: 18.563rem; /* 297px */

  font-family: Microsoft YaHei, sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 2rem; /* 32px */
  letter-spacing: 0.1rem;
  color: black;
  text-align: left;

  opacity: 0.7;

  margin-top: 0.625rem; /* 10px */
  margin-left: 1.25rem; /* 20px */
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
  font-family: Microsoft YaHei, sans-serif;
  font-size: 3.75rem; /* 60px */
  font-weight: 700;
  line-height: 4.9494rem; /* 79.19px */
  letter-spacing: 0.12em;
  color: #31354D;

  margin-top: 4.375rem; /* 70px */
  margin-bottom: 1.25rem; /* 20px */
}

.teachers-descriptions {
  width: 51.313rem; /* 821px */
}

.description {
  box-sizing: border-box;
  border-radius: 30px; /* 30px */
  background-color: #ECF1FF;
  padding: 1.25rem 2.0313rem; /* 20px 32.5px 20px 32.5px */

  font-family: Microsoft YaHei, sans-serif;
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  line-height: 1.875rem; /* 30px */
  letter-spacing: 0.1rem;
  color: #8596CB;

  margin-bottom: 1.25rem; /* 20px */
}

#description1 {
  margin-right: 1.875rem; /* 30px */
}

.teachers-container {
  width: 75.375rem; /* 1206px */
  height: 31.5rem; /* 504px */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 1.875rem; /* 30px */
  margin-bottom: 12.5rem; /* 200px */
}

.teachers-background {
  width: 75.375rem; /* 1206px */
  height: 29.75rem; /* 476px */
  background-color: #6374B6;
  position: absolute;
}

.teacher-pic-container {
  width: 16.875rem; /* 270px */
  height: 31.5rem; /* 504px */
  position: relative;
  border-radius: 10px;

  &:hover {
    .teacher-pic {
      filter: brightness(60%);
    }

    .teacher-text {
      display: block;
      filter: brightness(100%);
    }
  }
}

.teacher-pic {
  width: 16.875rem; /* 270px */
  height: 31.5rem; /* 504px */
  object-fit: cover;
  border-radius: 10px;
}

.teacher-text {
  display: none;
  width: 16.875rem; /* 270px */
  height: 31.5rem; /* 504px */
  margin: 0;
  position: absolute;
  top: 0;
  border-radius: 0.625rem; /* 10px */
  opacity: 90%;
  font-family: Microsoft YaHei, sans-serif;
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  line-height: 1.875rem; /* 30px */
  letter-spacing: 0.1rem;
  color: white;
  box-sizing: border-box;
  padding: 1.25rem; /* 20px */

  p {
    font-family: Microsoft YaHei, sans-serif;
    font-size: 1rem; /* 16px */
    font-weight: 400;
    line-height: 2rem; /* 32px */
    letter-spacing: 0.1rem;
    color: white;
    text-align: left;
  }
}

@media screen and (max-width: 768px) {
  .mid-title {
    font-size: 5rem;
    line-height: 5rem;
  }

  .slider-container {
    height: 80rem;
  }

  .header-container {
    width: 80%;
    height: 80rem;
    align-items: normal;
  }

  .header-switch-triangle {
    display: none;
    width: 2rem;
    height: 5rem;
  }

  .header-text {
    width: 80%;
    font-size: 8rem;
    line-height: 8rem;
  }

  .header-link {
    font-size: 4rem;
    line-height: 4rem;
  }

  .header-english-text {
    font-size: 5rem;
    line-height: 5rem;
  }

  .header-pic-1 {
    width: 90rem;
    object-fit: contain;
    top: 22rem;
    left: -32rem;
  }

  .el-divider {
    width: 90%;
  }

  .ed-goals {
    grid-template-columns: 1fr;
    width: 80%;
  }

  .goal-card {
    min-height: 100rem;
  }

  #ed-goal-1 {
    background: none;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 0;

    p {
      margin: 0;
      text-align: center;
      font-size: 6rem;
      line-height: 8rem;
    }
  }

  .goal-card-bg {
    height: 70rem;
  }

  .card-title {
    margin: 5rem;

    font-size: 7rem;
    line-height: 7rem;
  }

  .card-text {
    margin: 5rem 5rem 8rem 5rem;

    font-size: 5rem;
    line-height: 5rem;
  }

  .teachers-title {
    font-size: 5rem;
    line-height: 5rem;
    margin-bottom: 5rem;
  }

  .teachers-descriptions {
    width: 80%;
  }

  .description {
    font-size: 3.5rem;
    line-height: 3.5rem;
    padding: 3rem 5rem;
    margin-bottom: 5rem;
  }

  #description1 {
    margin-right: 0;
  }

  .teachers-container {
    width: 70%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 2rem;
  }

  .teachers-background {
    width: 90%;
    height: 40rem;
    display: none;
  }

  .teacher-pic-container {
    width: 40rem;
    height: 80rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    &:hover {
      .teacher-pic {
        filter: brightness(60%);
      }

      .teacher-text {
        display: block;
        filter: brightness(100%);
      }
    }
  }

  .teacher-pic {
    width: 100%;
    height: 100%;
  }

  .teacher-text {
    width: 20rem;
    height: 40rem;
    padding: 2rem;
    font-size: 3rem;
    line-height: 3rem;

    p {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
  }


}

</style>