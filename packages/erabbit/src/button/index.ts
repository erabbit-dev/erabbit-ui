import _Button from './Button'

export type { ButtonType, ButtonSize, ErButtonProps } from './Button'

export const Button = _Button

declare module 'vue' {
  export interface GlobalComponents {
    ErButton: typeof Button
  }
}
