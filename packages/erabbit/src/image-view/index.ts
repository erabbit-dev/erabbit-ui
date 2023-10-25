import _ImageView from './ImageView'

export const ImageView = _ImageView

declare module 'vue' {
  export interface GlobalComponents {
    ErImageView: typeof ImageView
  }
}
