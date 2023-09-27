<script setup lang="ts"></script>

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
