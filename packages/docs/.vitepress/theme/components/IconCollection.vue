<script setup lang="ts">
defineOptions({
  name: 'IconCollection',
});

defineProps<{
  type: 'basic' | 'outlined' | 'filled';
}>();

import config from '@erabbit/icons';
</script>

<template>
  <div class="demo">
    <div class="icon-box" v-for="name in config[type]" :key="name">
      <er-icon :name="name"></er-icon>
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  margin-top: 40px;
}
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
  margin-right: 14px;
  margin-bottom: 14px;
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
