import _Step from './Step'

export const Step = _Step

export type { StepProps } from './Step'

declare module 'vue' {
  export interface GlobalComponents {
    ErStep: typeof Step
  }
}
