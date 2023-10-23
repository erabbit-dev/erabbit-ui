import _Message from './Message'
export { showMessage, showLoadingMessage, clearMessage } from './showMessage'

export const Message = _Message

export interface GlobalComponents {
  ErMessage: typeof Message
}
