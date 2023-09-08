# Checkbox

A group of options for multiple choices.


## Basic Usage

Define `v-model`(bind variable) in `el-checkbox`. The default value is a `Boolean` for single checkbox.

```vue preview
<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <er-checkbox v-model="checked">Checkbox</er-checkbox>
</template>

<style scoped></style>
```

## Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

```vue preview
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const check = ref(false)

const indeterminate = ref(false)

const checkItems = ref([
  { label: 'Apple', value: false },
  { label: 'Pear', value: false },
  { label: 'Orange', value: false }
])

const onChange = (val: boolean) => {
  checkItems.value.forEach((item) => {
    item.value = val
  })
}

onMounted(() => {
  onChange(check.value)
})

watch(
  checkItems,
  () => {
    const len = checkItems.value.filter((item) => item.value).length
    if (len > 0 && len < checkItems.value.length) {
      indeterminate.value = true
      return
    }
    if (len === checkItems.value.length) {
      check.value = true
      indeterminate.value = false
      return
    }
    if (len === 0) {
      check.value = false
      indeterminate.value = false
      return
    }
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div class="demo">
    <er-checkbox v-model="check" :indeterminate="indeterminate" @change="onChange">
      Check All
    </er-checkbox>
    <hr />
    <er-checkbox
      v-for="item in checkItems"
      :key="item.label"
      v-model="item.value"
    >
      {{ item.label }}
    </er-checkbox>
  </div>
</template>

<style lang="scss" scoped></style>
```

## Checkbox API

### Checkbox Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| model-value / v-model | binding value | `boolean` | false |
| indeterminate | Set indeterminate state, only responsible for style control | `boolean` | false |

### Checkbox Slots

| Name | Description | Subtags |
| ---- | ----------- | ---- |
| default | customize default content | - |


### Checkbox Events

| Name | Description | Parameters |
| ---- | ----------- | ---- |
| change | triggers when the binding value changes | `checked: boolean` |



