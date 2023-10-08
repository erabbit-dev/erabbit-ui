import {
  defineComponent,
  PropType,
  provide,
  getCurrentInstance,
  watchEffect,
  ref,
  onMounted,
  nextTick,
  type Ref,
  type ExtractPropTypes,
  type ComponentPublicInstance,
} from 'vue'
import { useChildren } from '../composables'
import { createNamespace } from '../utils'
import { TabContextKey } from './constants'

export type SizeType = 'mini' | 'small' | 'default'
export type ShowType = 'card' | 'border-card' | 'default'
export type PositionType = 'left' | 'top' | 'right' | 'bottom'
export type Children = {
  uid: number
  label: string
  name: string | number
}
export type TabContext = {
  children: Ref<Children[]>
  addChild: (item: Children) => void
  removeChild: (uid: number) => void
  activeName: Ref<string | number>
}

const tabProps = {
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
export type TabProps = ExtractPropTypes<typeof tabProps>
export type TabInstance = ComponentPublicInstance<TabProps>

export default defineComponent({
  name: 'ErTabs',
  props: tabProps,
  emits: ['update:modelValue', 'tab-click'],
  setup(props, { slots, emit }) {
    const { children, addChild, removeChild } = useChildren<Children>(
      getCurrentInstance()!,
      'ErTabPanel',
    )
    const activeName = ref<number | string>('')
    const scrollStyle = ref('')
    const titleRef = ref<HTMLElement>(null)

    provide(TabContextKey, {
      children,
      addChild,
      removeChild,
      activeName,
    })
    const setScrollBorder = (
      event?: MouseEvent,
      selectNode?: HTMLAnchorElement,
    ) => {
      const target = event?.target as HTMLAnchorElement
      if (props.tabPosition === 'left' || props.tabPosition === 'right') {
        const firstNodeLeft = titleRef.value?.querySelector('a')
        const height =
          target?.offsetHeight ||
          selectNode?.offsetHeight ||
          firstNodeLeft?.offsetHeight
        const relateTop = firstNodeLeft?.getBoundingClientRect()?.top || 0
        const x =
          target?.getBoundingClientRect()?.top ||
          selectNode?.getBoundingClientRect()?.top ||
          relateTop
        scrollStyle.value = `height: ${height}px; transform: translateY(${
          x - relateTop
        }px)`
      } else {
        const firstNodeLeft = titleRef.value?.querySelector('a')
        const width =
          target?.offsetWidth ||
          selectNode?.offsetWidth ||
          firstNodeLeft?.offsetWidth
        const relateLeft = firstNodeLeft?.getBoundingClientRect()?.left || 0
        const x =
          target?.getBoundingClientRect()?.left ||
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
      <div class={['er-tabs', props.size, props.type, props.tabPosition]}>
        <div class={['er-tabs-title', props.type]} ref={titleRef}>
          <div class={'er-tabs-select-scroll'} style={scrollStyle.value}></div>
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
        <div class={['er-tabs-container', props.type]}>{slots.default?.()}</div>
      </div>
    )
  },
})
