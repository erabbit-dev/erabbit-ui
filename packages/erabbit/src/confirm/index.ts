import _Confirm from './Confirm'
export { showConfirm } from './showConfirm'

export type { ConfirmProps } from './Confirm'

export const Confirm = _Confirm

declare module 'vue' {
  export interface GlobalComponents {
    ErConfirm: typeof Confirm
  }
}
