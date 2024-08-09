<template>
  <div class="info-bubbles">
    <div class="info-bubble" id="info-bubble-1">需求分析</div>
    <div class="info-bubble" id="info-bubble-2">资源整合</div>
    <div class="info-bubble" id="info-bubble-3">方案设计</div>
    <div class="info-bubble" id="info-bubble-4">实施反馈</div>
  </div>
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
  width: 37.8125rem; /* 605px */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.0625rem;
}

.info-bubble {

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2.375rem; /* 38px */

  height: 6.5rem; /* 104px */
  background-color: #EFF1F8;
  border-radius: 20px;

  font-family: Microsoft YaHei, serif;
  font-size: 1rem; /* 100% */
  font-weight: 700;
  line-height: 1rem; /* 100% */
  letter-spacing: 0.12em;
  color: #6374B6;

  transform-origin: center;
  transition-duration: 1s;

  /* 这个属性可以让浏览器提前渲染元素，提高性能，同时解决了文字一起放大时的位置向下跳一下的问题 */
  will-change: transform;
}

@media (max-width: 768px) {
  .info-bubbles {
    width: 80%;
    gap: 5rem;
  }

  .info-bubble {
    height: 15rem;

    font-size: 5rem;
  }
}
</style>
