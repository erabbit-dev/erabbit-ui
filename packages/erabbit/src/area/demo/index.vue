<script setup lang="ts">
import { ref } from 'vue'
import { Area as ErArea } from '..'
import '../index.scss'

const value = ref('')
</script>

<template>
  <div class="demo">
    <er-area :value="value" @change="value = $event.value" />
  </div>
</template>

<style lang="scss" scoped></style>
