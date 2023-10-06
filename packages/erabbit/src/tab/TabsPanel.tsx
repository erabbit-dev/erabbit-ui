import {
  defineComponent,
  onMounted,
  onUnmounted,
  inject,
  getCurrentInstance,
} from 'vue'
import { createNamespace } from '../utils'
import { TabsContextKey } from './contants'
import type { TabsContext } from './Tabs'
const tabsPanelProps = {
  label: {
    type: String,
    default: '',
    required: true,
  },
  name: {
    type: [String, Number],
    default: '',
    required: true,
  },
}
export type TabsPanelProps = ExtractPropTypes<typeof tabsPanelProps>
export type TabsPaneInstance = ComponentPublicInstance<TabsPanelProps>

export default defineComponent({
  name: 'ErTabsPanel',
  props: tabsPanelProps,
  setup(props, { slots }) {
    const { addChild, removeChild, children, activeName } =
      inject<TabsContext>(TabsContextKey)
    const currentInstance = getCurrentInstance()
    onMounted(() => {
      addChild({
        uid: currentInstance?.uid,
        label: props.label,
        name: props.name,
      })
    })
    onUnmounted(() => {
      removeChild(currentInstance?.uid)
    })
    const tabsPanelClass = createNamespace('tabs-panel')

    return () => {
      const currentIndex = children.value.findIndex(
        (item) => item.uid === currentInstance?.uid,
      )
      return (
        <div
          class={[
            tabsPanelClass,
            (props.name === activeName.value && props.name) ||
            currentIndex === activeName.value
              ? 'current'
              : '',
          ]}
        >
          {slots.default?.()}
        </div>
      )
    }
  },
})
