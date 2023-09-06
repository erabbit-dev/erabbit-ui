import type { ComponentPublicInstance, ExtractPropTypes, Ref } from 'vue'
import {
  defineComponent,
  getCurrentInstance,
  onUnmounted,
  provide,
  ref,
  watch
} from 'vue'
import { useChildren } from '../composables'
import { CarouselContextKey } from './constants'
import { onMounted } from 'vue'

export type CarouselContext = {
  index: Ref<number>
  items: Ref<{ uid: number }[]>
  addItem: (item: { uid: number }) => void
  removeItem: (uid: number) => void
}

const carouselProps = {
  duration: {
    type: Number,
    default: 3000
  },
  autoPlay: {
    type: Boolean,
    default: true
  },
  height: {
    type: String,
    default: '300px'
  }
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
      removeChild: removeItem
    } = useChildren(getCurrentInstance()!, 'ErCarouselItem')

    const index = ref(0)

    provide(CarouselContextKey, {
      items,
      addItem,
      removeItem,
      index
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

    watch(items, () => {
      play()
    })

    onMounted(() => {
      if (items.value.length === 0) return
      if (!props.autoPlay) return

      play()
    })

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
      }
    }

    expose(exposeContext)

    return () => (
      <div
        class="er-carousel"
        onMouseenter={onStop}
        onMouseleave={onStart}
        style={{ height: props.height }}
      >
        <div class="carousel-body">{slots.default?.()}</div>
        <a
          onClick={() => onToggle(index.value - 1)}
          href="javascript:;"
          class="carousel-btn prev"
        >
          <i class="iconfont icon-angle-left">&lt;</i>
        </a>
        <a
          onClick={() => onToggle(index.value + 1)}
          href="javascript:;"
          class="carousel-btn next"
        >
          <i class="iconfont icon-angle-right">&gt;</i>
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
  }
})
