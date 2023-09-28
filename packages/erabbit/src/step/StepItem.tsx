import {
  defineComponent,
  getCurrentInstance,
  onUnmounted,
  onMounted,
  computed,
  inject
} from 'vue'
import { StepContextKey } from './constants'
import type { StepContext } from './Step'
import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'
import { createNamespace } from '../utils'

const stepProps = {
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  }
}
export type StepItemProps = ExtractPropTypes<typeof stepProps>

export type StepItemInstance = ComponentPublicInstance<StepItemProps>
const [stepItemClassName] = createNamespace('steps-item')
export default defineComponent({
  name: 'ErStepItem',
  props: stepProps,
  setup(props) {
    const { children, addChild, removeChild, parentProps } =
      inject<StepContext>(StepContextKey)
    const uid = getCurrentInstance()?.uid
    const currentIndex = computed(() => {
      return children.value.findIndex((item) => item.uid === uid)
    })

    onMounted(() => {
      // add a child to Step parent
      addChild({ uid })
    })
    onUnmounted(() => {
      removeChild(uid)
    })
    return () => (
      <div
        class={[
          stepItemClassName,
          currentIndex.value <= parentProps.activeIndex ? 'active' : ''
        ]}
      >
        <div class="step">
          <span>{currentIndex.value + 1}</span>
        </div>
        {parentProps.mode === 'vertical' ? (
          <div class="vertical-main">
            <div class="title">{props.title}</div>
            <div class="desc">{props.desc}</div>
          </div>
        ) : (
          <>
            <div class="title">{props.title}</div>
            <div class="desc">{props.desc}</div>
          </>
        )}
      </div>
    )
  }
})
