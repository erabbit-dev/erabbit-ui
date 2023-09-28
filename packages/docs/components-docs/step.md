# Step

Loop a series of steps to show current project process

## Basic Usage

Combine `er-step` with `er-step-item`, and you'll get a step component. You can set the current step by activeIndex property . You also can change the mode or size by
set the property.

```vue preview
<template>
  <er-step :active-index="2">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
</template>
```

## Content Custom

To change the display mode to `vertical` or `horizontal`, you can set the mode property. The default mode is horizontal.

```vue preview
<template>
  <er-button @click="changeMode" type="primary" size="small"
    >垂直/水平</er-button
  >
  <er-step :active-index="2" :mode="currentMode">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const currentMode = ref('vertical');
const changeMode = () => {
  currentMode.value =
    currentMode.value === 'horizontal' ? 'vertical' : 'horizontal';
};
</script>
```

## Different Size

```vue preview
<template>
  <er-step size="default" :active-index="2" :mode="currentMode">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
  <er-step size="small" :active-index="2" :mode="currentMode">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
  <er-step size="mini" :active-index="2" :mode="currentMode">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
</template>
```
