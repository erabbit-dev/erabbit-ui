import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import { createNamespace } from '../utils'

export type ErButtonType = 'default' | 'primary' | 'plain' | 'gray'
export type ErButtonSize = 'large' | 'middle' | 'small' | 'mini'

const props = {
  type: {
    type: String as PropType<ErButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<ErButtonSize>,
    default: 'middle'
  }
}

export type ErButtonProps = ExtractPropTypes<typeof props>

const className = createNamespace('button')

export default defineComponent({
  name: 'ErButton',

  props,

  setup(props, { slots }) {
    return () => (
      <button class={[className, 'ellipsis', props.size, props.type]}>
        {slots.default?.()}
      </button>
    )
  }
})
