<script setup lang="ts">
import { showMessage, showLoadingMessage, clearMessage } from '..'

const onLoading = () => {
  const close = showLoadingMessage('加载中...')
  setTimeout(() => {
    close()
  }, 10000)
}

const onClear = () => {
  clearMessage()
}
</script>

<template>
  <div class="demo">
    <ErButton @click="showMessage({ message: '这是默认消息哈', type: 'info' })">
      info
    </ErButton>
    <ErButton @click="showMessage({ message: '成功的消息', type: 'success' })">
      success
    </ErButton>
    <ErButton @click="showMessage({ message: '警告警告', type: 'warning' })">
      warning
    </ErButton>
    <ErButton @click="showMessage({ message: '出错了', type: 'error' })">
      error
    </ErButton>
    <hr />
    <ErButton @click="onLoading"> loading </ErButton>
    <ErButton @click="onClear"> clear </ErButton>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  > :nth-child(n) {
    margin-right: 10px;
  }
}
</style>
