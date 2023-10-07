<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <input v-model="msg" />
  <h1>{{ msg }}</h1>
  <div>Erabbit UI <er-button type="plain">按钮</er-button></div>
</template>
