import { defineComponent } from 'vue'
import { createNamespace } from '../utils'
import { ref } from 'vue'
import { watch } from 'vue'
import type { ExtractPropTypes } from 'vue'

const [className, bem] = createNamespace('checkbox')

const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export default defineComponent({
  name: 'ErCheckbox',

  props: checkboxProps,

  emits: ['update:modelValue', 'change'],
  setup(props, { slots, emit }) {
    // 同步 checked 状态
    const checked = ref(props.modelValue)
    watch(
      () => props.modelValue,
      (val) => {
        checked.value = val
      },
    )

    const indeterminate = ref(props.indeterminate)
    watch(
      () => props.indeterminate,
      (val) => {
        indeterminate.value = val
      },
    )

    const onChange = () => {
      if (indeterminate.value) {
        emit('update:modelValue', true)
        emit('change', true)
        indeterminate.value = false
        return
      }
      emit('update:modelValue', !checked.value)
      emit('change', !checked.value)
    }

    return () => (
      <label
        class={[
          className,
          checked.value && 'is_checked',
          indeterminate.value && 'is_indeterminate',
        ]}
      >
        <span class={bem('__input')}>
          <input class={bem('__origin')} type="checkbox" onChange={onChange} />
          <span class={bem('__inner')}></span>
        </span>
        <span class={bem('__label')}>{slots.default?.()}</span>
      </label>
    )
  },
})
