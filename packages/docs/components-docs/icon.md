# Icon

Erabbit UI provides a set of common icons.


## Icon Collection

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

<style lang="scss" scoped>
.demo {
  display: flex;
  align-items: center;
}
.icon-box {
  border: 1px solid #e4e4e4;
  display: inline-flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-right: 8px;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding-top: 20px;
}
.icon-box p {
  font-size: 14px;
  color: #666;
}
.icon-box p:hover {
  cursor: pointer;
}
</style>
```

## Icon API

### Icon Attributes

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ---- |
| name | icon name | `IconName` | `''` |
| size | icon size, if number, the default unit is px  | `string \| number` | `1em` |
| color | icon color | `string` | `#333333` |


