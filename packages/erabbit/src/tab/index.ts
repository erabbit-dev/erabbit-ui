import _Tab from './Tab'
import _TabPanel from './TabPanel'

export const Tab = _Tab
export const TabPanel = _TabPanel

export type { TabProps, TabSizeType, TabPositionType, TabShowType } from './Tab'

declare module 'vue' {
  export interface GlobalComponents {
    ErTab: typeof Tab
    ErTabPanel: typeof TabPanel
  }
}
