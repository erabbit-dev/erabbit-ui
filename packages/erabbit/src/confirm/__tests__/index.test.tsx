import { mount } from '@vue/test-utils'

import { Confirm, showConfirm } from '..'
import { later } from '../../test'

test('should render default Confirm', async () => {
  // @ts-ignore
  const wrapper = mount(
    <Confirm
      title="Title"
      message="This is message"
      visible={true}
      teleport=""
    />,
  )

  await later(0)

  expect(wrapper.html()).toMatchSnapshot()
})

test('should use Confirm component state control confirmation box', async () => {
  const wrapper = mount(
    <Confirm title="Title" message="This is message" teleport="" />,
  )

  await wrapper.setProps({ visible: true })
  await later(0)
  expect(wrapper.find('.er-confirm__wrapper').exists()).toBeTruthy()

  await wrapper.setProps({ visible: false })
  await later(0)
  expect(wrapper.find('.er-confirm__wrapper').exists()).toBeFalsy()

  await wrapper.setProps({ visible: true })
  await later(0)
  await wrapper.find('.er-button--default').trigger('click')
  expect(wrapper.emitted('update:visible')?.[0]).toEqual([false, 'cancel'])
  await wrapper.setProps({ visible: false })
  await later(0)
  expect(wrapper.find('.er-confirm__wrapper').exists()).toBeFalsy()

  await wrapper.setProps({ visible: true })
  await later(0)
  await wrapper.find('.er-icon--close').trigger('click')
  expect(wrapper.emitted('update:visible')?.[1]).toEqual([false, 'cancel'])
  await wrapper.setProps({ visible: false })
  await later(0)
  expect(wrapper.find('.er-confirm__wrapper').exists()).toBeFalsy()

  await wrapper.setProps({ visible: true })
  await later(0)
  await wrapper.find('.er-button--primary').trigger('click')
  expect(wrapper.emitted('update:visible')?.[2]).toEqual([false, 'submit'])
  await wrapper.setProps({ visible: false })
  await later(0)
  expect(wrapper.find('.er-confirm__wrapper').exists()).toBeFalsy()
})

test('should use showConfirm function control confirmation box', async () => {
  // @ts-ignore
  const div = document.createElement('div')
  div.id = 'confirm'

  // @ts-ignore
  document.body.appendChild(div)

  const submit = vi.fn()
  const cancel = vi.fn()

  showConfirm({
    title: 'Title',
    message: 'This is message',
    teleport: '#confirm',
    submit,
    cancel,
  }).catch(() => {})

  await later(0)

  expect(div).toMatchSnapshot()

  expect(div.querySelector('.er-confirm__header h3')?.innerHTML).toBe('Title')
  await (div.querySelector('.er-button--default') as HTMLButtonElement).click()
  expect(cancel).toHaveBeenCalled()

  showConfirm({
    title: '温馨提示',
    message: '这里是提示信息',
    teleport: '#confirm',
    submit,
    cancel,
  }).catch(() => {})

  await later(0)

  expect(div).toMatchSnapshot()
  expect(div.querySelector('.er-confirm__header h3')?.innerHTML).toBe(
    '温馨提示',
  )
  await (div.querySelector('.er-button--primary') as HTMLButtonElement).click()
  expect(submit).toHaveBeenCalled()
})
