<template>
  <div class="container">

    <!--页眉-->
    <the-header/>

    <!--正文-->
    <router-view/>


    <!--页脚-->
    <the-footer/>

  </div>
</template>

<script setup>
import TheHeader from "../components/the-header.vue";
import TheFooter from "../components/the-footer.vue";
</script>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>