<script setup lang="ts">
import '../index.scss'
import { Button as ErButton } from '..'
</script>

<template>
  <div class="demo">
    <er-button type="default">default</er-button>
    <er-button type="primary">primary</er-button>
    <er-button type="plain">plain</er-button>
    <er-button type="gray">gray</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button type="primary" size="large">large</er-button>
    <er-button type="primary" size="middle">middle</er-button>
    <er-button type="primary" size="small">small</er-button>
    <er-button type="primary" size="mini">mini</er-button>
  </div>
</template>

<style scoped>
.demo .er-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
