import type { App } from 'vue'
import { Area } from './area'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import { Button } from './button'
import { Carousel, CarouselItem } from './carousel'
import { Checkbox } from './checkbox'
import { Confirm, showConfirm } from './confirm'
import { Icon } from './icon'
import { InputNumber } from './input-number'
import { Step, StepItem } from './step'
import { Tab, TabPanel } from './tab'
import { Sku } from './sku'
import { Message, showLoadingMessage, showMessage } from './message'
import { ImageView } from './image-view'

const components = [
  ImageView,
  Area,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  Confirm,
  Icon,
  InputNumber,
  Step,
  StepItem,
  Tab,
  TabPanel,
  Sku,
  Message,
]

export function installer(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  app.config.globalProperties.$confirm = showConfirm
  app.config.globalProperties.$message = showMessage
  app.config.globalProperties.$loading = showLoadingMessage
}

declare module 'vue' {
  export interface globalProperties {
    $confirm: typeof showConfirm
    $message: typeof showMessage
    $loading: typeof showLoadingMessage
  }
}
