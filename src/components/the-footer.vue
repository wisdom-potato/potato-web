<template>
  <div class="footer-container">
    <div class="title-container">
      <h1>联系我们</h1>
      <h2>contact us</h2>
    </div>
  </div>
</template>

<script setup>

</script>

<script>
export default {
  name: "the-footer"
}
</script>

<style scoped lang="less">
.footer-container{
  background-image: url("../assets/footer-background.png");
  background-size: cover;
  //background-color: red;
  width: 100%;
  height: 493px;
}

.title-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>