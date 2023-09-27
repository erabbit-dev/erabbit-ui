import {
  defineComponent,
  getCurrentInstance,
  onUnmounted,
  provide,
  ref,
  watch
} from 'vue'
import { useChildren } from '../composables'
import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  Ref
} from 'vue'
import { StepContextKey } from './constants'

export type ModeType = 'horizontal' | 'vertical'
export type SizeType = 'mini' | 'small' | 'medium'
const stepProps = {
  size: {
    type: Number,
    default: 48
  },
  mode: {
    type: String as PropType<ModeType>,
    default: 'horizontal'
  },
  activeIndex: {
    type: Number,
    default: -1
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'medium'
  }
}
export type StepExpose = {
  click: (index: number) => void
  getActiveIndex: () => number
}
export type StepContext = {
  children: Ref<Array<{ uid: number }>>
  addChild: (item: { uid: number }) => void
  removeChild: (uid: number) => void
  mode: ModeType
  size: number
}

export type StepProps = ExtractPropTypes<typeof stepProps>
export type StepInstance = ComponentPublicInstance<StepProps, StepExpose>

export default defineComponent({
  name: 'ErStep',
  props: stepProps,
  setup(props, { slots }) {
    const { children, addChild, removeChild } = useChildren(
      getCurrentInstance()!,
      'ErStepItem'
    )
    provide(StepContextKey, {
      children,
      addChild,
      removeChild,
      activeIndex: props.activeIndex,
      mode: props.mode,
      size: props.size
    })
    return () => (
      <div
        class={{
          'er-steps': true,
          vertical: props.mode === 'vertical',
          mini: props.size === 'mini',
          small: props.size === 'small',
          medium: props.size === 'medium'
        }}
      >
        {slots.default?.()}
      </div>
    )
  }
})
