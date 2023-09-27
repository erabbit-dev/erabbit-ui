# Button

Commonly used button.

## Basic usage

Use `type` and `size` to define Button's style.

```vue preview
<template>
  <div class="demo">
    <er-button type="default" size="small">default</er-button>
    <er-button type="info" size="small">info</er-button>
    <er-button type="primary" size="small">primary</er-button>
    <er-button type="plain" size="small">plain</er-button>
    <er-button type="success" size="small">success</er-button>
    <er-button type="warning" size="small">warning</er-button>
    <er-button type="danger" size="small">danger</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button type="default" size="small" round>default</er-button>
    <er-button type="info" size="small" round>info</er-button>
    <er-button type="primary" size="small" round>primary</er-button>
    <er-button type="plain" size="small" round>plain</er-button>
    <er-button type="success" size="small" round>success</er-button>
    <er-button type="warning" size="small" round>warning</er-button>
    <er-button type="danger" size="small" round>danger</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button type="default" size="small" circle icon="search"></er-button>
    <er-button type="info" size="small" circle icon="cart"></er-button>
    <er-button type="primary" size="small" circle icon="cart"></er-button>
    <er-button type="plain" size="small" circle icon="marker"></er-button>
    <er-button type="success" size="small" circle icon="clock"></er-button>
    <er-button type="warning" size="small" circle icon="lamp"></er-button>
    <er-button type="danger" size="small" circle icon="close"></er-button>
  </div>
</template>

<style scoped>
.demo {
  padding-top: 20px;
}
.demo .er-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
```

## Disabled Button

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```vue preview
<template>
  <div class="demo">
    <er-button type="primary" disabled>middle</er-button>
    <er-button type="primary" disabled>middle</er-button>
    <er-button type="primary" disabled>middle</er-button>
    <er-button type="primary" disabled>middle</er-button>
  </div>
</template>

<style scoped>
.demo .er-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
```

## Sizes

Use attribute `size` to set additional sizes with `large`, `small`, `mini`, default `middle`.

```vue preview
<template>
  <div class="demo">
    <er-button type="primary" size="large">large</er-button>
    <er-button type="primary" size="middle">middle</er-button>
    <er-button type="primary" size="small">small</er-button>
    <er-button type="primary" size="mini">mini</er-button>
  </div>
</template>

<style scoped>
.demo .er-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
```

## Button API

### Button Attributes

| Name     | Description                            | Type                                                                    | Default   |
| -------- | -------------------------------------- | ----------------------------------------------------------------------- | --------- |
| type     | button type                            | `'default' \| 'primary' \| 'plain' \| 'danger'\| 'warning'\| 'success'` | `default` |
| size     | button size                            | `'large' \| 'middle' \| 'small' \| 'mini'`                              | `middle`  |
| round    | determine whether it's a round button  | `boolean`                                                               | `false`   |
| circle   | determine whether it's a circle button | `boolean`                                                               | `false`   |
| disabled | disable the button                     | `boolean`                                                               | `false`   |
