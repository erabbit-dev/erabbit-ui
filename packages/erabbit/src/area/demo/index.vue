<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="demo">
    <er-area
      :full-location="value"
      @change="value = $event.fullLocation"
      placeholder="请选择收货地址"
    />
  </div>
</template>

<style lang="scss" scoped></style>
