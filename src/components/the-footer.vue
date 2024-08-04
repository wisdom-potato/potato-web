<template>

  <!--联系方式板-->
  <el-row class="board-container" justify="center" align="middle" id="footer">
    <el-row class="title-container" justify="center" align="middle">
      <h1 id="chinese-title">联系我们&nbsp</h1>
      <h2 id="english-title">contact us</h2>
    </el-row>
    <div class="contact-container">
      <div>联系人：何老师</div>
      <div>电话：13522793809</div>
      <div>微信：同电话</div>
      <div>地址：北京市顺义区千里马国际</div>
    </div>
  </el-row>

  <!--页脚蓝条-->
  <el-row class="company-container" justify="center" align="middle">北京智慧土豆科技有限公司</el-row>

</template>

<script setup>

</script>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="less">
.board-container {
  background-image: url("../assets/footer-background.png");
  background-size: cover;
  width: 100%;
  height: 30.813rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-container {
  color: white;
  margin-top: -3.125rem;
}

#chinese-title {
  //styleName: 标题1;
  font-family: Microsoft YaHei, serif;
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 4.949rem;
  letter-spacing: 0.12rem;
  text-align: left;
  color: #ECF1FF;
}

#english-title {
  //styleName: 英文标题;
  font-family: "TT Supermolot", sans-serif;
  font-size: 3.125rem;
  font-style: italic;
  font-weight: 900;
  line-height: 3.844rem;
  text-align: left;
  color: #CCD2E9;
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 40%;
  color: white;
  border-radius: 0.625rem;
  margin-top: -0.641rem;
  padding: 1.922rem;

  font-family: YouSheBiaoTiHei, serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
}

.company-container {
  width: 100%;
  height: 7.75rem;
  font-family: Microsoft YaHei, serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 7.75rem;
  letter-spacing: 0.1rem;
  text-align: center;
  color: #FFFFFF;
  background-color: #31354D;

  margin-top: -0.938rem;;
}

@media screen and (max-width: 768px) {
  .board-container {
    height: 40.625rem;
  }

  .title-container {
    margin-top: -3.125rem;
  }

  #chinese-title {
    font-size: 6rem;
    line-height: 6rem;
  }

  #english-title {
    font-size: 6rem;
    line-height: 6rem;
  }

  .contact-container {
    width: 80%;
    font-size: 4.5rem;
    line-height: 4.5rem;
  }

  .company-container {
    height: 15.5rem;
    font-size: 3rem;
    line-height: 15.5rem;
  }

}


</style>