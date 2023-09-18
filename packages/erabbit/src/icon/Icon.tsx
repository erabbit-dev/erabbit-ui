import { computed, defineComponent, type ExtractPropTypes } from 'vue'
import { createNamespace, isNumeric } from '../utils'
import type { IconName } from '@erabbit/icons'
import type { PropType } from 'vue'

const [className, bem] = createNamespace('icon')

// 把 basic 数组中的每一项的值当做类型
// type IconNameType = typeof config.basic[number]

const iconProps = {
  name: {
    type: String as PropType<IconName>,
    default: ''
  },
  size: {
    type: [Number, String],
    default: '1em'
  },
  color: {
    type: String,
    default: '#333333'
  }
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
          color: props.color
        }
      })

      return <i class={[className, bem(props.name)]} style={style.value} />
    }
  }
})
