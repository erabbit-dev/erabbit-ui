<script setup lang="ts">
import 'erabbit/dist/es/confirm/style'
import { showConfirm } from '..'

const onShowConfirm = async () => {
  await showConfirm({
    title: 'Title',
    message: 'This is a message',
    submit: () => {
      console.log('submit')
    },
    cancel: () => {
      console.log('cancel')
    },
  })
  console.log('ok')
}
</script>

<template>
  <div class="demo">
    <ErButton @click="onShowConfirm">打开 showConfirm</ErButton>
  </div>
</template>

<style lang="scss" scoped></style>
