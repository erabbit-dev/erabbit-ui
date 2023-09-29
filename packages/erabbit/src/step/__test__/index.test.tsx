import { mount } from '@vue/test-utils'
import { later } from '../../test'
import { Step, StepItem } from '..'
import { ref } from 'vue'
import { expect } from 'vitest'

test('should render default Step', () => {
  const wrapper = mount(
    <Step>
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>,
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render  Step with title and desc', () => {
  const wrapper = mount(
    <Step>
      <StepItem title="开始" desc="2023-09-28 10:23:45"></StepItem>
      <StepItem title="中间" desc="2023-09-28 10:25:46"></StepItem>
      <StepItem title="结束" desc="2023-09-28 10:26:03"></StepItem>
    </Step>,
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render Step with active first one item', () => {
  const wrapper = mount(
    <Step active-index={1}>
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>,
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render  Step with different size', () => {
  const wrapper = mount({
    setup() {
      return () => (
        <div>
          <Step active-index={1} size="medium">
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
          </Step>
          <Step active-index={1} size="mini">
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
          </Step>
          <Step active-index={1} size="small">
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
          </Step>
        </div>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render Step with vertical mode', () => {
  const wrapper = mount(
    <Step active-index={1} mode="vertical">
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>,
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should change acitve item by btn click trigger', async () => {
  const activeIndex = ref(-1)
  const stepRef = ref(null)
  const wrapper = mount({
    setup() {
      return () => (
        <div>
          <button onClick={() => activeIndex.value++}></button>
          <Step ref={stepRef} active-index={activeIndex.value} mode="vertical">
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
            <StepItem></StepItem>
          </Step>
        </div>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(0)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(1)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(2)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(3)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(4)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(5)
  wrapper.find('button').trigger('click')
  await later(100)
  expect(stepRef.value.getActiveIndex()).toBe(6)
})

test('should add or remove a step by button event', async () => {
  const wrapper = mount({
    setup() {
      const list = ref<{
        title: string
        desc: string
      }>([])
      const addStep = () => {
        list.value.push({
          title: `标题${~~(Math.random() * 100)}`,
          desc: `副标题${~~(Math.random() * 100)}`,
        })
      }
      const removeStep = (index) => {
        list.value.splice(index, 1)
      }
      return () => (
        <div>
          <button class="addStep" onClick={addStep}>
            添加步骤
          </button>
          <button
            class="removeStep"
            onClick={() => removeStep(list.value.length - 1)}
          >
            移除步骤
          </button>
          <Step>
            {list.value.map((item, index) => (
              <StepItem
                key={index}
                title={item.title}
                desc={item.desc}
              ></StepItem>
            ))}
          </Step>
        </div>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  await later()
  wrapper.find('.addStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(1)
  wrapper.find('.addStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(2)
  wrapper.find('.addStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(3)
  wrapper.find('.removeStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(2)
  wrapper.find('.removeStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(1)
  wrapper.find('.removeStep').trigger('click')
  await later()
  expect(wrapper.findAll('.er-steps-item').length).toBe(0)
})
