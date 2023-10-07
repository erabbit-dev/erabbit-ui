import { type ExtractPropTypes, type PropType, defineComponent } from 'vue'
import { type IconProps, Icon } from '../icon'
import type { InputHTMLAttributes } from 'vue'
import { onKeyDown } from '@vueuse/core'
import { ref } from 'vue'

import { createNamespace } from '../utils'
const [className, bem] = createNamespace('input-number')

const props = {
  id: String,
  placeholder: String,
  modelValue: Number,
  disabled: Boolean,
  name: String,
  step: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: -Infinity
  },
  max: {
    type: Number,
    default: Infinity
  },
  controlsPosition: {
    type: String,
    default: '',
    values: ['', 'right']
  }
}

export type ErInputNumberProps = ExtractPropTypes<typeof props>

export default defineComponent({
  name: 'ErInputNumber',
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  props,
  setup(props, { emit, expose }) {
    const inputRef = ref<HTMLInputElement>()

    const onInput = (event: Event) => {
      const valueAsNumber = (event.target as HTMLInputElement).valueAsNumber
      emit('update:modelValue', valueAsNumber)
    }

    const onNumberChange = (value: number) => {
      const valueAsNumber = Number(props.modelValue) + value
      if (isNaN(valueAsNumber)) {
        emit('update:modelValue', 1)
      } else {
        setValue(valueAsNumber)
      }
    }

    const setValue = (value: number) => {
      const oldValue = props.modelValue
      let newValue = value

      if (value > props.max) {
        newValue = props.max
      } else if (value < props.min) {
        newValue = props.min
      }

      if (oldValue === newValue) return

      emit('update:modelValue', newValue)
      emit('change', newValue, oldValue)
    }

    const onBlur = (event: MouseEvent | FocusEvent) => {
      emit('blur', event)
      const valueAsNumber = (event.target as HTMLInputElement).valueAsNumber
      setValue(valueAsNumber)
    }

    const onFocus = (event: MouseEvent | FocusEvent) => {
      emit('focus', event)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur()
    })

    return () => (
      <div class={[className]}>
        <h3>InputNumber</h3>
        <h4>{JSON.stringify(props)}</h4>
        <button
          disabled={props.disabled}
          class={bem('__decrease')}
          onClick={() => onNumberChange(-props.step)}
        >
          -
        </button>
        <input
          class={bem('__input')}
          autocomplete="off"
          type="number"
          id={props.id}
          name={props.name}
          min={props.min}
          max={props.max}
          step={props.step}
          placeholder={props.placeholder}
          value={props.modelValue}
          disabled={props.disabled}
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
        />
        <button
          class={bem('__increase')}
          disabled={props.disabled}
          onClick={() => onNumberChange(props.step)}
        >
          +
        </button>
      </div>
    )
  }
})
