<script setup>
defineOptions({
  name: 'StepDemo',
})
import Step from '../Step'
import StepItem from '../StepItem'
import '../index.scss'
</script>
<template>
  <div>
    <div style="box-sizing: border-box">
      <step :active-index="2" mode="vertical">
        <step-item title="开始" desc="活动详情" />
        <step-item title="下单" desc="浏览" />
        <step-item title="审核" desc="后台审核" />
        <step-item title="流程结束" desc="流程结束" />
      </step>
    </div>
    <div>
      <step :active-index="2" mode="vertical">
        <step-item title="开始" desc="活动详情" />
        <step-item title="下单" desc="浏览" />
        <step-item title="审核" desc="后台审核" />
        <step-item title="流程结束" desc="流程结束" />
      </step>
    </div>

    <step :active-index="1" size="small">
      <step-item title="开始" desc="下单"></step-item>
      <step-item title="过程" desc="支付"> </step-item>
      <step-item title="结束" desc="送达"> </step-item>
    </step>
    <step size="medium">
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
    </step>
    <step mode="vertical" :active-index="8">
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
