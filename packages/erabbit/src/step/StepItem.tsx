import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  type ExtractPropTypes,
} from 'vue'

import type { StepContext } from './Step'

import { createNamespace } from '../utils'
import { StepContextKey } from './constants'

const stepProps = {
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
}
export type StepItemProps = ExtractPropTypes<typeof stepProps>

const [className, bem] = createNamespace('step-item')

export default defineComponent({
  name: 'ErStepItem',
  props: stepProps,
  setup(props, { slots }) {
    const { children, addChild, removeChild, parentProps } =
      inject<StepContext>(StepContextKey)!

    const uid = getCurrentInstance()!.uid

    onMounted(() => {
      addChild({ uid })
    })
    onUnmounted(() => {
      removeChild(uid)
    })

    const currentIndex = computed(() => {
      return children.value.findIndex((item) => item.uid === uid)
    })

    return () => (
      <div
        class={[
          className,
          currentIndex.value <= parentProps.activeIndex ? bem('active') : '',
        ]}
      >
        <div class={[bem('__head')]}>
          <div class={bem('__box')}>
            {slots.icon ? slots.icon() : currentIndex.value + 1}
          </div>
        </div>
        <div class={bem('__text')}>
          <div class={bem('__title')}>{props.title}</div>
          <div class={bem('__desc')}>{props.desc}</div>
        </div>
      </div>
    )
  },
})
