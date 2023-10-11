# Tab

Tab component

## Basic Usage

Combine `er-tab` with `er-tab-panel`, and you'll get a tabs component. You can set the current active by v-model property . You also can change the size or type by
set the property.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('begin')
</script>

<template>
  <er-tab v-model="activeName">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
</template>

<style scoped></style>
```

## Different size

To change the display size to `small` `large`, you can set the size property. The default size is `default`.

```vue preview
<template>
  <er-tab :size="size">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-button @click="change"> default/small/large </er-button>
  <div>Current: {{ size }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('begin')
const size = ref('default')

let list = ['small', 'large', 'default']
const change = () => {
  size.value = list[0]
  list = [...list.slice(1), list[0]]
}
</script>

<style scoped></style>
```

## Different Position

```vue preview
<template>
  <er-tab :tab-position="position">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-button @click="change"> top/right/bottom/left </er-button>
  <div>Current: {{ position }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const position = ref('top')

let list = ['top', 'right', 'bottom', 'left']
const change = () => {
  position.value = list[0]
  list = [...list.slice(1), list[0]]
}
</script>

<style scoped></style>
```

## Different type

You can set the type `card` `border-card` to change the showMode

```vue preview
<template>
  <er-tab :type="type">
    <er-tab-panel label="开始" name="begin">1</er-tab-panel>
    <er-tab-panel label="下单" name="order">2</er-tab-panel>
    <er-tab-panel label="审核" name="approval">3</er-tab-panel>
    <er-tab-panel label="流程结束" name="end">4</er-tab-panel>
  </er-tab>
  <er-button @click="change"> card/border-card/default </er-button>
  <div>Current: {{ type || 'default' }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const type = ref('')

let list = ['card', 'border-card', '']
const change = () => {
  type.value = list[0]
  list = [...list.slice(1), list[0]]
}
</script>

<style scoped></style>
```

## Tabs API

### Tabs Attributes

| Name        | Description            | Type                                     | Default |
| ----------- | ---------------------- | ---------------------------------------- | ------- |
| v-model     | Set the active Tab     | `string \| number`                       | -       |
| size        | Set the size           | `'large' \| 'small' \| 'default'`        | default |
| type        | Set the show Mode      | `'card' \| 'border-card'`                | -       |
| tabPosition | Set the tabs direction | `'left' \| 'right' \| 'top' \| 'bottom'` | top     |

### Tabs Event

| Name      | Description                   | Parameters                      |
| --------- | ----------------------------- | ------------------------------- |
| tab-click | trigger it when click the tab | `item: Children, index: number` |

### TabsPanel Attributes

| Name  | Description                     | Type     | Default |
| ----- | ------------------------------- | -------- | ------- |
| label | Set show tab title              | `string` | -       |
| name  | Set the unqiue value of the tab | `string` | -       |
