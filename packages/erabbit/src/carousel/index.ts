import _Carousel from './Carousel'
import _CarouselItem from './CarouselItem'

export const Carousel = _Carousel
export const CarouselItem = _CarouselItem

export type {
  CarouselProps,
  CarouselExpose,
  CarouselInstance
} from './Carousel'

declare module 'vue' {
  export interface GlobalComponents {
    ErCarousel: typeof Carousel
    ErCarouselItem: typeof CarouselItem
  }
}
