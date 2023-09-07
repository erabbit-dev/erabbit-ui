import type { Ref, ExtractPropTypes } from 'vue'
import { defineComponent, getCurrentInstance, provide } from 'vue'
import { useChildren } from '../composables'
import { BreadcrumbContextKey } from './constants'

const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  }
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export type CarouselContext = {
  items: Ref<{ uid: number }[]>
  addItem: (item: { uid: number }) => void
  removeItem: (uid: number) => void
  props: BreadcrumbProps
}

export default defineComponent({
  name: 'ErBreadcrumb',
  props: breadcrumbProps,
  setup(props, { slots }) {
    const {
      children: items,
      addChild: addItem,
      removeChild: removeItem
    } = useChildren(getCurrentInstance()!, 'ErBreadcrumbItem')

    provide(BreadcrumbContextKey, {
      items,
      addItem,
      removeItem,
      props
    })

    return () => <div class="er-breadcrumb">{slots.default?.()}</div>
  }
})
