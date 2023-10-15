import { computed, defineComponent, type ExtractPropTypes } from 'vue'
import { createNamespace, isNumeric } from '../utils'
import type { IconName } from '@erabbit-dev/icons'
import type { PropType } from 'vue'

const [className, bem] = createNamespace('icon')

// 把 basic 数组中的每一项的值当做类型
// type IconNameType = typeof config.basic[number]

const iconProps = {
  name: {
    type: String as PropType<IconName>,
    default: '',
  },
  size: {
    type: [Number, String],
    default: '1em',
  },
  color: {
    type: String,
    default: '',
  },
}

export type IconProps = ExtractPropTypes<typeof iconProps>

export default defineComponent({
  name: 'ErIcon',

  props: iconProps,

  setup(props) {
    return () => {
      const style = computed(() => {
        return {
          fontSize: isNumeric(props.size) ? `${props.size}px` : props.size,
          color: props.color || undefined,
        }
      })

      return props.name === 'loading' ? (
        <div class={[className, bem(props.name)]} style={style.value}>
          <svg
            viewBox="0 0 1024 1024"
            focusable="false"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
          </svg>
        </div>
      ) : (
        <i class={[className, bem(props.name)]} style={style.value} />
      )
    }
  },
})
