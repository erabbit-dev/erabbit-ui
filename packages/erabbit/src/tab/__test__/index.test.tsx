import { mount } from '@vue/test-utils'
import { later } from '../../test'
import { Tabs, TabsPanel } from '..'
import { ref } from 'vue'
import { expect } from 'vitest'

test('should render default Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render small size Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render  mini size Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.mini')).toBe(true)
})
test('should render card type Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.card')).toBe(true)
})
test('should render border-card type Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.border-card')).toBe(true)
})

test('should render left position Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.left')).toBe(true)
})
test('should render right position Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
})
test('should render bottom position and card type Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.card')).toBe(true)
})
test('should render bottom position and border-card type and mini size Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.border-card')).toBe(true)
})
test('should render bottom position and small size Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.small')).toBe(true)
})
test('should render bottom position and mini size Tabs', async () => {
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.mini')).toBe(true)
})

test('should render active Tabs', async () => {
  let testValue = ''
  const wrapper = mount({
    setup() {
      const activeName = ref('first')
      return () => (
        <Tabs
          modelValue={activeName.value}
          onUpdate:modelValue={(value) => {
            activeName.value = value
            testValue = value
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
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)

  wrapper.find('.er-tabs-title a:nth-of-type(2)').trigger('click')
  await later()
  expect(testValue).toBe('second')
  wrapper.find('.er-tabs-title a:nth-of-type(3)').trigger('click')
  await later()
  expect(testValue).toBe('third')
  wrapper.find('.er-tabs-title a:nth-of-type(2)').trigger('click')
  await later()
  expect(testValue).toBe('second')
  wrapper.find('.er-tabs-title a:nth-of-type(1)').trigger('click')
  await later()
  expect(testValue).toBe('first')
})
