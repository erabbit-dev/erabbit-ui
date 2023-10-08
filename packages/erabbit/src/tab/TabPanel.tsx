import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  type ComponentPublicInstance,
  type ExtractPropTypes,
} from 'vue'
import type { TabContext } from './Tab'
import { TabContextKey } from './constants'
const tabPanelProps = {
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
export type TabPanelProps = ExtractPropTypes<typeof tabPanelProps>
export type TabPaneInstance = ComponentPublicInstance<TabPanelProps>

export default defineComponent({
  name: 'ErTabPanel',
  props: tabPanelProps,
  setup(props, { slots }) {
    const { addChild, removeChild, children, activeName } =
      inject<TabContext>(TabContextKey)!

    const currentInstance = getCurrentInstance()

    onMounted(() => {
      addChild({
        uid: currentInstance!.uid,
        label: props.label,
        name: props.name,
      })
    })
    onUnmounted(() => {
      removeChild(currentInstance!.uid)
    })

    return () => {
      const currentIndex = children.value.findIndex(
        (item) => item.uid === currentInstance?.uid,
      )
      return (
        <div
          class={[
            'er-tabs-panel',
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
