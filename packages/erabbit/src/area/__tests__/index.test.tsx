import { Area } from '..'
import { mount } from '@vue/test-utils'

test('should render default Area', () => {
  const wrapper = mount(Area, {
    slots: {
      default: 'Submit'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
