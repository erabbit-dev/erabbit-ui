import { Checkbox } from '..'
import { mount } from '@vue/test-utils'

test('should render default Checkbox', () => {
  const wrapper = mount(Checkbox, {
    slots: {
      default: 'Checkbox',
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('should use v-model', async () => {
  const onChange = vitest.fn()

  const wrapper = mount<any>({
    props: {
      modelValue: false,
      indeterminate: false,
    },
    render() {
      return (
        <Checkbox
          modelValue={this.modelValue}
          onUpdate:modelValue={(val) => onChange(val)}
          indeterminate={this.indeterminate}
        >
          Checkbox
        </Checkbox>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()

  // v-model
  await wrapper.find('.er-checkbox__origin').trigger('change')
  expect(onChange).toHaveBeenCalledWith(true)

  await wrapper.setProps({ modelValue: true })
  expect(wrapper.findAll('.is_checked')).toHaveLength(1)

  await wrapper.setProps({ modelValue: false })
  expect(wrapper.findAll('.is_checked')).toHaveLength(0)

  // indeterminate
  await wrapper.setProps({ indeterminate: true })
  expect(wrapper.findAll('.is_indeterminate')).toHaveLength(1)

  await wrapper.find('.er-checkbox__origin').trigger('change')
  expect(onChange).toHaveBeenCalledWith(true)
})
