import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import { createNamespace } from '../utils'
import { type IconProps, Icon } from '../icon'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'plain'
  | 'info'
  | 'danger'
  | 'warning'
  | 'success'

export type ButtonSize = 'large' | 'small' | 'middle'

const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'middle',
  },
  round: Boolean,
  disabled: Boolean,
  icon: String as PropType<IconProps['name']>,
  circle: Boolean,
  loading: Boolean,
}

export type ErButtonProps = ExtractPropTypes<typeof props>

const [className, bem] = createNamespace('button')

export default defineComponent({
  name: 'ErButton',

  props,

  emit: ['click'],

  setup(props, { slots }) {
    const renderText = () => {
      const def = slots.default?.()
      if (def) {
        return (
          <span
            class={bem('__text')}
            style={
              props.icon || props.loading ? { paddingLeft: '5px' } : undefined
            }
          >
            {def}
          </span>
        )
      }
    }

    const renderIcon = () => {
      if (props.loading) {
        return <Icon name="loading" class={bem('__icon')} />
      }
      if (props.icon) {
        return <Icon name={props.icon} class={bem('__icon')} />
      }
    }
    return () => (
      <button
        class={[
          className,
          'ellipsis',
          bem(props.size, props.type),
          props.round ? 'is-round' : undefined,
          props.circle ? 'is-circle' : undefined,
          props.disabled ? bem('disabled') : undefined,
          props.loading ? bem('loading') : undefined,
        ]}
        disabled={props.disabled || props.loading}
      >
        {renderIcon()}
        {renderText()}
      </button>
    )
  },
})
