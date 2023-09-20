import { ref } from 'vue'
import { mountComponent, omit } from '../utils'
import Confirm, { type ConfirmProps } from './Confirm'
import type { ComponentPublicInstance } from 'vue'
import { computed } from 'vue'

type OptionsType = Omit<Partial<ConfirmProps>, 'visible'> & {
  submit?: () => void
  cancel?: () => void
}
const defaultProps: OptionsType = {
  title: '',
  message: '',
  cancelText: 'Cancel',
  submitText: 'OK',
  teleport: 'body',
  lockScroll: true
}

type InstanceExpose = {
  open: (options: OptionsType) => void
}
type Instance = ComponentPublicInstance<{}, InstanceExpose>

let instance: Instance

const initInstance = () => {
  ;({ instance } = mountComponent<Instance>({
    setup(props, { expose }) {
      const state = ref({ ...defaultProps, visible: false })
      const open = (options: OptionsType) => {
        Object.assign(state.value, options, { visible: true })
      }
      const close = (visible: boolean, action: 'cancel' | 'submit') => {
        if (action === 'cancel') {
          state.value.cancel?.()
        }
        if (action === 'submit') {
          state.value.submit?.()
        }

        state.value.visible = visible
      }

      const exposeObject: InstanceExpose = {
        open
      }
      expose(exposeObject)

      const confirmProps = computed(() => {
        return omit(state.value, ['submit', 'cancel'])
      })

      return () => <Confirm {...confirmProps.value} onUpdate:visible={close} />
    }
  }))
}

export const showConfirm = (options: OptionsType) => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance()
    }
    instance.open({
      ...Object.assign(defaultProps, options),
      submit: () => {
        options.submit && options.submit()
        resolve('submit')
      },
      cancel: () => {
        options.cancel && options.cancel()
        reject('cancel')
      }
    })
  })
}
