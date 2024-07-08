<template>
  <div
      class="image-container"
      @mouseover="zoomIn"
      @mouseout="zoomOut"
      :style="{ zIndex: zIndex }"
  >
    <img :src="src" :class="{ zoom: isZoomed }" />
  </div>
</template>

<script>
export default {
  name: 'ImageZoom',
  props: {
    src: String
  },
  data() {
    return {
      isZoomed: false,
      zIndex: 2 // 初始z-index
    };
  },
  methods: {
    zoomIn() {
      this.isZoomed = true;
      this.zIndex = 10; // 放大时提升z-index
    },
    zoomOut() {
      this.isZoomed = false;
      this.zIndex = 2; // 缩小时恢复z-index
    }
  }
};
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