/// <reference types="vite/client" />

import { type StoreOptions, File, ReplStore, compileFile } from '@vue/repl'
import { ref, computed } from 'vue'
import { getImportMap } from './utils'

const appFileCode = `
  <script setup lang="ts">
  import { ref } from 'vue'

  const msg = ref('Hello World!')
  </script>

  <template>
    <input v-model="msg" />
    <h1>{{ msg }}</h1>
    <div>Erabbit UI <er-button type="plain">按钮</er-button></div>
  </template>
  `
const mainFileCode = `
  <script setup>
  import App from './App.vue'
  import { setupErabbitUI } from './erabbit-ui.js'

  setupErabbitUI()
  </script>

  <template>
    <App />
  </template>
  `
const erabbitUIFileCode = `
  import { getCurrentInstance } from 'vue'
  import ErabbitUI from 'erabbit'

  let installed = false
  await loadStyle()

  export function setupErabbitUI() {
    if (installed) return
    const instance = getCurrentInstance()
    instance.appContext.app.use(ErabbitUI)
    installed = true
  }

  export function loadStyle() {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '#STYLE#'
      link.addEventListener('load', resolve)
      link.addEventListener('error', reject)
      document.body.append(link)
    })
  }
  `

const style = ref(
  'https://cdn.jsdelivr.net/npm/erabbit@latest/dist/erabbit.min.css',
)

const APP_FILE = 'src/App.vue'
const MAIN_FILE = 'src/Main.vue'
const INSTALL_FILE = 'src/erabbit-ui.js'
const IMPORT_MAP_FILE = 'import-map.json'
const TSCONFIG_FILE = 'tsconfig.json'

const installCode = computed(() =>
  erabbitUIFileCode.replace('#STYLE#', style.value),
)

const utoa = (data: string) => {
  return btoa(unescape(encodeURIComponent(data)))
}

const atou = (b64: string) => {
  return decodeURIComponent(escape(atob(b64)))
}

const filterFiles = [IMPORT_MAP_FILE, MAIN_FILE, INSTALL_FILE]

export class ErabbitUIStore extends ReplStore {
  constructor(storeOptions?: StoreOptions, hash?: string) {
    super(storeOptions)
    if (hash) {
      const saved = JSON.parse(atou(hash))
      for (const filename in saved) {
        const newName = filename.startsWith('src/')
          ? filename
          : `src/${filename}`
        if (!filterFiles.includes(newName)) {
          this.addFile(new File(newName, saved[filename]))
        }
      }
    } else {
      const app = new File(APP_FILE, appFileCode, false)
      this.addFile(app)
    }

    const container = new File(MAIN_FILE, mainFileCode, true)
    this.addFile(container)

    const install = new File(INSTALL_FILE, installCode.value, true)
    this.addFile(install)

    this.state.mainFile = MAIN_FILE
    this.setActive(APP_FILE)
  }

  serialize() {
    const files = this.getFiles()
    delete files[IMPORT_MAP_FILE]
    delete files[TSCONFIG_FILE]
    delete files[MAIN_FILE.replace('src/', '')]
    delete files[INSTALL_FILE.replace('src/', '')]
    return '#' + utoa(JSON.stringify(files))
  }

  setErabbitUIVersion(v: string) {
    style.value = `https://cdn.jsdelivr.net/npm/erabbit@${v}/dist/erabbit.min.css`

    const install = new File(INSTALL_FILE, installCode.value, true)
    this.addFile(install)

    compileFile(this, install).then((errs) => this.state.errors.push(...errs))

    this.setImportMap(getImportMap(v))
  }
}
