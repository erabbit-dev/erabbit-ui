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
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
