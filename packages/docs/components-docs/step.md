# Step

Loop a series of steps to show current project process

## Basic Usage

Combine `er-step` with `er-step-item`, and you'll get a step component. You can set the current step by activeIndex property . You also can change the mode or size by
set the property.

```vue preview
<script setup lang="ts">
import { ref } from 'vue';

const index = ref(-1);
const next = () => index.value++;
</script>

<template>
  <er-step :active-index="2">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
  <er-button @click="next">下一步</er-button>
</template>
```

## Step bar with icon

A variety of custom icons can be used in the step bar.

```vue preview
<template>
  <er-step :active-index="1">
    <er-step-item title="开始" desc="下单">
      <template #icon>
        <er-icon name="zan"></er-icon>
      </template>
    </er-step-item>
    <er-step-item title="过程" desc="支付">
      <template #icon>
        <er-icon name="heart-o"></er-icon>
      </template>
    </er-step-item>
    <er-step-item title="结束" desc="送达">
      <template #icon>
        <er-icon name="clock"></er-icon>
      </template>
    </er-step-item>
  </er-step>
</template>
```

## Vertical step bar

To change the display mode to `vertical` or `horizontal`, you can set the mode property. The default mode is horizontal.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue';
const currentMode = ref('vertical');
const changeMode = () => {
  currentMode.value =
    currentMode.value === 'horizontal' ? 'vertical' : 'horizontal';
};
</script>

<template>
  <er-button @click="changeMode">垂直/水平</er-button>
  <er-step :active-index="2" :mode="currentMode">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
</template>
```

## Sizes

```vue preview
<template>
  <er-step size="large" :active-index="2">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
  <er-step :active-index="2">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
  <er-step size="small" :active-index="2">
    <er-step-item title="开始" desc="活动详情" />
    <er-step-item title="下单" desc="浏览" />
    <er-step-item title="审核" desc="后台审核" />
    <er-step-item title="流程结束" desc="流程结束" />
  </er-step>
</template>
```

## Step API

### Step Attributes

| Name         | Description             | Type                              | Default      |
| ------------ | ----------------------- | --------------------------------- | ------------ |
| mode         | display direction       | `'vertical' \| 'horizontal'`      | `horizontal` |
| active-index | current activation step | `number`                          | `-1`         |
| size         | button size             | `'large' \| 'default' \| 'small'` | `default`    |

### Step Methods

| Name           | Description                   | Parameters            |
| -------------- | ----------------------------- | --------------------- |
| getActiveIndex | get current active Step index | 'activeIndex: number' |

## StepItem API

### StepItem Attributes

| Name  | Description      | Type     | Default |
| ----- | ---------------- | -------- | ------- |
| title | step title       | `string` | `''`    |
| desc  | step description | `string` | `''`    |

### StepItem Slots

| Name | Description |
| ---- | ----------- |
| icon | custom icon |
