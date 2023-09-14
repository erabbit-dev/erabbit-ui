import _Area from './Area'

export const Area = _Area

export type { AreaProps, AreaResult } from './Area'

declare module 'vue' {
  export interface GlobalComponents {
    ErArea: typeof Area
  }
}
