<script setup lang="ts">
import { ref } from 'vue'
import '@erabbit-dev/icons/src/index.scss'
import '../../button/index.scss'
import '../index.scss'
import { Confirm as ErConfirm, showConfirm } from '..'

const visible = ref(false)
const onOpen = () => {
  visible.value = true
}

const onShowConfirm = async () => {
  await showConfirm({
    title: 'Title',
    message: 'This is a message',
    submit: () => {
      console.log('submit')
    },
    cancel: () => {
      console.log('cancel')
    }
  })
  console.log('ok')
}
</script>

<template>
  <div class="demo">
    <button @click="onOpen">打开 component</button>
    <button @click="onShowConfirm">打开 showConfirm</button>
    <ErConfirm
      title="Title"
      message="This is a message"
      v-model:visible="visible"
    />
  </div>
</template>

<style lang="scss" scoped></style>
