import type { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue'
import {
  defineComponent,
  getCurrentInstance,
  onUnmounted,
  provide,
  ref,
  watch,
} from 'vue'
import { useChildren } from '../composables'

import { Icon } from '../icon'

import { CarouselContextKey } from './constants'
import { onMounted } from 'vue'
import { computed } from 'vue'

type Item = { uid: number; height?: number }
export type CarouselContext = {
  index: Ref<number>
  items: Ref<Item[]>
  addItem: (item: Item) => void
  removeItem: (uid: number) => void
}

const carouselProps = {
  duration: {
    type: Number,
    default: 3000,
  },
  autoPlay: {
    type: Boolean,
    default: true,
  },
  height: {
    type: String,
    default: 'auto',
  },
}

export type CarouselProps = ExtractPropTypes<typeof carouselProps>

export type CarouselExpose = {
  prev: () => void
  next: () => void
  setActiveItem: (index: number) => void
}

export type CarouselInstance = ComponentPublicInstance<
  CarouselProps,
  CarouselExpose
>

export default defineComponent({
  name: 'ErCarousel',

  props: carouselProps,

  emits: ['change'],

  setup(props, { slots, emit, expose }) {
    const {
      children: items,
      addChild: addItem,
      removeChild: removeItem,
    } = useChildren(getCurrentInstance()!, 'ErCarouselItem')

    const index = ref(0)

    provide(CarouselContextKey, {
      items,
      addItem,
      removeItem,
      index,
    })

    let timer: ReturnType<typeof setInterval>
    const play = () => {
      if (timer) clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if (index.value >= items.value.length) {
          index.value = 0
        }
      }, props.duration)
    }
    const pause = () => {
      if (timer) clearInterval(timer)
    }

    watch(items, () => onStart())

    onMounted(() => onStart())

    const onToggle = (newIndex: number) => {
      if (newIndex > items.value.length - 1) {
        index.value = 0
        return
      }
      if (newIndex < 0) {
        index.value = items.value.length - 1
        return
      }
      index.value = newIndex

      emit('change', index.value)
    }

    const onStop = () => pause()

    const onStart = () => {
      if (items.value.length === 0) return
      if (!props.autoPlay) return

      play()
    }

    onUnmounted(() => pause())

    const exposeContext: CarouselExpose = {
      prev: () => {
        onToggle(index.value - 1)
      },
      next: () => {
        onToggle(index.value + 1)
      },
      setActiveItem: (index: number) => {
        onToggle(index)
      },
    }

    const height = computed(() => {
      // @ts-ignore
      return Math.max(...items.value.map((item) => item.height))
    })

    expose(exposeContext)

    return () => (
      <div class="er-carousel" onMouseenter={onStop} onMouseleave={onStart}>
        <div
          class="carousel-body"
          style={{
            height:
              props.height === 'auto' ? height.value + 'px' : props.height,
          }}
        >
          {slots.default?.()}
        </div>
        <a
          onClick={() => onToggle(index.value - 1)}
          href="javascript:;"
          class="carousel-btn prev"
        >
          <Icon name="angle-left" color="#fff" size="18px" />
        </a>
        <a
          onClick={() => onToggle(index.value + 1)}
          href="javascript:;"
          class="carousel-btn next"
        >
          <Icon name="angle-right" color="#fff" size="18px" />
        </a>
        <div class="carousel-indicator">
          {items.value.map((item, i) => (
            <span
              onClick={() => onToggle(i)}
              key={i}
              class={{ active: index.value === i }}
            ></span>
          ))}
        </div>
      </div>
    )
  },
})
