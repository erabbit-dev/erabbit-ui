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
export type ShowType = 'card' | 'border-card' | 'default'
export type PositionType = 'left' | 'top' | 'right' | 'bottom'
const tabsProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'default',
  },
  type: {
    type: String as PropType<ShowType>,
    default: 'default',
  },
  tabPosition: {
    type: String as PropType<PositionType>,
    default: 'top',
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
  emits: ['update:modelValue', 'tab-click'],
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
      if (props.tabPosition === 'left' || props.tabPosition === 'right') {
        const firstNodeLeft = titleRef.value?.querySelector('a')
        const height =
          event?.target?.offsetHeight ||
          selectNode?.offsetHeight ||
          firstNodeLeft?.offsetHeight
        const relateTop = firstNodeLeft?.getBoundingClientRect()?.top || 0
        const x =
          event?.target?.getBoundingClientRect()?.top ||
          selectNode?.getBoundingClientRect()?.top ||
          relateTop
        scrollStyle.value = `height: ${height}px; transform: translateY(${
          x - relateTop
        }px)`
      } else {
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
      emit('tab-click', name)
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
      <div
        class={[
          createNamespace('tabs'),
          props.size,
          props.type,
          props.tabPosition,
        ]}
      >
        <div class={[createNamespace('tabs-title'), props.type]} ref={titleRef}>
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
        <div class={[createNamespace('tabs-container'), props.type]}>
          {slots.default?.()}
        </div>
      </div>
    )
  },
})
