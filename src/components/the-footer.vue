<template>
  <el-row justify="center">

    <div class="footer-container">
      <div class="title-container">
        <h1 id="chinese-title">联系我们&nbsp</h1>
        <h2 id="english-title">contact us</h2>
      </div>
      <div class="contact-container">
        <div>联系人：何老师</div>
        <div>电话：13522793809</div>
        <div>微信：同电话</div>
        <div>地址：北京市顺义区千里马国际</div>
      </div>
    </div>
  </el-row>

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
  width: 1654px;
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

#chinese-title {
  //styleName: 标题1;
  font-family: Microsoft YaHei;
  font-size: 60px;
  font-weight: 700;
  line-height: 79.19px;
  letter-spacing: 0.12em;
  text-align: left;
}

#english-title {
  //styleName: 英文标题;
  font-family: TT Supermolot;
  font-size: 50px;
  font-style: italic;
  font-weight: 900;
  line-height: 61.5px;
  text-align: left;
  color: #CCD2E9;
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
  margin-top: 2vh;
  padding: 3vh;

  font-family: YouSheBiaoTiHei;
  font-size: 32px;
  font-weight: 400;
  line-height: 41.6px;
  text-align: center;


}

</style>