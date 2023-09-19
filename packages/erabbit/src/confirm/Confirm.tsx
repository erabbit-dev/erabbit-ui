import { onClickOutside } from '@vueuse/core'
import {
  Teleport,
  Transition,
  defineComponent,
  nextTick,
  ref,
  watch,
  type ExtractPropTypes
} from 'vue'
import { Button } from '../button'
import { Icon } from '../icon'
import { createNamespace } from '../utils'

const [className, bem] = createNamespace('confirm')

const confirmProps = {
  visible: Boolean,
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  submitText: {
    type: String,
    default: 'OK'
  },
  teleport: {
    type: String,
    default: 'body'
  },
  submit: Function,
  cancel: Function
}

export type ConfirmProps = ExtractPropTypes<typeof confirmProps>

export default defineComponent({
  name: 'ErConfirm',

  props: confirmProps,

  emits: ['update:visible'],

  setup(props, { emit }) {
    const show = ref(false)
    const active = ref(false)

    const wrapperRef = ref(null)

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          open()
        } else {
          close()
        }
      }
    )

    const close = () => {
      active.value = false
      nextTick(() => {
        show.value = false
      })
    }

    const open = () => {
      show.value = true
      setTimeout(() => {
        active.value = true
      }, 0)
    }

    onClickOutside(wrapperRef, () => {
      emit('update:visible', false, 'cancel')
    })

    const onCancel = () => {
      emit('update:visible', false, 'cancel')
    }

    const onSubmit = () => {
      emit('update:visible', false, 'submit')
    }

    const renderConfirm = () => {
      return (
        <Transition name="popper">
          {show.value ? (
            <div class={['er-popper', className]}>
              <div
                class={[bem('__wrapper'), active.value ? 'active' : '']}
                ref={wrapperRef}
              >
                <div class={bem('__header')}>
                  <h3>{props.title}</h3>
                  <Icon name="close" color="#666" onClick={onCancel} />
                </div>
                <div class={bem('__body')}>
                  <Icon name="warn" />
                  <p>{props.message}</p>
                </div>
                <div class={bem('__footer')}>
                  <Button size="mini" onClick={onCancel}>
                    {props.cancelText}
                  </Button>
                  <Button size="mini" type="primary" onClick={onSubmit}>
                    {props.submitText}
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </Transition>
      )
    }

    return () =>
      props.teleport ? (
        <Teleport to={props.teleport}>{renderConfirm()}</Teleport>
      ) : (
        renderConfirm()
      )
  }
})
