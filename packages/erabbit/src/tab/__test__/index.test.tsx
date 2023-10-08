import { mount } from '@vue/test-utils'
import { later } from '../../test'
import { Tab, TabPanel } from '..'
import { ref } from 'vue'
import { expect } from 'vitest'

test('should render default Tab', async () => {
  const wrapper = mount({
    setup() {
      return () => (
        <Tab>
          <TabPanel label="首页" name="first">
            1
          </TabPanel>
          <TabPanel label="用户管理" name="second">
            2
          </TabPanel>
          <TabPanel label="角色管理" name="third">
            3
          </TabPanel>
        </Tab>
      )
    },
  })
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render small size Tab', async () => {
  const wrapper = mount(
    <Tab size="small">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render  mini size Tab', async () => {
  const wrapper = mount(
    <Tab size="mini">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.mini')).toBe(true)
})
test('should render card type Tab', async () => {
  const wrapper = mount(
    <Tab type="card">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.card')).toBe(true)
})
test('should render border-card type Tab', async () => {
  const wrapper = mount(
    <Tab type="border-card">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.border-card')).toBe(true)
})

test('should render left position Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="left">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.left')).toBe(true)
})
test('should render right position Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="right">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
})
test('should render bottom position Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="bottom">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
})
test('should render bottom position and card type Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="bottom" type="card">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.card')).toBe(true)
})
test('should render bottom position and border-card type and mini size Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="bottom" type="border-card" size="mini">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.border-card')).toBe(true)
})
test('should render bottom position and small size Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="bottom" size="small">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.small')).toBe(true)
})
test('should render bottom position and mini size Tab', async () => {
  const wrapper = mount(
    <Tab tabPosition="bottom" size="mini">
      <TabPanel label="首页" name="first">
        1
      </TabPanel>
      <TabPanel label="用户管理" name="second">
        2
      </TabPanel>
      <TabPanel label="角色管理" name="third">
        3
      </TabPanel>
    </Tab>,
  )
  await later(100)
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tabs-title a').length).toBe(3)
  expect(wrapper.find('.er-tabs').exists('.bottom')).toBe(true)
  expect(wrapper.find('.er-tabs').exists('.mini')).toBe(true)
})

test('should render active Tab', async () => {
  let testValue = ''
  const wrapper = mount({
    setup() {
      const activeName = ref('first')
      return () => (
        <Tab
          modelValue={activeName.value}
          onUpdate:modelValue={(value) => {
            activeName.value = value
            testValue = value
          }}
        >
          <TabPanel label="首页" name="first">
            1
          </TabPanel>
          <TabPanel label="用户管理" name="second">
            2
          </TabPanel>
          <TabPanel label="角色管理" name="third">
            3
          </TabPanel>
        </Tab>
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
