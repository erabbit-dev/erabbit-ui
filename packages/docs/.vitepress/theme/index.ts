// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'


import { Button, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem } from 'erabbit'
import 'erabbit/dist/erabbit-ui.min.css'
import './style.css'

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
  }
}
