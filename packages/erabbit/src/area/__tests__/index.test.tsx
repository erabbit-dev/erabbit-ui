import { Area } from '..'
import { mount } from '@vue/test-utils'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
import { later } from '../../test'

const fetchMocker = createFetchMock(vi)

beforeEach(() => {
  fetchMocker.enableMocks()
  fetchMocker.mockIf(/json$/, () => {
    return `
    [{
      "code": "110000",
      "level": 0,
      "name": "北京",
      "areaList": [{
        "code": "110100",
        "level": 1,
        "name": "北京市",
        "areaList": [{
          "code": "110101",
          "level": 2,
          "name": "东城区"
        }, {
          "code": "110102",
          "level": 2,
          "name": "西城区"
        }]
      }]
    }]
    `
  })
})

test('should render default Area', async () => {
  const wrapper = mount(Area)

  expect(wrapper.html()).toMatchSnapshot()
})

test('should select Region to display the next region ', async () => {
  const wrapper = mount(Area)

  await wrapper.find('.er-area__input').trigger('click')

  await later()

  expect(wrapper.html()).toContain('<span class="ellipsis">北京</span>')

  await wrapper.find('.er-area__popper span').trigger('click')

  expect(wrapper.html()).toContain('<span class="ellipsis">北京市</span>')

  await wrapper.find('.er-area__popper span').trigger('click')

  expect(wrapper.html()).toContain('<span class="ellipsis">东城区</span>')

  // @ts-ignore
  const outer = document.createElement('div', { class: 'outer' })
  // @ts-ignore
  document.body.appendChild(outer)
  await outer.click()

  expect(wrapper.findAll('.er-area__popper')).toHaveLength(0)
})

test('should the change event is triggered after the selection is complete', async () => {
  const wrapper = mount(Area)

  await wrapper.find('.er-area__input').trigger('click')

  await later()

  expect(wrapper.html()).toContain('<span class="ellipsis">北京</span>')

  await wrapper.find('.er-area__popper span').trigger('click')

  expect(wrapper.html()).toContain('<span class="ellipsis">北京市</span>')

  await wrapper.find('.er-area__popper span').trigger('click')

  expect(wrapper.html()).toContain('<span class="ellipsis">东城区</span>')

  await wrapper.find('.er-area__popper span').trigger('click')

  expect(wrapper.emitted('change')?.[0][0]).toEqual(
    expect.objectContaining({
      fullLocation: '北京 北京市 东城区',
    }),
  )

  await wrapper.setProps({
    fullLocation: '北京 北京市 东城区',
  })

  expect(wrapper.html()).toContain('<span>北京 北京市 东城区</span>')
})
