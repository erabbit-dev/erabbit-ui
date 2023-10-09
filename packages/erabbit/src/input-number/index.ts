import _InputNumber from './InputNumber'

export const InputNumber = _InputNumber

declare module 'vue' {
  export interface GlobalComponents {
    ErInputNumber: typeof InputNumber
  }
}
