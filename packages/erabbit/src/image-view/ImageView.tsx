import { defineComponent } from 'vue'
import { createNamespace } from '../utils'

const [className, bem] = createNamespace('image-view')

export default defineComponent({
  name: 'ErImageView',
  setup() {
    return () => (
      <div class={className}>
        <div class={bem('__wrapper')}>image-view</div>
      </div>
    )
  },
})
