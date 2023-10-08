<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { ErabbitUIStore } from '../store'
import { getSupportedErabbitUIVersions } from '../utils'
import Github from './Github.vue'
import Moon from './Moon.vue'
import Sun from './Sun.vue'
import Share from './Share.vue'
import { useClipboard, useDark } from '@vueuse/core'

defineOptions({
  name: 'PlaygroundHeader',
})

// setting versions
const { store } = defineProps<{
  store: ErabbitUIStore
}>()

const versions = reactive({
  erabbitUI: {
    published: [] as string[],
    text: 'ErabbitUI',
    active: 'latest',
  },
})

const list = getSupportedErabbitUIVersions()

watch(list, () => {
  versions.erabbitUI.published = ['latest', ...list.value]
})

const setVersion = (e: Event) => {
  const v = (e.target as HTMLSelectElement).value
  versions.erabbitUI.active = v
  store.setErabbitUIVersion(v)
}

// setting dark mode
const isDark = useDark()

const onGithub = () => {
  window.open('https://github.com/erabbit-dev/erabbit-ui')
}

const { isSupported, copy, copied } = useClipboard()
const onCopy = () => {
  if (isSupported.value) {
    copy(location.href)
  }
}
watch(copied, () => {
  if (copied.value) alert('Sharable URL has been copied to clipboard.')
})
</script>

<template>
  <div class="playground-header">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
      <h1>Erabbit UI Playground</h1>
    </div>
    <div class="settings">
      <label class="dep" v-for="item in versions" :key="item.text">
        <span class="text">{{ item.text }}:</span>
        <div class="select">
          <select name="erabbit" :value="item.active" @change="setVersion">
            <option :value="ver" v-for="ver in item.published" :key="ver">
              {{ ver }}
            </option>
          </select>
        </div>
      </label>
      <Share @click="onCopy" />
      <Moon v-if="isDark" @click="isDark = false" />
      <Sun v-else @click="isDark = true" />
      <Github @click="onGithub" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  h1 {
    display: none;
  }
}
.dark .playground-header {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #1a1a1a;
  border-color: #383838;
  color: #aaa;
  .settings {
    .dep {
      .select {
        border-color: #383838;
      }
      select {
        background-color: #1a1a1a;
      }
    }
    svg {
      color: #aaa;
    }
  }
}
.playground-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  color: #333;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    h1 {
      margin: 0;
      padding: 0;
      font-size: 18px;
      padding-left: 10px;
      font-weight: normal;
    }
  }
  .settings {
    display: flex;
    align-items: center;
    color: #666;
    .dep {
      font-size: 14px;
      display: flex;
      margin-left: 15px;
      align-items: center;
      color: #999;
      .text {
        padding-right: 5px;
      }
      .select {
        border: 1px solid #e4e4e4;
      }
      select {
        user-select: none;
        border: none;
        color: #999;
        width: 100px;
        outline: none;
        padding: 2px 0;
        font-size: 12px;
      }
    }
    svg {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
