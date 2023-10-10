import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { ref } from 'vue'
import { Tab, TabPanel } from '..'
import { later } from '../../test'

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
  await later()
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tab__item').length).toBe(3)
})

test('should render tabs of different sizes', async () => {
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
  await later()
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--small').exists()).toBeTruthy()

  await wrapper.setProps({
    size: 'default',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--default').exists()).toBeTruthy()

  await wrapper.setProps({
    size: 'large',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--large').exists()).toBeTruthy()

  expect(wrapper.findAll('.er-tab__item').length).toBe(3)
})

test('should render tabs of different types', async () => {
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
  await later()
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--card').exists()).toBeTruthy()

  await wrapper.setProps({
    type: 'border-card',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--border-card').exists()).toBeTruthy()

  expect(wrapper.findAll('.er-tab__item').length).toBe(3)
})

test('should render tabs of different tab-positions', async () => {
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
  await later()
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--left').exists()).toBe(true)

  await wrapper.setProps({
    tabPosition: 'top',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--top').exists()).toBeTruthy()

  await wrapper.setProps({
    tabPosition: 'bottom',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--bottom').exists()).toBeTruthy()

  await wrapper.setProps({
    tabPosition: 'right',
  })
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.er-tab--right').exists()).toBeTruthy()

  expect(wrapper.findAll('.er-tab__item').length).toBe(3)
})

test('should render v-model Tab', async () => {
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
  await later()
  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.findAll('.er-tab__item').length).toBe(3)

  await wrapper.find('.er-tab__item:nth-of-type(2)').trigger('click')
  expect(testValue).toBe('second')

  await wrapper.find('.er-tab__item:nth-of-type(1)').trigger('click')
  expect(testValue).toBe('first')

  // unmounted
})

test('should unmounted when Tab and TabPanel is unmounted', async () => {
  const wrapper = mount({
    setup() {
      const activeName = ref('first')
      return () =>
        activeName.value !== 'third' && (
          <Tab
            modelValue={activeName.value}
            onUpdate:modelValue={(value) => (activeName.value = value)}
          >
            <TabPanel label="首页" name="first">
              1
            </TabPanel>
            <TabPanel label="用户管理" name="second">
              2
            </TabPanel>
            {activeName.value !== 'second' && (
              <TabPanel label="角色管理" name="third">
                3
              </TabPanel>
            )}
          </Tab>
        )
    },
  })

  await later()
  await wrapper.find('.er-tab__item:nth-of-type(2)').trigger('click')
  expect(
    wrapper.find('.er-tab__item:nth-of-type(2).is-active').exists(),
  ).toBeTruthy()

  // unmounted
  await wrapper.find('.er-tab__item:nth-of-type(1)').trigger('click')
  await wrapper.find('.er-tab__item:nth-of-type(3)').trigger('click')
})
