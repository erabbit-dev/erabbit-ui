import { defineComponent, getCurrentInstance, provide } from 'vue'
import { useChildren } from '../composables'
import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  Ref,
} from 'vue'
import { StepContextKey } from './constants'
import { createNamespace } from '../utils'
export type ModeType = 'horizontal' | 'vertical'
export type SizeType = 'mini' | 'small' | 'default'
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
export type StepContext = {
  children: Ref<Array<{ uid: number }>>
  addChild: (item: { uid: number }) => void
  removeChild: (uid: number) => void
  parentProps: StepProps
}

export type StepProps = ExtractPropTypes<typeof stepProps>
export type StepInstance = ComponentPublicInstance<StepProps, StepExpose>
const [stepClassName] = createNamespace('steps')
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
    expose({
      getActiveIndex: () => props.activeIndex,
    })
    return () => (
      <div class={[stepClassName, props.size, props.mode]}>
        {slots.default?.()}
      </div>
    )
  },
})
