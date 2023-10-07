/// <reference types="vite/client" />

import { type StoreOptions, File, ReplStore, compileFile } from '@vue/repl'
import { ref, computed } from 'vue'

import appFileCode from './template/App.vue?raw'
import mainFileCode from './template/Main.vue?raw'
import erabbitUIFileCode from './template/erabbit-ui.js?raw'

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

    this.setImportMap({
      imports: {
        erabbit: `https://cdn.jsdelivr.net/npm/erabbit@${v}/+esm`,
      },
    })
  }
}
