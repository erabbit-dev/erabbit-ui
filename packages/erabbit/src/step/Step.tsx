import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  Ref,
} from 'vue'
import { defineComponent, getCurrentInstance, provide } from 'vue'

import { useChildren } from '../composables'
import { createNamespace } from '../utils'
import { StepContextKey } from './constants'

export type ModeType = 'horizontal' | 'vertical'
export type SizeType = 'large' | 'default' | 'small'

export type StepContext = {
  children: Ref<Array<{ uid: number }>>
  addChild: (item: { uid: number }) => void
  removeChild: (uid: number) => void
  parentProps: StepProps
}

const stepProps = {
  mode: {
    type: String as PropType<ModeType>,
    default: 'horizontal',
  },
  activeIndex: {
    type: Number,
    default: -1,
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'default',
  },
}

export type StepExpose = {
  getActiveIndex: () => number
}

export type StepProps = ExtractPropTypes<typeof stepProps>
export type StepInstance = ComponentPublicInstance<StepProps, StepExpose>

const [className, bem] = createNamespace('step')

export default defineComponent({
  name: 'ErStep',
  props: stepProps,
  setup(props, { slots, expose }) {
    const { children, addChild, removeChild } = useChildren(
      getCurrentInstance()!,
      'ErStepItem',
    )
    provide(StepContextKey, {
      children,
      addChild,
      removeChild,
      parentProps: props,
    })

    const stepExpose: StepExpose = {
      getActiveIndex: () => props.activeIndex,
    }
    expose(stepExpose)

    return () => (
      <div
        class={[
          className,
          bem(props.size),
          props.mode === 'vertical' ? 'is-vertical' : '',
        ]}
      >
        {slots.default?.()}
      </div>
    )
  },
})
