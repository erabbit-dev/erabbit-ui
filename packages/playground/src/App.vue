<script setup lang="ts">
import { Repl } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import '@vue/repl/style.css'
import PlaygroundHeader from './components/Header.vue'

import { reactive, ref, watch, watchEffect } from 'vue'
import { ErabbitUIStore } from './store'
import { getSupportedErabbitUIVersions } from './utils'

const hash = location.hash.slice(1)

const store = new ErabbitUIStore(
  {
    defaultVueRuntimeURL:
      'https://cdn.jsdelivr.net/npm/@vue/runtime-dom/dist/runtime-dom.esm-browser.js',
  },
  hash,
)

watchEffect(() => {
  const newHash = store.serialize()
  history.replaceState({}, '', newHash)
})

const versions = reactive({
  erabbitUI: {
    published: [] as string[],
    text: 'ErabbitUI',
    active: '',
  },
})

const list = getSupportedErabbitUIVersions()
const loading = ref(true)
watch(list, () => {
  if (list.value.length) {
    versions.erabbitUI.active = list.value[0]
    versions.erabbitUI.published = [...list.value]
    store.setErabbitUIVersion(versions.erabbitUI.active)
    loading.value = false
  }
})

const setVersion = (e: Event) => {
  const v = (e.target as HTMLSelectElement).value
  versions.erabbitUI.active = v
  store.setErabbitUIVersion(v)
}
</script>

<template>
  <PlaygroundHeader
    :store="store"
    :versions="versions"
    :set-version="setVersion"
  ></PlaygroundHeader>
  <div v-if="loading" class="loading">loading...</div>
  <Repl
    :store="store"
    :editor="CodeMirror"
    :show-ts-config="false"
    :show-import-map="false"
    v-else
  />
</template>

<style lang="scss" scoped>
.vue-repl,
.loading {
  height: calc(100vh - 45px);
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
