<template>
  <div
      class="image-container"
      @mouseover="zoomIn"
      @mouseout="zoomOut"
      :style="{ zIndex: zIndex }"
  >
    <img :src="src" :class="{ zoom: isZoomed }" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'ImageZoom'
}
</script>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  src: String
});

const isZoomed = ref(false);
const zIndex = ref(2);

function zoomIn() {
  isZoomed.value = true;
  zIndex.value = 10;
}

function zoomOut() {
  isZoomed.value = false;
  zIndex.value = 2;
}

</script>

<style>
.image-container {
  display: inline-block;
  overflow: visible; /* 确保放大后的图片不会超出容器 */
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 确保图片在容器内适应 */
  transition: transform 0.3s ease, z-index 0s; /* 添加平滑过渡效果 */
  position: relative; /* 确保z-index生效 */
}

.image-container img.zoom {
  transform: scale(1.3); /* 放大比例，可以根据需要调整 */
}
</style>