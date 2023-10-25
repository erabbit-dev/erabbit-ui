import { ImageView } from '..'
import { mount } from '@vue/test-utils'

test('should render default ImageView', () => {
  const wrapper = mount(ImageView)
  expect(wrapper.html()).toMatchSnapshot()
})
