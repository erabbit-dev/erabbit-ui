// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'

import ErabbitUI from 'erabbit'
import 'erabbit/dist/erabbit.min.css'

import './style.scss'
import IconCollection from './components/IconCollection.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ErabbitUI)
    
    app.component(IconCollection.name, IconCollection)
  }
}
