import {
  type ExtractPropTypes,
  type PropType,
  defineComponent,
  ref,
  watch,
} from 'vue'
import { createNamespace } from '../utils'

const [className, bem] = createNamespace('input-number')

type Size = 'large' | 'default' | 'small'

const props = {
  modelValue: Number,
  disabled: Boolean,
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
  setup(props, { emit, expose, attrs }) {
    const inputRef = ref<HTMLInputElement>()

    watch(
      () => props.modelValue,
      (value, oldValue) => {
        emit('change', value, oldValue)
      },
    )

    const onInput = (event: Event) => {
      const element = event.target as HTMLInputElement
      const valueAsNumber = element.valueAsNumber
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

    const setValue = (valueAsNumber: number) => {
      if (valueAsNumber > props.max) {
        valueAsNumber = props.max
      } else if (valueAsNumber < props.min) {
        valueAsNumber = props.min
      }
      emit('update:modelValue', valueAsNumber)
    }

    const onBlur = (event: FocusEvent) => {
      emit('blur', event)
      const element = event.target as HTMLInputElement
      const valueAsNumber = element.valueAsNumber
      if (isNaN(valueAsNumber)) return
      setValue(valueAsNumber)
    }

    const onFocus = (event: FocusEvent) => {
      emit('focus', event)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    return () => (
      <div
        class={[
          className,
          bem(props.size),
          props.disabled ? 'is_disabled' : '',
        ]}
      >
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
          {...attrs}
          class={bem('__input')}
          autocomplete="off"
          type="number"
          min={props.min}
          max={props.max}
          step={props.step}
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
    )
  },
})
