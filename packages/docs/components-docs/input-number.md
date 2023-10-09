# InputNumber

Input numerical values with a customizable range.

## Basic usage

Bind a variable to `v-model` in `<er-input-number>` element and you are set.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<template>
  <er-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
</template>
```

## Disabled

Use `disabled` attribute to determine whether InputNumber is disabled. It accepts a `Boolean` value.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>

<template>
  <er-input-number v-model="num" :disabled="true" />
</template>
```

## Steps

Allows you use `step` attribute to define incremental steps.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(2)
</script>

<template>
  <er-input-number v-model="num" :step="2" />
</template>
```

## Sizes

Use attribute `size` to set additional sizes with `large`, `small`.

```vue preview
<script lang="ts" setup>
import { ref } from 'vue'

const num1 = ref(1)
const num2 = ref(1)
const num3 = ref(1)
</script>

<template>
  <div class="demo">
    <er-input-number v-model="num1" size="large" />
    <er-input-number v-model="num2" size="default" />
    <er-input-number v-model="num3" size="small" />
  </div>
</template>

<style scoped>
.demo {
  padding-top: 20px;
}

.demo .er-input-number {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
```

## API

### Attributes

| Name     | Description                       | Type                              | Default   |
| :------- | :-------------------------------- | :-------------------------------- | :-------- |
| v-model  | binding value                     | `number`                          | —         |
| min      | the minimum allowed value         | `number`                          | -Infinity |
| max      | the maximum allowed value         | `number`                          | Infinity  |
| step     | incremental step                  | `number`                          | 1         |
| size     | size of the component             | `'large' \| 'default' \| 'small'` | `default` |
| disabled | whether the component is disabled | `boolean`                         | false     |

### Events

| Name   | Description                     | Type       |
| :----- | :------------------------------ | :--------- |
| change | triggers when the value changes | `Function` |
| blur   | triggers when Input blurs       | `Function` |
| focus  | triggers when Input focuses     | `Function` |

### Exposes

| Name  | Description                      | Type       |
| :---- | :------------------------------- | :--------- |
| focus | get focus the input component    | `Function` |
| blur  | remove focus the input component | `Function` |
