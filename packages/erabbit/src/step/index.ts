import _Step from './Step'
import _StepItem from './StepItem'

export const Step = _Step
export const StepItem = _StepItem

export type { StepProps } from './Step'

declare module 'vue' {
  export interface GlobalComponents {
    ErStep: typeof Step
    ErStepItem: typeof StepItem
  }
}
