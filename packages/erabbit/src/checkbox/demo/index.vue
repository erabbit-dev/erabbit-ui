<script setup lang="ts">
import { ref, watch } from 'vue'
import { Checkbox as ErCheckbox } from '..'
import '../index.scss'

const check = ref(false)

const indeterminate = ref(false)

const checkItems = ref([
  { label: 'Apple', value: false },
  { label: 'Pear', value: false },
  { label: 'Orange', value: false }
])

watch(
  check,
  (val) => {
    checkItems.value.forEach((item) => {
      item.value = val
    })
  },
  { immediate: true }
)

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
    <er-checkbox v-model="check" :indeterminate="indeterminate">
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
