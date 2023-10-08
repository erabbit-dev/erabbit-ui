<script setup lang="ts">
import { ref } from 'vue'
import type { TabPositionType, TabShowType, TabSizeType } from '..'

const activeName = ref('third')

const size = ref<TabSizeType>('default')
const position = ref<TabPositionType>()
const showType = ref<TabShowType>()
</script>
<template>
  <div>
    <ErTab v-model="activeName">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <hr />

    <ErTab :size="size">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <div class="btn-group">
      <ErButton @click="size = 'large'">large</ErButton>
      <ErButton @click="size = 'default'">default</ErButton>
      <ErButton @click="size = 'small'">small</ErButton>
    </div>
    <hr />

    <ErTab :tab-position="position">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
    </ErTab>
    <div class="btn-group">
      <ErButton @click="position = 'top'">top</ErButton>
      <ErButton @click="position = 'right'">right</ErButton>
      <ErButton @click="position = 'bottom'">bottom</ErButton>
      <ErButton @click="position = 'left'">left</ErButton>
    </div>
    <hr />

    <ErTab :type="showType">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
    </ErTab>
    <div class="btn-group">
      <ErButton @click="showType = undefined">default</ErButton>
      <ErButton @click="showType = 'card'">card</ErButton>
      <ErButton @click="showType = 'border-card'">border-card</ErButton>
    </div>
  </div>
</template>

<style>
.btn-group {
  padding-top: 20px;
  .er-button {
    margin-right: 20px;
  }
}
</style>
