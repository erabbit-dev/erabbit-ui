<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb, BreadcrumbItem } from '..'
import '../index.scss'

const show = ref(false)
</script>

<template>
  <div class="demo">
    <Breadcrumb>
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/" @click="show = !show">活动管理</BreadcrumbItem>
      <Transition name="fade-right" mode="out-in">
        <BreadcrumbItem v-if="show">活动列表</BreadcrumbItem>
        <BreadcrumbItem v-else>活动编辑</BreadcrumbItem>
      </Transition>
    </Breadcrumb>

    <Breadcrumb separator="&gt;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/">活动管理</BreadcrumbItem>
      <BreadcrumbItem>活动编辑</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<style lang="scss" scoped></style>
