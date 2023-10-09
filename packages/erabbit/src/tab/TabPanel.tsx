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
import { ref } from 'vue'
import { nextTick } from 'vue'
import { computed } from 'vue'
import { createNamespace } from '../utils'
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

const [className] = createNamespace('tab-panel')

export default defineComponent({
  name: 'ErTabPanel',
  props: tabPanelProps,
  setup(props, { slots }) {
    const { addChild, removeChild, children, activeIndex } =
      inject<TabContext>(TabContextKey)!

    const currentInstance = getCurrentInstance()!
    const isMounted = ref(false)
    onMounted(() => {
      addChild({
        uid: currentInstance.uid,
        label: props.label,
        name: props.name,
      })
      nextTick(() => {
        isMounted.value = true
      })
    })
    onUnmounted(() => {
      removeChild(currentInstance.uid)
    })

    const currentIndex = computed(() => {
      return children.value.findIndex(
        (item) => item.uid === currentInstance.uid,
      )
    })

    return () => {
      return (
        <div
          class={[
            className,
            isMounted.value && activeIndex.value === currentIndex.value
              ? 'is-active'
              : undefined,
          ]}
        >
          {slots.default?.()}
        </div>
      )
    }
  },
})
