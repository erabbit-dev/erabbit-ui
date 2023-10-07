import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import { createNamespace } from '../utils'
import { type IconProps, Icon } from '../icon'

export type ErButtonType =
  | 'default'
  | 'primary'
  | 'plain'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success'

export type ErButtonSize = 'large' | 'small' | 'middle'

const props = {
  type: {
    type: String as PropType<ErButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ErButtonSize>,
    default: 'middle',
  },
  round: Boolean,
  disabled: Boolean,
  icon: String as PropType<IconProps['name']>,
  circle: Boolean,
}

export type ErButtonProps = ExtractPropTypes<typeof props>

const [className, bem] = createNamespace('button')

export default defineComponent({
  name: 'ErButton',

  props,

  setup(props, { slots }) {
    return () => (
      <button
        class={[
          className,
          'ellipsis',
          bem(props.size, props.type),
          props.round ? 'is-round' : undefined,
          props.circle ? 'is-circle' : undefined,
          props.disabled ? bem('disabled') : undefined,
        ]}
        disabled={props.disabled}
      >
        {props.icon && <Icon name={props.icon} class={bem('icon')} />}
        {slots.default?.()}
      </button>
    )
  },
})
