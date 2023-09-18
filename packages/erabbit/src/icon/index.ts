import _Icon from './Icon'

export const Icon = _Icon

export type { IconProps } from './Icon'

declare module 'vue' {
  export interface GlobalComponents {
    ErIcon: typeof Icon
  }
}
