import { Checkbox } from '..'
import { mount } from '@vue/test-utils'

test('should render default Checkbox', () => {
  const wrapper = mount(Checkbox, {
    slots: {
      default: 'Checkbox'
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
