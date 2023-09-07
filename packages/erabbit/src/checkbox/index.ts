import _Checkbox from './Checkbox'

export const Checkbox = _Checkbox

export type { CheckboxProps } from './Checkbox'

declare module 'vue' {
  export interface GlobalComponents {
    ErCheckbox: typeof Checkbox
  }
}
