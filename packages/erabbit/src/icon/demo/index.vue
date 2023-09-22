<script setup lang="ts">
import config from '@erabbit-dev/icons'
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
  margin-right: 14px;
  margin-bottom: 14px;
  box-sizing: border-box;
  padding-top: 20px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 0;
    padding-top: 18px;
    line-height: 1;

    &.tip {
      font-size: 10px;
      color: green;
      padding-top: 5px;
    }
  }
}
</style>
