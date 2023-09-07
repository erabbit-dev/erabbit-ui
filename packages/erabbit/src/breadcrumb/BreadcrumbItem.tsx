import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted
} from 'vue'
import type { Router } from 'vue-router'
import type { CarouselContext } from './Breadcrumb'
import { BreadcrumbContextKey } from './constants'
import type { ExtractPropTypes } from 'vue'
import { createNamespace } from '../utils'

const breadcrumbItemProps = {
  to: {
    type: [String, Object],
    default: ''
  },
  replace: {
    type: Boolean,
    default: false
  }
}

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>

const [className, bem] = createNamespace('breadcrumb-item')

export default defineComponent({
  name: 'ErBreadcrumbItem',
  props: breadcrumbItemProps,
  setup(props, { slots }) {
    const {
      items,
      addItem,
      removeItem,
      props: parentProps
    } = inject<CarouselContext>(BreadcrumbContextKey)!

    const instance = getCurrentInstance()!

    const selfIndex = computed(() =>
      items.value.findIndex((item) => item.uid === instance?.uid)
    )

    onMounted(() => {
      addItem({
        uid: instance.uid
      })
    })

    onUnmounted(() => {
      removeItem(instance.uid)
    })

    const router = instance.appContext.config.globalProperties.$router as Router

    const onClick = () => {
      if (!props.to || !router) return
      props.replace ? router.replace(props.to) : router.push(props.to)
    }

    const renderItemContent = () => {
      if (props.to) {
        return (
          <a href="javascript:;" onClick={onClick}>
            {slots.default?.()}
          </a>
        )
      }
      return <span>{slots.default?.()}</span>
    }

    const renderItemSeparator = () => {
      if (selfIndex.value < items.value.length - 1) {
        return <i class={bem('__separator')}>{parentProps.separator}</i>
      }
    }

    return () => (
      <div class={className}>
        {renderItemContent()}
        {renderItemSeparator()}
      </div>
    )
  }
})
