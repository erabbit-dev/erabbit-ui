import { Button } from '..'
import { mount } from '@vue/test-utils'

test('should render default button', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'Submit',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('should trigger click event', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'Submit',
    },
    props: {
      size: 'large',
      type: 'primary',
      icon: 'cart',
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})

test('should trigger click event when loading or disabled', async () => {
  const fn = vi.fn()
  const wrapper = mount({
    setup() {
      return () => <Button onClick={() => fn()}>Submit</Button>
    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.find('.er-button').trigger('click')
  expect(fn).toBeCalledTimes(1)

  await wrapper.setProps({
    disabled: true,
  })
  await wrapper.find('.er-button').trigger('click')
  expect(fn).toBeCalledTimes(1)

  await wrapper.setProps({
    disabled: false,
  })
  await wrapper.find('.er-button').trigger('click')
  expect(fn).toBeCalledTimes(2)

  await wrapper.setProps({
    loading: true,
  })
  await wrapper.find('.er-button').trigger('click')
  expect(fn).toBeCalledTimes(2)
})
