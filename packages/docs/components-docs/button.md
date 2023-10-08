# Button

Commonly used button.

## Basic usage

Use `type` and `size` to define Button's style.

```vue preview
<template>
  <div class="demo">
    <er-button type="default">default</er-button>
    <er-button type="info">info</er-button>
    <er-button type="primary">primary</er-button>
    <er-button type="plain">plain</er-button>
    <er-button type="success">success</er-button>
    <er-button type="warning">warning</er-button>
    <er-button type="danger">danger</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button type="default" round>default</er-button>
    <er-button type="info" round>info</er-button>
    <er-button type="primary" round>primary</er-button>
    <er-button type="plain" round>plain</er-button>
    <er-button type="success" round>success</er-button>
    <er-button type="warning" round>warning</er-button>
    <er-button type="danger" round>danger</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button type="default" circle icon="search"></er-button>
    <er-button type="info" circle icon="lock"></er-button>
    <er-button type="primary" circle icon="cart"></er-button>
    <er-button type="plain" circle icon="yuan"></er-button>
    <er-button type="success" circle icon="clock"></er-button>
    <er-button type="warning" circle icon="lamp"></er-button>
    <er-button type="danger" circle icon="close"></er-button>
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
    <er-button type="default" disabled>default</er-button>
    <er-button type="info" disabled>info</er-button>
    <er-button type="primary" disabled>primary</er-button>
    <er-button type="plain" disabled>plain</er-button>
    <er-button type="success" disabled>success</er-button>
    <er-button type="warning" disabled>warning</er-button>
    <er-button type="danger" disabled>danger</er-button>
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

## Sizes

Use attribute `size` to set additional sizes with `large`, `small`, `default`, default `default`.

```vue preview
<template>
  <div class="demo">
    <er-button type="primary" size="large">large</er-button>
    <er-button type="primary">default</er-button>
    <er-button type="primary" size="small">small</er-button>
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

## Button API

### Button Attributes

| Name     | Description                            | Type                                                                    | Default   |
| -------- | -------------------------------------- | ----------------------------------------------------------------------- | --------- |
| type     | button type                            | `'default' \| 'primary' \| 'plain' \| 'danger'\| 'warning'\| 'success'` | `default` |
| size     | button size                            | `'large' \| 'default' \| 'small'`                                       | `default` |
| round    | determine whether it's a round button  | `boolean`                                                               | `false`   |
| circle   | determine whether it's a circle button | `boolean`                                                               | `false`   |
| disabled | disable the button                     | `boolean`                                                               | `false`   |
