import type { App } from 'vue'
import { Area } from './area'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import { Button } from './button'
import { Carousel, CarouselItem } from './carousel'
import { Checkbox } from './checkbox'
import { Confirm, showConfirm } from './confirm'
import { Icon } from './icon'
import { Step, StepItem } from './step'
import { Tab, TabPanel } from './tab'

const components = [
  Area,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  Confirm,
  Icon,
  Step,
  StepItem,
  Tab,
  TabPanel,
]

export function installer(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  app.config.globalProperties.$confirm = showConfirm
}

declare module 'vue' {
  export interface globalProperties {
    $confirm: typeof showConfirm
  }
}
