<script setup>
import App from './App.vue'
import { setupErabbitUI } from './erabbit-ui.js'

defineOptions({
  name: 'PlaygroundMain',
})

setupErabbitUI()
</script>

<template>
  <App />
</template>
