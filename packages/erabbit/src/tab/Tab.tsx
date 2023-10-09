import type { CSSProperties, ComputedRef } from 'vue'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onUnmounted,
  provide,
  ref,
  watch,
  type ComponentPublicInstance,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from 'vue'
import { useChildren } from '../composables'
import { createNamespace } from '../utils'
import { TabContextKey } from './constants'

export type TabSizeType = 'small' | 'default' | 'large'
export type TabShowType = 'card' | 'border-card' | ''
export type TabPositionType = 'left' | 'top' | 'right' | 'bottom'
export type Children = {
  uid: number
  label: string
  name: string | number
}
export type TabContext = {
  children: Ref<Children[]>
  addChild: (item: Children) => void
  removeChild: (uid: number) => void
  activeIndex: ComputedRef<number>
}

const tabProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  size: {
    type: String as PropType<TabSizeType>,
    default: 'default',
  },
  type: {
    type: String as PropType<TabShowType>,
    default: '',
  },
  tabPosition: {
    type: String as PropType<TabPositionType>,
    default: 'top',
  },
}
export type TabProps = ExtractPropTypes<typeof tabProps>
export type TabInstance = ComponentPublicInstance<TabProps>

const [className, bem] = createNamespace('tab')

export default defineComponent({
  name: 'ErTab',
  props: tabProps,
  emits: ['update:modelValue', 'tab-click'],
  setup(props, { slots, emit }) {
    const { children, addChild, removeChild } = useChildren<Children>(
      getCurrentInstance()!,
      'ErTabPanel',
    )

    const activeName = ref<number | string>(props.modelValue)
    const activeIndex = computed(() => {
      let index = 0
      if (activeName.value || activeName.value === 0) {
        index = children.value.findIndex(
          (item) => item.name === activeName.value,
        )
      }
      return index
    })

    const onClickTab = (item: Children, index: number) => {
      emit('tab-click', item, index)
      if (index === activeIndex.value) return
      activeName.value = item.name || index
      emit('update:modelValue', activeName.value)
    }

    // set line position
    const tabItemRefs = ref<HTMLAnchorElement[]>([])
    const tabHeadRef = ref<HTMLDivElement>()
    const lineStyle = ref<CSSProperties>({})
    watch(
      [() => props.tabPosition, () => props.size, activeIndex],
      async (newVal, oldVal) => {
        await nextTick()
        const style: CSSProperties = {}
        const currentItem = tabItemRefs.value[activeIndex.value]
        if (currentItem && tabHeadRef.value) {
          const { width, height, left, top } =
            currentItem.getBoundingClientRect()
          const { left: originLeft, top: originTop } =
            tabHeadRef.value.getBoundingClientRect()
          if (props.tabPosition === 'left' || props.tabPosition === 'right') {
            style.height = `${height}px`
            style.transform = `translateY(${top - originTop}px)`
          } else {
            style.width = `${width}px`
            style.transform = `translateX(${left - originLeft}px)`
          }
          if (newVal[0] !== oldVal[0]) {
            style['transition-duration'] = `0s`
          } else {
            style['transition-duration'] = `0.3s`
          }
        }
        lineStyle.value = style
      },
      { immediate: true },
    )
    onUnmounted(() => {
      tabItemRefs.value = []
    })

    provide(TabContextKey, {
      children,
      addChild,
      removeChild,
      activeIndex,
    })

    return () => (
      <div class={[className, bem(props.size, props.tabPosition, props.type)]}>
        <div class={bem('__header')} ref={tabHeadRef}>
          <div class={bem('__line')} style={lineStyle.value}></div>
          {children.value.map((item, index) => (
            <a
              onClick={() => onClickTab(item, index)}
              class={{
                [bem('__item')]: true,
                'is-active': activeIndex.value === index,
              }}
              key={index}
              ref={(el) => tabItemRefs.value.push(el as HTMLAnchorElement)}
              href="javascript:;"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div class={bem('__content')}>{slots.default?.()}</div>
      </div>
    )
  },
})
