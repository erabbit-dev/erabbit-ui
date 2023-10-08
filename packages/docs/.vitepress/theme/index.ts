// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

import ErabbitUI from 'erabbit'
import 'erabbit/dist/erabbit.min.css'

import './style.scss'
import IconCollection from './components/IconCollection.vue'

import CodePreview from './components/CodePreview.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://jsjdt6pb4w.us.aircode.run/ask',
      }),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ErabbitUI)
    
    app.component(IconCollection.name, IconCollection)
    app.component(CodePreview.name, CodePreview)
  }
}
