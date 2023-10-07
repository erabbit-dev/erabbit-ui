<script setup lang="ts">
import PlaygroundHeader from './components/Header.vue'
import { Repl } from '@vue/repl'
import CodeMirror from '@vue/repl/codemirror-editor'
import '@vue/repl/style.css'

import { watchEffect } from 'vue'
import { ErabbitUIStore } from './store'
import { getImportMap } from './utils'

const hash = location.hash.slice(1)

const store = new ErabbitUIStore(
  {
    defaultVueRuntimeURL:
      'https://cdn.jsdelivr.net/npm/@vue/runtime-dom/dist/runtime-dom.esm-browser.js',
  },
  hash,
)

store.setImportMap(getImportMap('latest'))

watchEffect(() => {
  const newHash = store.serialize()
  history.replaceState({}, '', newHash)
})
</script>

<template>
  <PlaygroundHeader :store="store"></PlaygroundHeader>
  <Repl
    :store="store"
    :editor="CodeMirror"
    :show-ts-config="false"
    :show-import-map="false"
  />
</template>

<style lang="scss" scoped>
.vue-repl {
  height: calc(100vh - 45px);
}
</style>
