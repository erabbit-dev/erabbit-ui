import type { IconName } from '@erabbit-dev/icons'
import { ComponentPublicInstance, Teleport, TransitionGroup, ref } from 'vue'
import { mountComponent } from '../utils'
import type { MessageType } from './Message'
import Message from './Message'

type OptionsType = {
  type?: MessageType
  message: string
  icon?: IconName
  iconColor?: string
  duration?: number
  id?: string
}
type Instance = ComponentPublicInstance<
  {},
  {
    open(options: OptionsType): void
    close(id: string): void
    closeAll(): void
  }
>

let instance: Instance

const initInstance = () => {
  ;({ instance } = mountComponent<Instance>({
    setup(props, { expose }) {
      const queue = ref<OptionsType[]>([])

      const open = (options: OptionsType) => {
        queue.value.push({ ...options })
      }

      const onClose = (id: string) => {
        queue.value = queue.value.filter((item) => item.id !== id)
      }

      expose({
        open,
        close(id: string) {
          onClose(id)
        },
        closeAll() {
          queue.value = []
        },
      })

      return () => (
        <Teleport to="body">
          <div class="er-message-wrapper">
            <TransitionGroup name="msg">
              {queue.value.map((props) => {
                return (
                  <Message
                    {...props}
                    key={props.id}
                    onClose={() => onClose(props.id!)}
                  ></Message>
                )
              })}
            </TransitionGroup>
          </div>
        </Teleport>
      )
    },
  }))
}
let count = 0
export const showMessage = (options: OptionsType) => {
  if (!instance) {
    initInstance()
  }
  const id = `er-message_${count++}`

  instance.open({ ...options, id })

  return () => {
    instance.close(id)
  }
}

export const showLoadingMessage = (message: string, color?: string) => {
  return showMessage({
    message,
    duration: 0,
    icon: 'loading',
    iconColor: color || 'var(--er-primary)',
  })
}

export const clearMessage = () => {
  instance && instance.closeAll()
}
