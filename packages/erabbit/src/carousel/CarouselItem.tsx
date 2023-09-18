import { defineComponent } from 'vue'
import { CarouselContextKey } from './constants'
import { inject } from 'vue'
import { onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { onUnmounted } from 'vue'
import { computed } from 'vue'
import type { CarouselContext } from './Carousel'
import { ref } from 'vue'

export default defineComponent({
  name: 'ErCarouselItem',
  setup(props, { slots }) {
    const { index, items, addItem, removeItem } =
      inject<CarouselContext>(CarouselContextKey)!

    const instance = getCurrentInstance()
    const selfIndex = computed(() =>
      items.value.findIndex((item) => item.uid === instance?.uid)
    )

    const rootRef = ref<HTMLDivElement>()
    onMounted(() => {
      addItem({
        uid: instance!.uid,
        height: rootRef.value?.offsetHeight
      })
    })

    onUnmounted(() => {
      removeItem(instance!.uid)
    })

    return () => (
      <div
        class={{
          'carousel-item': true,
          fade: index.value === selfIndex.value
        }}
        ref={rootRef}
      >
        {slots.default?.()}
      </div>
    )
  }
})
