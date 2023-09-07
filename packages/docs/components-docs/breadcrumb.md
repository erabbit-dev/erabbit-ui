  # Breadcrumb

Displays the location of the current page, making it easier to browser back.


## Basic Usage

In `el-breadcrumb`, each `el-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is `/`.

```vue preview
<template>
  <er-breadcrumb>
    <er-breadcrumb-item to="/">首页</er-breadcrumb-item>
    <er-breadcrumb-item to="/" @click="show = !show">活动管理</er-breadcrumb-item>
    <er-breadcrumb-item>活动编辑</er-breadcrumb-item>
  </er-breadcrumb>

  <er-breadcrumb separator="&gt;">
    <er-breadcrumb-item to="/">首页</er-breadcrumb-item>
    <er-breadcrumb-item to="/">活动管理</er-breadcrumb-item>
    <er-breadcrumb-item>活动编辑</er-breadcrumb-item>
  </er-breadcrumb>
</template>

<style scoped></style>
```

## Use Transition

Using the transition component, implement the breadcrumb item toggle animation.

```vue preview
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <er-breadcrumb>
    <er-breadcrumb-item to="/">首页</er-breadcrumb-item>
    <er-breadcrumb-item to="/" @click="show = !show">活动管理</er-breadcrumb-item>
    <transition name="fade-right" mode="out-in">
      <er-breadcrumb-item v-if="show">活动列表</er-breadcrumb-item>
      <er-breadcrumb-item v-else>活动编辑</er-breadcrumb-item>
    </transition>
  </er-breadcrumb>
</template>

<style scoped></style>
```

## Breadcrumb API

### Breadcrumb Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| separator | separator character | `string` | `/`|

### Breadcrumb Slots

| Name | Description | Subtags |
| ---- | ----------- | ---- |
| default | customize default content | Breadcrumb Item |


## BreadcrumbItem API

### BreadcrumbItem Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| to | target route of the link, same as `to` of `vue-router` | `string \| object` | `''` |
| replace | if `true`, the navigation will not leave a history record | `boolean` | false |


