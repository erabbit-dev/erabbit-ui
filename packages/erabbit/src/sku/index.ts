import _Sku from './Sku'

export const Sku = _Sku

export type {
  SkuProps,
  SkuItem,
  SkuSpecItem,
  SkuSpecItemValue,
  SkuSpecItemPick,
} from './Sku'

declare module 'vue' {
  export interface GlobalComponents {
    ErSku: typeof Sku
  }
}
