<template>
  <el-container>
    <el-header class="common">
      <el-row align="middle">

        <!--logo-->
        <el-col :span="6">
          <el-row align="middle">
            <img class="logo" src="../assets/text-logo.png" alt="">
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
          <el-row justify="center" align="middle">
            <el-dropdown ref="dropdown" @visible-change="collapseMenuChanged">
              <svg t="1721201908292" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="1482" class="collapse-menu-button"
                   @click="collapseMenuClicked">
                <path
                    d="M170.666667 213.333333h682.666666v85.333334H170.666667V213.333333z m0 512h682.666666v85.333334H170.666667v-85.333334z m0-256h682.666666v85.333334H170.666667v-85.333334z"
                    fill="#ffffff" p-id="1483"></path>
              </svg>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="router.push({name: 'Home'})">首页</el-dropdown-item>
                  <el-dropdown-item>开源资料</el-dropdown-item>
                  <el-dropdown-item @click="router.push({name: 'HardwareProducts'})">硬件产品</el-dropdown-item>
                  <el-dropdown-item @click="router.push({name: 'CompetitionSolutions'})">竞赛解决方案</el-dropdown-item>
                  <el-dropdown-item @click="router.push({name: 'SteamEducation'})">STEAM教育</el-dropdown-item>
                  <el-dropdown-item @click="scrollToAnchor('footer')">联系我们</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-row>
        </el-col>

      </el-row>
    </el-header>
  </el-container>
</template>

<script setup>
import {scrollToAnchor} from "../utils/scrollToAnchor";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

const dropdown = ref(null);
let dropdownState = false

function collapseMenuClicked() {
  dropdownState = !dropdownState;
  if (dropdownState) {
    dropdown.value.handleOpen();
  } else {
    dropdown.value.handleClose();
  }
}

function collapseMenuChanged(visible) {
  dropdownState = visible;
}

</script>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="less">
@header-height: 4.688rem;
@mobile-header-height: 12rem;

.common {
  background-color: #31354D;
  height: @header-height;
}

.el-row {
  height: @header-height;
}

.logo {
  width: 20rem;
  height: @header-height;
  object-fit: contain;
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

@media screen and (max-width: 768px) {
  .common {
    height: @mobile-header-height;
  }

  .el-row {
    height: @mobile-header-height;
  }

  .logo {
    width: 70rem;
    height: @mobile-header-height;
  }

  .menu-buttons {
    display: none;
  }

  .collapse-menu-button {
    display: block;
  }
}


</style>