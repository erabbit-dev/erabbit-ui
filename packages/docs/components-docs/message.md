# Confirm

Used to show feedback after an activity.

## Basic usage

Displays at the top, and disappears after 3 seconds.

```vue preview
<script setup lang="ts">
import { showMessage } from 'erabbit'

const onShowInfoMessage = () => {
  showMessage({
    message: 'This is a message',
  })
}

const onShowSuccessMessage = () => {
  showMessage({
    message: 'This is a message',
    type: 'success',
  })
}

const onShowWarningMessage = () => {
  showMessage({
    message: 'This is a message',
    type: 'warning',
  })
}

const onShowErrorMessage = () => {
  showMessage({
    message: 'This is a message',
    type: 'error',
  })
}
</script>

<template>
  <div class="demo">
    <er-button @click="onShowInfoMessage">Info</er-button>
    <er-button @click="onShowSuccessMessage">Success</er-button>
    <er-button @click="onShowWarningMessage">Warning</er-button>
    <er-button @click="onShowErrorMessage">Error</er-button>
  </div>
</template>

<style scoped>
.demo > :nth-child(n) {
  margin-right: 10px;
}
</style>
```

## Loading Message

The `showLoadingMessage` command is used to display the loaded message.

```vue preview
<script setup lang="ts">
import { showLoadingMessage } from 'erabbit'

const onShowMessage = () => {
  const close = showLoadingMessage('Loading...')
  setTimeout(() => {
    close()
  }, 5000)
}
</script>

<template>
  <div class="demo">
    <er-button @click="onShowMessage">Loading</er-button>
  </div>
</template>

<style scoped>
.demo > :nth-child(n) {
  margin-right: 10px;
}
</style>
```

## API

### Options

| Name     | Description                                                                    | Type                                          | Default  |
| -------- | ------------------------------------------------------------------------------ | --------------------------------------------- | -------- |
| type     | message type                                                                   | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| message  | message text                                                                   | `string`                                      | `''`     |
| icon     | custom icon component, overrides `type`                                        | `string`                                      | -        |
| duration | display duration, millisecond. If set to 0, it will not turn off automatically | `number`                                      | 3000     |

### Methods

| Name         | Description                                                          | Parameters |
| ------------ | -------------------------------------------------------------------- | ---------- |
| close        | close the Message, showMessage or showLoadingMessage return function | -          |
| clearMessage | close all Message                                                    | -          |
