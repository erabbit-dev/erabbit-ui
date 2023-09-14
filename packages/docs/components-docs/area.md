  # Area

Select components by province or region.


## Basic Usage

Use `full-location` show default full province city county address, the change event is triggered after the selection.

```vue preview
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

<style scoped>
.demo {
  height: 320px;
}
</style>
```


## Area API

### Area Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| full-location | default full province city county address | `string` | `''`|
| placeholder | area placeholder | `string` | `请选择地区`|


### Area Events

| Name | Description | Parameters |
| ---- | ----------- | ---- |
| change | triggered after the selection | `result: AreaResult` |






