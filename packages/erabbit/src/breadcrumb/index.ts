import _Breadcrumb from './Breadcrumb'
import _BreadcrumbItem from './BreadcrumbItem'

export const Breadcrumb = _Breadcrumb
export const BreadcrumbItem = _BreadcrumbItem

export type { BreadcrumbProps } from './Breadcrumb'
export type { BreadcrumbItemProps } from './BreadcrumbItem'

declare module 'vue' {
  export interface GlobalComponents {
    ErBreadcrumb: typeof Breadcrumb
    ErBreadcrumbItem: typeof BreadcrumbItem
  }
}
