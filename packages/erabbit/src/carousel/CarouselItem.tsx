import { defineComponent } from 'vue'
import { carouselContextKey } from './constants'
import { inject } from 'vue'
import { onMounted } from 'vue'
import { getCurrentInstance } from 'vue'
import { onUnmounted } from 'vue'
import { computed } from 'vue'

export default defineComponent({
  name: 'ErCarouselItem',
  setup(props, { slots }) {
    const { index, items, addItem, removeItem } = inject<{}>(carouselContextKey)

    const instance = getCurrentInstance()
    const selfIndex = computed(() =>
      items.value.findIndex((item) => item.uid === instance?.uid)
    )

    onMounted(() => {
      addItem({
        uid: instance?.uid
      })
    })

    onUnmounted(() => {
      removeItem(instance?.uid)
    })

    return () => (
      <div
        class={{
          'carousel-item': true,
          fade: index.value === selfIndex.value
        }}
      >
        {slots.default?.()}
      </div>
    )
  }
})
