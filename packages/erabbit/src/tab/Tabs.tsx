import {
  defineComponent,
  PropType,
  provide,
  getCurrentInstance,
  watchEffect,
  ref,
  nextTick,
} from 'vue'
import { useChildren } from '../composables'
import { createNamespace } from '../utils'
import { TabsContextKey } from './contants'

export type SizeType = 'mini' | 'small' | 'default'

const tabsProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'default',
  },
}
export type TabsContext = {
  children: Ref<Array<{ uid: number }>>
  addChild: (item: { uid: number }) => void
  removeChild: (uid: number) => void
  activeName: string | number
}
export type TabsProps = ExtractPropTypes<typeof tabsProps>

export default defineComponent({
  name: 'ErTabs',
  props: tabsProps,
  setup(props, { slots, emit }) {
    const { children, addChild, removeChild } = useChildren(
      getCurrentInstance()!,
      'ErTabsPanel',
    )
    const activeName = ref<number | string>('')
    const scrollStyle = ref('')
    const titleRef = ref<HTMLElement>(null)

    provide(TabsContextKey, {
      children,
      addChild,
      removeChild,
      activeName,
    })
    const setScrollBorder = (event?: MouseEvent) => {
      const firstNodeLeft = titleRef.value?.querySelector('a')
      const width = event?.target?.offsetWidth || firstNodeLeft?.offsetWidth
      const relateLeft = firstNodeLeft?.getBoundingClientRect()?.left || 0
      const x = event?.target?.getBoundingClientRect()?.left || relateLeft
      scrollStyle.value = `width: ${width}px; transform: translateX(${
        x - relateLeft
      }px)`
    }
    watchEffect(() => {
      if (props.modelValue || props.modelValue === 0) {
        activeName.value = props.modelValue
      } else {
        activeName.value = 0
      }
      nextTick(() => setScrollBorder())
    })
    const changeActive = (name: string | number, event: MouseEvent) => {
      emit('update:modelValue', name)
      activeName.value = name
      setScrollBorder(event)
    }

    const [tabsClassName] = createNamespace('tabs')
    return () => (
      <div class={[tabsClassName]}>
        <div class={createNamespace('tabs-title')} ref={titleRef}>
          <div
            class={createNamespace('tabs-select-scroll')}
            style={scrollStyle.value}
          ></div>
          {children.value.map((item, index) => (
            <a
              onClick={(event) => changeActive(item.name || index, event)}
              class={{
                active:
                  (item.name === activeName.value && item.name) ||
                  index === activeName.value,
              }}
              key={index}
              href="javascript:;"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div class={createNamespace('tabs-container')}>{slots.default?.()}</div>
      </div>
    )
  },
})
