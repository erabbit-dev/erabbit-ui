import { type ExtractPropTypes, defineComponent } from 'vue'
import { ref } from 'vue'

import { createNamespace } from '../utils'
import type { PropType } from 'vue'
const [className, bem] = createNamespace('input-number')

type Size = 'large' | 'middle' | 'small' | 'default'

const props = {
  id: String,
  placeholder: String,
  modelValue: Number,
  disabled: Boolean,
  name: String,
  step: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  size: {
    type: String as PropType<Size>,
    default: 'default',
  },
}

export type ErInputNumberProps = ExtractPropTypes<typeof props>

export default defineComponent({
  name: 'ErInputNumber',
  emits: ['update:modelValue', 'change', 'blur', 'focus'],
  props,
  setup(props, { emit, expose }) {
    const inputRef = ref<HTMLInputElement>()

    let oldValue = props.modelValue

    const onInput = (event: Event) => {
      oldValue = props.modelValue
      const element = event.target as HTMLInputElement
      const newValue = element.valueAsNumber
      emit('update:modelValue', newValue)
    }

    const onNumberChange = (value: number) => {
      oldValue = props.modelValue
      const newValue = Number(props.modelValue) + value
      if (isNaN(newValue)) {
        emit('update:modelValue', 1)
      } else {
        setValue(newValue)
      }
    }

    const setValue = (newValue: number) => {
      if (newValue > props.max) {
        newValue = props.max
      } else if (newValue < props.min) {
        newValue = props.min
      }

      if (oldValue === newValue) return

      emit('update:modelValue', newValue)
      emit('change', newValue, oldValue)
    }

    const onBlur = (event: FocusEvent) => {
      emit('blur', event)
      const element = event.target as HTMLInputElement
      const newValue = element.valueAsNumber
      if (isNaN(newValue)) return
      setValue(newValue)
    }

    const onFocus = (event: FocusEvent) => {
      emit('focus', event)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    return () => (
      <>
        <div class={[className, props.disabled && 'disabled', bem(props.size)]}>
          <button
            disabled={props.disabled}
            class={bem('__decrease')}
            onClick={() => onNumberChange(-props.step)}
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
              ></path>
            </svg>
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
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
              ></path>
            </svg>
          </button>
        </div>
      </>
    )
  },
})
