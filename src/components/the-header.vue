<template>
  <el-row align="middle" class="common">

    <!--logo-->
    <el-col :span="6">
      <el-row align="middle">
        <img class="logo" id="pc-logo" src="../assets/text-logo.png" alt="">
        <img class="logo" id="mobile-logo" src="../assets/square-logo.png" alt="">
      </el-row>
    </el-col>

    <!--标签-->
    <el-col :span="17" :offset="1" class="menu-buttons">
      <el-row justify="end" align="middle">

        <el-col :span="4">
          <el-link @click="router.push({name: 'Home'});scrollToAnchor('content');">首页</el-link>
        </el-col>

        <el-col :span="4">
          <el-link>开源资料</el-link>
        </el-col>

        <el-col :span="4">
          <el-link @click="router.push({name: 'HardwareProducts'})">硬件产品</el-link>
        </el-col>

        <el-col :span="4">
          <el-link @click="router.push({name: 'CompetitionSolutions'})">竞赛解决方案</el-link>
        </el-col>

        <el-col :span="4">
          <el-link @click="router.push({name: 'SteamEducation'})">STEAM教育</el-link>
        </el-col>

        <el-col :span="4">
          <el-link @click="scrollToAnchor('footer')">联系我们</el-link>
        </el-col>

      </el-row>
    </el-col>

    <!--折叠状态-->
    <el-col :offset="15" :span="2">
      <svg t="1721201908292" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="1482" class="collapse-menu-button"
           @click="collapseMenuClicked()">
        <path
            d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
            fill="#ffffff" p-id="1483"></path>
      </svg>
    </el-col>
  </el-row>

  <div class="collapse-menu" v-if="showCollapseMenu">
    <div @click="collapseMenuClicked('Home')" class="collapse-menu-item">首页</div>
    <el-divider/>
    <div class="collapse-menu-item">开源资料</div>
    <el-divider/>
    <div class="collapse-menu-item" @click="collapseMenuClicked('HardwareProducts')">硬件产品</div>
    <el-divider/>
    <div class="collapse-menu-item" @click="collapseMenuClicked('CompetitionSolutions')">竞赛解决方案</div>
    <el-divider/>
    <div class="collapse-menu-item" @click="collapseMenuClicked('SteamEducation')">STEAM教育</div>
    <el-divider/>
    <div class="collapse-menu-item" @click="scrollToAnchor('footer'); collapseMenuClicked()">联系我们</div>
    <el-divider/>
  </div>
</template>

<script setup>
import {scrollToAnchor} from "../utils/scrollToAnchor";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

let showCollapseMenu = ref(false);

function collapseMenuClicked(route = null) {
  if (!route) {
    showCollapseMenu.value = !showCollapseMenu.value;
  } else {
    router.push({name: route});
    showCollapseMenu.value = false;
  }
}


</script>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="less">
@header-height: 5rem;
@mobile-header-height: 12rem;

.common {
  background-color: #31354D;
  height: @header-height;
}

.el-row {
  height: @header-height;
}

.logo {
  margin-left: 1rem;
  width: 20rem;
  height: @header-height;
  object-fit: contain;
}

#mobile-logo {
  display: none;
}

.menu-buttons {
  display: block;
}

.el-link {
  font-family: "Microsoft YaHei", serif;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.1em;
  text-align: left;

  &:hover {
    color: #8596CB;

    &::after {
      content: "";
      border-bottom: 0.063rem solid white;
    }
  }
}

.collapse-menu-button {
  display: none;
  height: 8rem;
  width: 8rem;
  color: white;
  cursor: pointer;
}

.collapse-menu {
  position: fixed;
  top: @mobile-header-height;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 4px 0 #00000040;

  z-index: 200;

  box-sizing: border-box;
  padding: 5rem 0 0 5rem;
}

.collapse-menu-item {
  font-family: "Microsoft YaHei", serif;
  color: white;
  font-size: 5rem;
  font-weight: 400;
  line-height: 4rem;
  letter-spacing: 0.1em;
  text-align: left;
}

.el-divider {
  border-color: #D0D5E966;
  width: 80%;
}

@media screen and (max-width: 768px) {
  .common {
    height: @mobile-header-height;
    background-color: #110A0B;
  }

  .el-row {
    height: @mobile-header-height;
  }

  #pc-logo {
    display: none;
  }

  #mobile-logo {
    display: block;
    margin-left: 0.5rem;
    height: @mobile-header-height;
    transform: scale(0.7);
  }

  .menu-buttons {
    display: none;
  }

  .collapse-menu-button {
    display: block;
  }
}


</style>