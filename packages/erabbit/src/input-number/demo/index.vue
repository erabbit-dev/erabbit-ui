<script setup lang="ts">
import ErInputNumber from '../InputNumber'
import { ref } from 'vue'

const num = ref(-1)
const handleChange = (value: number, oldVal: number) => {
  console.log({ value, oldVal })
}

const inputNumber = ref<any>()

const focus = () => {
  inputNumber.value.focus()
}

const blur = () => {
  inputNumber.value.blur()
}
</script>

<template>
  <div class="demo">
    <h3>父组件数据 {{ num }}</h3>
    <button @click="focus">获取焦点</button>
    <button @click="blur">获取焦点</button>

    <er-input-number
      ref="inputNumber"
      :min="1"
      :max="100"
      :step="2"
      v-model="num"
      @change="handleChange"
    />

    <er-input-number
      ref="inputNumber"
      :min="1"
      :max="100"
      :step="3"
      disabled
      v-model="num"
      @change="handleChange"
    />

    <er-input-number size="small" v-model="num" />

    <er-input-number size="middle" v-model="num" />

    <er-input-number size="large" v-model="num" />
  </div>
</template>

<style scoped>
/*  */
</style>
