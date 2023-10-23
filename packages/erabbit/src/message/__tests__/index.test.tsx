import { mount } from '@vue/test-utils'
import { Message, clearMessage, showLoadingMessage, showMessage } from '..'
import { later } from '../../test'

test('should render default Message', () => {
  const wrapper = mount(Message, {
    props: {
      message: 'test',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('should show message when exec showMessage', async () => {
  showMessage({
    message: 'This is message',
    duration: 100,
    type: 'success',
    icon: 'arrow-up',
  })

  await later(0)
  expect(document.body).toMatchSnapshot()
  const text = document.body.querySelector('.er-message__text')
  expect(text?.innerHTML === 'This is message').toBeTruthy()
  expect(
    document.body.querySelectorAll('.er-message--success')?.length === 1,
  ).toBeTruthy()
  expect(
    document.body.querySelectorAll('.er-icon--arrow-up')?.length === 1,
  ).toBeTruthy()
  await later(100)
  expect(text?.innerHTML !== 'This is message').toBeFalsy()
})

test('should show message when exec  showLoadingMessage', async () => {
  const close = showLoadingMessage('Loading...')

  await later(0)
  expect(document.body).toMatchSnapshot()
  const text = document.body.querySelector('.er-message__text')
  expect(text?.innerHTML === 'Loading...').toBeTruthy()

  close()
  await later()
  expect(text?.innerHTML !== 'Loading...').toBeFalsy()

  showLoadingMessage('Loading...')
  showLoadingMessage('Loading...')
  await later()
  expect(
    document.body.querySelectorAll('.er-message')?.length === 2,
  ).toBeTruthy()
  clearMessage()

  await later()
  expect(
    document.body.querySelectorAll('.er-message')?.length === 0,
  ).toBeTruthy()
})
