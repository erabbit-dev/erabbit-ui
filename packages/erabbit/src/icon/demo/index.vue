<script setup lang="ts">
import '../index.scss'
import { Icon as ErIcon } from '..'

import config from '@erabbit/icons'
</script>

<template>
  <div class="demo">
    <div class="icon-box" v-for="name in config.basic" :key="name">
      <er-icon :name="name"></er-icon>
      <p>{{ name }}</p>
    </div>

    <hr />

    <div class="icon-box" v-for="name in config.outlined" :key="name">
      <er-icon :name="name"></er-icon>
      <p>{{ name }}</p>
    </div>

    <hr />

    <div class="icon-box" v-for="name in config.filled" :key="name">
      <er-icon :name="name"></er-icon>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-box {
  border: 1px solid #e4e4e4;
  display: inline-flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding-top: 20px;
}
.icon-box p {
  font-size: 14px;
  color: #666;
}
.icon-box p:hover {
  cursor: pointer;
}
</style>
