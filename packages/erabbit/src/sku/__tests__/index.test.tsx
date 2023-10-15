import { Sku } from '..'
import { mount } from '@vue/test-utils'
import data from '../constants'
import { ref } from 'vue'

test('should render default sku', () => {
  const wrapper = mount({
    setup() {
      const goods = ref(data)
      return () => <Sku specs={goods.value.specs} skus={goods.value.skus}></Sku>
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

test('should render set props sku-id', async () => {
  const wrapper = mount({
    setup() {
      const goods = ref(data)
      const skuId = ref('300206065')
      return () => (
        <Sku
          specs={goods.value.specs}
          skus={goods.value.skus}
          skuId={skuId.value}
        ></Sku>
      )
    },
  })
  expect(wrapper.html()).toMatchSnapshot()

  expect(wrapper.findAll('.is-selected').length).toBe(2)

  await wrapper.setProps({ skuId: null })

  expect(wrapper.findAll('.is-selected').length).toBe(0)
})

test('should set sku-id when trigger change event', async () => {
  let skuId: string | undefined = '300206065'
  const wrapper = mount({
    setup() {
      const goods = ref(data)
      const onChange = (id?: string) => {
        skuId = id
      }
      return () => (
        <Sku
          specs={goods.value.specs}
          skus={goods.value.skus}
          skuId={skuId}
          onChange={(e) => onChange(e.id)}
        ></Sku>
      )
    },
  })

  await wrapper.find('.is-selected').trigger('click')

  expect(skuId).toBe(undefined)

  await wrapper
    .find('.er-sku__row:first-child .er-sku__img:first-child')
    .trigger('click')
  await wrapper
    .find('.er-sku__row:last-child .er-sku__btn:nth-last-child(2)')
    .trigger('click')
  expect(skuId).toBe('300206064')
})
