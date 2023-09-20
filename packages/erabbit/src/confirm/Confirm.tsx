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
import { onMounted } from 'vue'
import type { PropType } from 'vue'
import type { TeleportProps } from 'vue'
import { useLockScroll } from '../composables/use-lock-scroll'

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
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body'
  },
  lockScroll: {
    type: Boolean,
    default: true
  }
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

    onMounted(() => {
      if (props.visible) {
        open()
      }
    })

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

    if (props.lockScroll) {
      useLockScroll(active)
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
