import { mount } from '@vue/test-utils'
import { later } from '../../test'
import { Step, StepItem } from '..'
import { ref } from 'vue'

test('should render default Step', () => {
  const wrapper = mount(
    <Step>
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render  Step with title and desc', () => {
  const wrapper = mount(
    <Step>
      <StepItem title="开始" desc="2023-09-28 10:23:45"></StepItem>
      <StepItem title="中间" desc="2023-09-28 10:25:46"></StepItem>
      <StepItem title="结束" desc="2023-09-28 10:26:03"></StepItem>
    </Step>
  )
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render Step with active first one item', () => {
  const wrapper = mount(
    <Step active-index={1}>
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>
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
    }
  })
  expect(wrapper.html()).toMatchSnapshot()
})
test('should render Step with vertical mode', () => {
  const wrapper = mount(
    <Step active-index={1} mode="vertical">
      <StepItem></StepItem>
      <StepItem></StepItem>
      <StepItem></StepItem>
    </Step>
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
    }
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
