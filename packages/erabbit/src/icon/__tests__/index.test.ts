import { Icon } from '..'
import { mount } from '@vue/test-utils'

test('should render default icon', () => {
  const wrapper = mount(Icon, {
    props: {
      name: 'weixin',
      color: 'red',
      size: 30
    }
  })
  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.find('.er-icon--weixin').exists()).toBe(true)

  expect(wrapper.find('.er-icon--weixin').attributes().style).toBe(
    'font-size: 30px; color: red;'
  )
})
