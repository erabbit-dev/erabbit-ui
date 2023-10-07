# Icon

Erabbit UI provides a set of common icons.

## Icon Collection

Click the icon to copy the name to the clipboard.

### Basic

<IconCollection type="basic" />

### Outlined

<IconCollection type="outlined" />

### Filled

<IconCollection type="filled" />

## Basic Usage

Specify the icon by `name`, control the size by `size`, and set the color by `color`.

```vue preview
<template>
  <div class="demo">
    <div class="icon-box">
      <er-icon name="weixin"></er-icon>
      <p>weixin</p>
    </div>
    <div class="icon-box">
      <er-icon name="weixin" size="30px"></er-icon>
      <p>weixin</p>
    </div>
    <div class="icon-box">
      <er-icon name="weixin" size="30px" color="green"></er-icon>
      <p>weixin</p>
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  align-items: center;
}
</style>
```

## Icon API

### Icon Attributes

| Name  | Description                                  | Type               | Default   |
| ----- | -------------------------------------------- | ------------------ | --------- |
| name  | icon name                                    | `IconName`         | `''`      |
| size  | icon size, if number, the default unit is px | `string \| number` | `1em`     |
| color | icon color                                   | `string`           | `#333333` |
