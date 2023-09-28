import { mount } from '@vue/test-utils'
import { Breadcrumb, BreadcrumbItem } from '..'

test('should render default Carousel', () => {
  const wrapper = mount(
    <Breadcrumb separator="&gt;">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/">活动管理</BreadcrumbItem>
      <BreadcrumbItem>活动编辑</BreadcrumbItem>
    </Breadcrumb>,
  )
  expect(wrapper.html()).toMatchSnapshot()
})

test('should add Transition component use animate', async () => {
  const wrapper = mount<any>({
    render() {
      return (
        <Breadcrumb separator="&gt;">
          <BreadcrumbItem to="/">首页</BreadcrumbItem>
          <BreadcrumbItem to="/" onClick={() => (this.show = !this.show)}>
            活动管理
          </BreadcrumbItem>
          {this.show && <BreadcrumbItem>活动编辑</BreadcrumbItem>}
        </Breadcrumb>
      )
    },
    data() {
      return {
        show: true,
      }
    },
  })

  await wrapper.find('.er-breadcrumb-item:nth-child(2)').trigger('click')

  expect(wrapper.findAll('.er-breadcrumb-item').length).toBe(2)

  await wrapper.find('.er-breadcrumb-item:nth-child(2)').trigger('click')

  expect(wrapper.findAll('.er-breadcrumb-item').length).toBe(3)
})
