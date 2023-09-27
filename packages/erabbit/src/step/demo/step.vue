<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'StepDemo'
})
import Step from '../Step'
import StepItem from '../StepItem'
import '../index.scss'
const index = ref(-1)
const changeIndex = () => {
  index.value++
}
</script>
<template>
  <div>
    <button @click="changeIndex">+1</button>

    <!-- <step size="medium">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step :active-index="1" size="small">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step :active-index="3" size="mini">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step mode="vertical" :active-index="0">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step mode="vertical" :active-index="1">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step mode="vertical" size="small">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step mode="vertical" size="mini">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step> -->
    <step mode="vertical" :active-index="index">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
  </div>
</template>
