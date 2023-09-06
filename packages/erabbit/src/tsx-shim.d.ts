import 'vue'

type EventHandler = (...args: any[]) => void

declare module 'vue' {
  interface ComponentCustomProps {
    onClick?: EventHandler
  }
}
