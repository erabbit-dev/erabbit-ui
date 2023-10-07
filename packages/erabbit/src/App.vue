<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="aside">
    <ul>
      <li v-for="item in router.getRoutes().reverse()" :key="item.path">
        <router-link :to="item.path">
          {{ item.path.replace('/demo', '') }}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.aside {
  width: 200px;
  background-color: #f5f5f5;
}
.main {
  box-sizing: border-box;
  padding: 50px;
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
</style>
