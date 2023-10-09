<script setup lang="ts">
import ErInputNumber from '../InputNumber'
import { ref } from 'vue'

const num = ref(1)
const num2 = ref(2)

const changeValue = ref({})
const handleChange = (value: number, oldVal: number) => {
  console.log({ value, oldVal })
  changeValue.value = { value, oldVal }
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
    <button @click="blur">失去焦点</button>

    <h4>v-model="num"</h4>
    <er-input-number ref="inputNumber" v-model="num" />

    <h4>:min="1" :max="10"</h4>
    <er-input-number :min="1" :max="10" v-model="num" />

    <h4>:step="2"</h4>
    <er-input-number :step="2" v-model="num" />

    <h4>disabled</h4>
    <er-input-number disabled v-model="num" />

    <h4>size="small"</h4>
    <er-input-number size="small" v-model="num" />

    <h4>size="default"</h4>
    <er-input-number size="default" v-model="num" />

    <h4>size="large"</h4>
    <er-input-number size="large" v-model="num" />

    <h4>@change="handleChange" {{ changeValue }}</h4>
    <er-input-number v-model="num2" @change="handleChange" />
  </div>
</template>

<style scoped>
/*  */
</style>
