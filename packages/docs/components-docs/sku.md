# Sku

Stock Keeping Unit Component.

## Basic Usage

Use only product data for rendering. `spec` is specification data, `skus` is sku data.

```vue preview
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetch } from '@vueuse/core'

const goods = ref()
onMounted(async () => {
  const { data } = await useFetch('/erabbit-ui/sku.json').get().json()
  goods.value = data.value
})
</script>

<template>
  <div class="demo">
    <ErSku v-if="goods" :specs="goods.specs" :skus="goods.skus"></ErSku>
  </div>
</template>

<style lang="scss" scoped></style>
```

## Choose Sku

Initialization The `change` event is triggered after the specification is selected according to `skuId` and the full specification is selected.

```vue preview
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useFetch } from '@vueuse/core'

export type SkuItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  specsText?: string
}

const goods = ref()
onMounted(async () => {
  const { data } = await useFetch('/erabbit-ui/sku.json').get().json()
  goods.value = data.value
})

const sku = ref()
const onChange = (s: SkuItem) => {
  sku.value = s
}
</script>

<template>
  <div class="demo">
    <ErSku
      v-if="goods"
      :specs="goods.specs"
      :skus="goods.skus"
      sku-id="300206065"
      @change="onChange"
    ></ErSku>
    <p>{{ sku }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
```

## API

### Attributes

| Name   | Description             | Type            | Default |
| ------ | ----------------------- | --------------- | ------- |
| specs  | specification data      | `SkuSpecItem[]` | `[]`    |
| skus   | sku data                | `SkuItem[]`     | `[]`    |
| sku-id | current selected sku-id | `string`        | -       |

### Events

| Name   | Description                                   | Parameters               |
| ------ | --------------------------------------------- | ------------------------ |
| change | triggered after the specification is selected | `Pick<SkuItem, 'specs'>` |

### Types

```ts
export type SkuSpecItemValue = {
  name: string
  picture?: string
  selected?: boolean
  disabled?: boolean
}

export type SkuSpecItem = {
  name: string
  values: SkuSpecItemValue[]
}

export type SkuSpecItemPick = {
  name: string
  valueName: string
}

export type SkuItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  specs: SkuSpecItemPick[]
  specsText?: string
}
```
