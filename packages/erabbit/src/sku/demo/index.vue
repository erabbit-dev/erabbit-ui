<script setup lang="ts">
import { ref } from 'vue'
import data from '../constants'

const goods = ref(data)
const skuId = ref('300206065')
const onChange = (e: unknown) => {
  console.log(e)
}
</script>

<template>
  <div class="demo">
    <ErSku
      :specs="goods.specs"
      :skus="goods.skus"
      :sku-id="skuId"
      @change="onChange"
    ></ErSku>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 800px;
}
</style>
