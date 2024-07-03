<template>
  <div class="footer-container">
    <div class="title-container">
      <h1 style="margin-right: 1vw">联系我们</h1>
      <h2>contact us</h2>
    </div>
    <div class="contact-container">
      <div>联系人：何老师</div>
      <div>电话：13522793809</div>
      <div>微信：同电话</div>
      <div>地址：北京市顺义区千里马国际</div>
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
.footer-container {
  background-image: url("../assets/footer-background.png");
  background-size: cover;
  //background-color: red;
  width: 100%;
  height: 493px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  //background-color: red;
}

.contact-container {
  //background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40%;
  color: white;
  border-radius: 10px;
  margin-top: 3vh;
  padding: 3vh;
}

</style>