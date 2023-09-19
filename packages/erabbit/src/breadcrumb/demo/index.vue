<script setup lang="ts">
import { ref } from 'vue'
import {
  Breadcrumb as ErBreadcrumb,
  BreadcrumbItem as ErBreadcrumbItem
} from '..'
import '../index.scss'

const show = ref(false)
</script>

<template>
  <div class="demo">
    <er-breadcrumb>
      <er-breadcrumb-item to="/">首页</er-breadcrumb-item>
      <er-breadcrumb-item @click="show = !show"> 活动管理 </er-breadcrumb-item>
      <transition name="fade-right" mode="out-in">
        <er-breadcrumb-item v-if="show">活动列表</er-breadcrumb-item>
        <er-breadcrumb-item v-else>活动编辑</er-breadcrumb-item>
      </transition>
    </er-breadcrumb>

    <hr />

    <er-breadcrumb separator="&gt;">
      <er-breadcrumb-item to="/">首页</er-breadcrumb-item>
      <er-breadcrumb-item to="/">活动管理</er-breadcrumb-item>
      <er-breadcrumb-item>活动编辑</er-breadcrumb-item>
    </er-breadcrumb>
  </div>
</template>

<style lang="scss" scoped></style>
