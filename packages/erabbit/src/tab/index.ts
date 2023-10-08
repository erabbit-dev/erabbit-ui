import _Tabs from './Tabs'
import _TabsPanel from './TabsPanel'

export const Tabs = _Tabs
export const TabsPanel = _TabsPanel

export type { TabsProps } from './Tabs'

declare module 'vue' {
  export interface GlobalComponents {
    ErTabs: typeof Tabs
    ErTabsPanel: typeof TabsPanel
  }
}
