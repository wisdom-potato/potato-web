<template>
  <el-row class="info-bubbles" justify="space-between" align="middle">
    <div class="info-bubble" id="info-bubble-1">需求分析</div>
    <div class="info-bubble" id="info-bubble-2">资源整合</div>
    <div class="info-bubble" id="info-bubble-3">方案设计</div>
    <div class="info-bubble" id="info-bubble-4">实施反馈</div>
  </el-row>
</template>

<script setup>
import {onMounted} from "vue";

let activeInfoBubble = 1

// 一共五种状态，0-4 4是所有bubbles都不放大

function scaleInfoBubble() {
  let currentState = activeInfoBubble % 5;

  if (currentState === 0) {

    // 缩小上一个bubble
    document.getElementById(`info-bubble-4`).style.transform = "scale(1)";
    activeInfoBubble++;
  } else {
    // 放大当前bubble
    document.getElementById(`info-bubble-${currentState}`).style.transform = "scale(1.15)";

    if (currentState > 1) {
      // 缩小上一个bubble
      document.getElementById(`info-bubble-${currentState - 1}`).style.transform = "scale(1)";
    }

    activeInfoBubble++;

    if (activeInfoBubble === 5) {
      activeInfoBubble = 0;
    }
  }
}

onMounted(() => {
  setInterval(() => {
    scaleInfoBubble();
  }, 2000);
});

</script>

<script>
export default {
  name: "InfoBubbles"
}
</script>

<style scoped lang="less">
.info-bubbles {
  width: 605px;
  height: 246px;
}

.info-bubble {

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 38px;

  width: 286px;
  height: 104px;
  background-color: #EFF1F8;
  border-radius: 20px;

  font-family: Microsoft YaHei, serif;
  font-size: 219%;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.12em;
  color: #6374B6;

  transform-origin: center;
  transition-duration: 1s;

  // 这个属性可以让浏览器提前渲染元素，提高性能，同时解决了文字一起放大时的位置向下跳一下的问题
  will-change: transform;
}
</style>