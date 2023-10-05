import {
  defineComponent,
  PropType,
  provide,
  getCurrentInstance,
  watchEffect,
  ref,
  onMounted,
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
  emits: ['update:modelValue', 'change'],
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
    const setScrollBorder = (
      event?: MouseEvent,
      selectNode?: HTMLAnchorElement,
    ) => {
      const firstNodeLeft = titleRef.value?.querySelector('a')
      const width =
        event?.target?.offsetWidth ||
        selectNode?.offsetWidth ||
        firstNodeLeft?.offsetWidth
      const relateLeft = firstNodeLeft?.getBoundingClientRect()?.left || 0
      const x =
        event?.target?.getBoundingClientRect()?.left ||
        selectNode?.getBoundingClientRect()?.left ||
        relateLeft
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
      if (titleRef.value) {
        nextTick(() =>
          setScrollBorder(null, titleRef.value?.querySelector('.active')),
        )
      }
    })
    const changeActive = (name: string | number, event: MouseEvent) => {
      emit('update:modelValue', name)
      emit('change', name)
      activeName.value = name
      setScrollBorder(event)
    }
    onMounted(() => {
      if (children.value.length) {
        nextTick(() =>
          setScrollBorder(null, titleRef.value?.querySelector('.active')),
        )
      }
    })

    return () => (
      <div class={[createNamespace('tabs'), props.size]}>
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
