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
