<script setup lang="ts"></script>

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
    <er-button type="info" circle icon="cart"></er-button>
    <er-button type="primary" circle icon="cart"></er-button>
    <er-button type="plain" circle icon="marker"></er-button>
    <er-button type="success" circle icon="clock"></er-button>
    <er-button type="warning" circle icon="lamp"></er-button>
    <er-button type="danger" circle icon="close"></er-button>
  </div>
  <div class="demo">
    <er-button type="primary" size="large">large</er-button>
    <er-button type="primary">middle</er-button>
    <er-button type="primary" size="small">small</er-button>
  </div>
  <hr />
  <div class="demo">
    <er-button icon="close">取消</er-button>
    <er-button type="primary" loading>保存</er-button>
  </div>
</template>

<style scoped>
.demo .er-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
