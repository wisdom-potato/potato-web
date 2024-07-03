<template>
  <router-view/>
</template>

<script setup>

import {useRoute, useRouter} from "vue-router";

const router = useRouter()

const route = useRoute()

router.replace("/home")
</script>

<script>
export default {
  name: 'App'
}
</script>
