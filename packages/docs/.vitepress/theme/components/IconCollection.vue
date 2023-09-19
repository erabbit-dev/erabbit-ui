<script setup lang="ts">
import config from '@erabbit/icons';
import { useClipboard } from '@vueuse/core';
import { ref } from 'vue';

defineOptions({
  name: 'IconCollection',
});

defineProps<{
  type: 'basic' | 'outlined' | 'filled';
}>();

const source = ref('');
const { copy, copied, isSupported } = useClipboard({ source });
const onCopy = (val: string) => {
  if (isSupported.value) {
    source.value = val
    copy(val);
  }
};
</script>

<template>
  <div class="demo">
    <div
      class="icon-box"
      v-for="name in config[type]"
      :key="name"
      @click="onCopy(name)"
    >
      <er-icon :name="name"></er-icon>
      <p>{{ name }}</p>
      <p class="tip" v-if="copied && source === name">copied</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  margin-top: 40px;
}
</style>
