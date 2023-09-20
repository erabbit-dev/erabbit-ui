# Confirm

A set of modal boxes simulating system message box, mainly for confirm operations.

## Basic usage

Confirm is used to ask users' confirmation.

```vue preview
<script setup lang="ts">
import { showConfirm } from 'erabbit'

const onShowConfirm = () => {
  showConfirm({
    title: 'Title',
    message: 'This is a message'
  })
}
</script>
<template>
  <div class="demo">
    <er-button type="primary" size="small" @click="onShowConfirm">Click Me</er-button>
  </div>
</template>
```

## API

### Options

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| title | title of the MessageBox | `string` | `''` |
| message | content of the MessageBox | `string` | `''` |
| submitText | submit button text | `string` | `Cancel` |
| cancelText | cancel button text | `string` | `OK` |
| submit | MessageBox closing callback if you don't prefer Promise | `Function` | `''` |
| cancel | MessageBox closing callback if you don't prefer Promise | `Function` | `''` |
| teleport | set the root element for the message box | `string \| HTMLElement` | `body` |

