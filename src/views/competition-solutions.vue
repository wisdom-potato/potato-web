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
</template>

<script setup>
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
  font-family: "Microsoft YaHei";
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