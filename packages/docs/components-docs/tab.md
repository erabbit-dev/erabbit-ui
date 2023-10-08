# Tab

Tab component

## Basic Usage

Combine `er-tab` with `er-tab-panel`, and you'll get a tabs component. You can set the current active by v-model property . You also can change the size or type by
set the property.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue';
const activeName = ref('begin');
</script>
<template>
  <er-tab v-model="activeName">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
</template>
```

## Different size

To change the display size to `mini/small`, you can set the size property. The default size is default.

```vue preview
<template>
  <er-button @click="changeSize" type="primary" size="small"
    >default/small/mini</er-button
  >
  <er-tab v-model="activeName" :size="size">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const activeName = ref('begin');
const size = ref('default');
let list = ['small', 'mini', 'default'];
const changeSize = () => {
  size.value = list[0];
  list = [...list.slice(1), list[0]];
};
</script>
```

## Different Position

```vue preview
<template>
  <er-tab v-model="activeName" :size="size" tab-position="left">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-tab v-model="activeName" :size="size" tab-position="right">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-tab v-model="activeName" :size="size" tab-position="top">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-tab v-model="activeName" :size="size" tab-position="bottom">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const activeName = ref('begin');
const size = ref('default');
let list = ['small', 'mini', 'default'];
const changeSize = () => {
  size.value = list[0];
  list = [...list.slice(1), list[0]];
};
</script>
```

## Different type

You can set the type `card/border-card` to change the showMode

```vue preview
<template>
  <er-tab type="card">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-tab type="border-card">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
</template>
```

## Tabs API

### Tabs Attributes

| Name        | Description            | Type                       | Default |
| ----------- | ---------------------- | -------------------------- | ------- |
| v-model     | Set the active Tab     | `string/number`            | -       |
| size        | Set the size           | `mini/small/default`       | default |
| type        | Set the show Mode      | `default/card/border-card` | default |
| tabPosition | Set the tabs direction | `left/right/top/bottom`    | top     |

### Tabs Event

| Name      | Description                   | Parameters              |
| --------- | ----------------------------- | ----------------------- |
| tab-click | trigger it when click the tab | tabspanel name or index |

### TabsPanel Attributes

| Name  | Description                     | Type     | Default |
| ----- | ------------------------------- | -------- | ------- |
| label | Set show tab title              | `string` | -       |
| name  | Set the unqiue value of the tab | `string` | -       |
