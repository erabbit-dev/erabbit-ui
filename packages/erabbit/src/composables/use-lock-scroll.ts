import type { Ref } from 'vue'
import { isRef, onScopeDispose, watch } from 'vue'

let scrollBarWidth: number

const isClient = () => typeof window !== 'undefined'

function getScrollBarWidth(): number {
  if (!isClient) return 0
  if (scrollBarWidth !== undefined) return scrollBarWidth

  const outer = document.createElement('div')
  outer.className = `er-scrollbar__wrap`
  outer.style.visibility = 'hidden'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode?.removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}

export const useLockScroll = (trigger: Ref<boolean>) => {
  const className = 'er-overflow-hidden'

  if (!isRef(trigger)) {
    throw new Error('useLockScroll: "trigger" must be a ref')
  }

  if (!isClient() || document.body.classList.contains(className)) {
    return
  }

  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyWidth = '0'

  const cleanup = () => {
    setTimeout(() => {
      document.body.classList.remove(className)
      if (withoutHiddenClass && document) {
        document.body.style.width = bodyWidth
      }
    }, 200)
  }

  watch(trigger, (val) => {
    if (!val) {
      cleanup()
      return
    }

    withoutHiddenClass = !document.body.classList.contains(className)
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width
    }
    scrollBarWidth = getScrollBarWidth()

    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight

    const bodyOverflowY = document.defaultView?.getComputedStyle(document.body)
      .overflowY

    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`
    }

    document.body.classList.add(className)
  })

  onScopeDispose(() => cleanup())
}
