import { mount } from '@vue/test-utils'
import { later } from '../../test'
import { Tabs, TabsPanel } from '..'
import { ref } from 'vue'
import { expect } from 'vitest'

test('should render default Tabs', () => {
  const wrapper = mount({
    setup() {
      return () => (
        <Tabs>
          <TabsPanel label="首页" name="first">
            1
          </TabsPanel>
          <TabsPanel label="用户管理" name="second">
            2
          </TabsPanel>
          <TabsPanel label="角色管理" name="third">
            3
          </TabsPanel>
        </Tabs>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render small size Tabs', () => {
  const wrapper = mount(
    <Tabs size="small">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render  mini size Tabs', () => {
  const wrapper = mount(
    <Tabs size="mini">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render card type Tabs', () => {
  const wrapper = mount(
    <Tabs type="card">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render border-card type Tabs', () => {
  const wrapper = mount(
    <Tabs type="border-card">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})

test('should render left position Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="left">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render right position Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="right">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="bottom">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position and card type Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="bottom" type="card">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position and border-card type and mini size Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="bottom" type="border-card" size="mini">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position and small size Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="bottom" size="small">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position and mini size Tabs', () => {
  const wrapper = mount(
    <Tabs tabPosition="bottom" size="mini">
      <TabsPanel label="首页" name="first">
        1
      </TabsPanel>
      <TabsPanel label="用户管理" name="second">
        2
      </TabsPanel>
      <TabsPanel label="角色管理" name="third">
        3
      </TabsPanel>
    </Tabs>,
  )
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})

test('should render active Tabs', async () => {
  const wrapper = mount({
    setup() {
      const activeName = ref('first')
      return () => (
        <Tabs
          modelValue={activeName.value}
          onUpdate:modelValue={(value) => {
            activeName.value = value
          }}
        >
          <TabsPanel label="首页" name="first">
            1
          </TabsPanel>
          <TabsPanel label="用户管理" name="second">
            2
          </TabsPanel>
          <TabsPanel label="角色管理" name="third">
            3
          </TabsPanel>
        </Tabs>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)

  wrapper.find('.er-tabs-title a:nth-of-type(2)').trigger('click')
  await later()
  expect(activeName.value).toBe('second')
  wrapper.find('.er-tabs-title a:nth-of-type(3)').trigger('click')
  await later()
  expect(activeName.value).toBe('third')
  wrapper.find('.er-tabs-title a:nth-of-type(2)').trigger('click')
  await later()
  expect(activeName.value).toBe('second')
  wrapper.find('.er-tabs-title a:nth-of-type(1)').trigger('click')
  await later()
  expect(activeName.value).toBe('first')
})
