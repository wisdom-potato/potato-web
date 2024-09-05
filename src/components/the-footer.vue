<template>

  <!--联系方式板-->
  <div class="board-container">
    <div class="title-container">
      <div id="chinese-title">联系我们</div>
      <div id="english-title">contact us</div>
      <div id="contact">联系人：何老师</div>
    </div>
    <div>
      <img class="qr-code" src="../assets/contact-qr-code.png" alt="">
    </div>
  </div>

  <!--页脚蓝条-->
  <div class="company-container">
    <div>北京智慧土豆科技有限公司</div>
    <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2024078818号-1</a>
  </div>
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
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../assets/footer-background.png");
  background-size: cover;
  width: 100%;
  height: 30.813rem;
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

#contact {
  margin-top: 5rem;

  font-family: YouSheBiaoTiHei, serif;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
}

.qr-code {
  margin-left: 8rem;
  width: 18rem;
  opacity: 80%;
  background-blend-mode: exclusion;
  border-radius: 10px;
}

.company-container {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 7.75rem;
  font-family: Microsoft YaHei, serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  background-color: #31354D;

  margin-top: -0.85rem;

  a {
    position: absolute;
    bottom: 1rem;


    color: #FAFAFA;
    text-decoration: none;
    font-family: Microsoft YaHei, serif;
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.1rem;

    &:hover {
      color: #FFFFFF;
      text-decoration: underline;
    }
  }
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

  #contact {
    font-size: 4.5rem;
    line-height: 4.5rem;
  }

  .qr-code {
    margin-left: 8rem;
    width: 30rem;
    opacity: 80%;
    background-blend-mode: exclusion;
    border-radius: 5px;
  }


  .company-container {
    height: 15.5rem;
    font-size: 3rem;
    line-height: 15.5rem;

    a {
      font-size: 2rem;
      line-height: 2rem;
      bottom: 2rem;

      &:hover {
        color: #FFFFFF;
        text-decoration: underline;
      }


    }
  }


}


</style>
