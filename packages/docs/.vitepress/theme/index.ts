// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'


import { Button, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem, Checkbox, Area , Icon} from 'erabbit'
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
    // ...
    app.component(Button.name, Button)
    app.component(Carousel.name, Carousel)
    app.component(CarouselItem.name, CarouselItem)
    app.component(Breadcrumb.name, Breadcrumb)
    app.component(BreadcrumbItem.name, BreadcrumbItem)
    app.component(Checkbox.name, Checkbox)
    app.component(Area.name, Area)
    app.component(Icon.name, Icon)
    
    app.component(IconCollection.name, IconCollection)
  }
}
