import { mount } from '@vue/test-utils'

import { Breadcrumb, BreadcrumbItem } from '..'

test('should render default Carousel', () => {
  const wrapper = mount(
    <Breadcrumb separator="&gt;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/">活动管理</BreadcrumbItem>
      <BreadcrumbItem>活动编辑</BreadcrumbItem>
    </Breadcrumb>
  )
  expect(wrapper.html()).toMatchSnapshot()
})
