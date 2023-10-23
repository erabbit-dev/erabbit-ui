import type { IconName } from '@erabbit-dev/icons'
import {
  ComponentPublicInstance,
  ExtractPropTypes,
  PropType,
  computed,
  defineComponent,
  onMounted,
} from 'vue'
import { Icon } from '../icon'
import { createNamespace } from '../utils'
import { ref } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

const messageProps = {
  message: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<MessageType>,
    default: 'info',
  },
  icon: {
    type: String as PropType<IconName>,
  },
  iconColor: String,
  duration: {
    type: Number,
    default: 3000,
  },
}

export type MessageProps = ExtractPropTypes<typeof messageProps>

export type MessageExpose = {
  close: () => void
}

export type MessageInstance = ComponentPublicInstance<
  MessageProps,
  MessageExpose
>

const [className, bem] = createNamespace('message')

export default defineComponent({
  name: 'ErMessage',

  props: messageProps,

  emits: ['close'],

  setup(props, { emit }) {
    onMounted(() => {
      if (props.duration === 0) return
      setTimeout(() => {
        emit('close')
      }, props.duration)
    })

    const defaultIcon = computed(() => {
      return (
        <span
          class={bem('__icon')}
          style={props.iconColor && { color: props.iconColor }}
        >
          {
            {
              error: (
                <svg
                  fill-rule="evenodd"
                  viewBox="64 64 896 896"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"></path>
                </svg>
              ),
              info: (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
              ),
              success: (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
              ),
              warning: (
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
              ),
            }[props.type]
          }
        </span>
      )
    })

    const rootRef = ref()
    const width = ref()
    onMounted(() => {
      width.value = rootRef.value?.offsetWidth + 'px'
    })

    return () => (
      <div
        class={[className, bem(props.type)]}
        ref={rootRef}
        style={{ width: width.value }}
      >
        {props.icon ? (
          <Icon
            name={props.icon}
            class={bem('__icon')}
            style={props.iconColor && { color: props.iconColor }}
          />
        ) : (
          defaultIcon.value
        )}
        <span class={bem('__text')}>{props.message}</span>
      </div>
    )
  },
})
