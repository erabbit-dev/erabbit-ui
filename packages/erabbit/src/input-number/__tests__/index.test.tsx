import { InputNumber } from '..'
import { mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'

describe('InputNumber.vue', () => {
  test('create', async () => {
    const num = ref(1)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  test('modelValue', () => {
    const num = ref(1)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    expect(wrapper.find('input').element.valueAsNumber).toEqual(1)
  })

  test('set modelValue undefined to form validate', async () => {
    const num = ref(undefined)
    const wrapper = mount(() => (
      <>
        <InputNumber modelValue={num.value} />
        <p>{num.value}</p>
      </>
    ))
    await nextTick()
    expect(wrapper.find('p').element.innerText).toBeUndefined()
  })

  test('set modelValue undefined to display placeholder', async () => {
    const inputText = ref<number | undefined>(1)
    const wrapper = mount(() => (
      <InputNumber modelValue={inputText.value} placeholder="input number" />
    ))
    expect(wrapper.find('input').element.value).toEqual('1')
    inputText.value = undefined
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('')
  })

  test('Make sure the input action can trigger the modelValue update', async () => {
    const num = ref<number>(0)
    const handleUpdate = (data: number | undefined) => {
      num.value = data!
    }
    const wrapper = mount(() => (
      <InputNumber modelValue={num.value} onUpdate:modelValue={handleUpdate} />
    ))
    const el = wrapper.find('input').element
    const simulateEvent = (text: string, event: string) => {
      el.value = text
      el.dispatchEvent(new Event(event))
    }
    simulateEvent('3', 'input')
    await nextTick()
    expect(num.value).toEqual(3)
  })

  test('Make sure modelValue correct update when no initial value', async () => {
    const num = ref<number>()
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    const inputWrapper = wrapper.find('input')
    const nativeInput = inputWrapper.element
    nativeInput.value = 1
    await inputWrapper.trigger('input')
    nativeInput.value = ''
    await inputWrapper.trigger('input')
    expect(num.value).toEqual(NaN)
    wrapper.find('.er-input-number__decrease').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(1)
  })

  test('min', async () => {
    const num = ref(2)
    const wrapper = mount(() => <InputNumber min={1} v-model={num.value} />)
    wrapper.find('.er-input-number__decrease').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(1)
    wrapper.find('.er-input-number__decrease').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(1)
    wrapper.find('.er-input-number__decrease').trigger('click')
  })

  test('max', async () => {
    const num = ref(1)
    const wrapper = mount(() => <InputNumber max={2} v-model={num.value} />)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(2)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(2)
  })

  test('step, increase and decrease', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} step={2} />)
    wrapper.find('.er-input-number__decrease').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(-2)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(0)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(2)
  })

  test('disabled', async () => {
    const num = ref(0)
    const wrapper = mount(() => (
      <InputNumber disabled={true} v-model={num.value} />
    ))
    wrapper.find('.er-input-number__decrease').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(0)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.find('input').element.valueAsNumber).toEqual(0)
  })

  test('change-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(1)
    expect(wrapper.getComponent(InputNumber).emitted().change[0]).toEqual([
      1, 0,
    ])
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue'),
    ).toHaveLength(1)
    wrapper.find('.er-input-number__increase').trigger('click')
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[1]).toEqual([
      2, 1,
    ])
  })

  test('blur-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    await wrapper.find('input').trigger('blur')
    expect(wrapper.getComponent(InputNumber).emitted('blur')).toHaveLength(1)
  })

  test('focus-event', async () => {
    const num = ref(0)
    const wrapper = mount(() => <InputNumber v-model={num.value} />)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.getComponent(InputNumber).emitted('focus')).toHaveLength(1)
  })
})
