<script setup lang="ts">
import { ref } from 'vue'

const index = ref(-1)
const next = () => index.value++
</script>
<template>
  <div class="demo">
    <er-step :active-index="index">
      <er-step-item title="开始" desc="活动详情" />
      <er-step-item title="下单" desc="浏览" />
      <er-step-item title="审核" desc="后台审核" />
      <er-step-item title="流程结束" desc="流程结束" />
    </er-step>
    <er-button @click="next">下一步</er-button>
  </div>

  <div class="demo">
    <er-step :active-index="1">
      <er-step-item title="开始" desc="下单">
        <template #icon>
          <er-icon name="zan"></er-icon>
        </template>
      </er-step-item>
      <er-step-item title="过程" desc="支付">
        <template #icon>
          <er-icon name="heart-o"></er-icon>
        </template>
      </er-step-item>
      <er-step-item title="结束" desc="送达">
        <template #icon>
          <er-icon name="clock"></er-icon>
        </template>
      </er-step-item>
    </er-step>
  </div>

  <div class="demo">
    <er-step :active-index="1" size="large">
      <er-step-item title="开始" desc="活动详情" />
      <er-step-item title="下单" desc="浏览" />
      <er-step-item title="审核" desc="后台审核" />
      <er-step-item title="流程结束" desc="流程结束" />
    </er-step>
    <er-step :active-index="1">
      <er-step-item title="开始" desc="活动详情" />
      <er-step-item title="下单" desc="浏览" />
      <er-step-item title="审核" desc="后台审核" />
      <er-step-item title="流程结束" desc="流程结束" />
    </er-step>
    <er-step :active-index="1" size="small">
      <er-step-item title="开始" desc="活动详情" />
      <er-step-item title="下单" desc="浏览" />
      <er-step-item title="审核" desc="后台审核" />
      <er-step-item title="流程结束" desc="流程结束" />
    </er-step>
  </div>

  <div class="demo">
    <er-step :active-index="1" mode="vertical">
      <er-step-item title="开始" desc="活动详情" />
      <er-step-item title="下单" desc="浏览" />
      <er-step-item title="审核" desc="后台审核" />
      <er-step-item title="流程结束" desc="流程结束" />
    </er-step>
  </div>
</template>

<style scoped>
.demo {
  width: 800px;
}
</style>
