/* eslint-disable @typescript-eslint/no-unused-vars */
import { onClickOutside } from '@vueuse/core'
import type { ExtractPropTypes } from 'vue'
import { computed, defineComponent, ref } from 'vue'
import { createNamespace } from '../utils'
import { Icon } from '../icon'

const [className, bem] = createNamespace('area')

const areaProps = {
  fullLocation: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请选择地区'
  }
}

export type AreaProps = ExtractPropTypes<typeof areaProps>

export interface AreaItem {
  name: string
  code: string
  level: number
  areaList?: AreaItem[]
}

const defaultResult = {
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: '',
  fullLocation: ''
}

export type AreaResult = typeof defaultResult

const url =
  'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'

export default defineComponent({
  name: 'ErArea',

  props: areaProps,

  emits: {
    change: (val: AreaResult) => true
  },

  setup(props, { emit }) {
    const area = ref<AreaItem[]>([])

    const loading = ref(false)
    const getAreaData = () => {
      loading.value = true
      if (window && window.areaData) {
        area.value = window.areaData
        loading.value
      } else {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            window.areaData = res
            area.value = res
          })
          .finally(() => {
            loading.value = false
          })
      }
    }

    const visible = ref(false)
    const onToggle = () => {
      visible.value = !visible.value
      if (visible.value) {
        changeResult.value = { ...defaultResult }
        if (!area.value.length) {
          getAreaData()
        }
      }
    }

    const changeResult = ref({ ...defaultResult })

    const currAreaList = computed(() => {
      let list = area.value
      if (changeResult.value.provinceCode && changeResult.value.provinceName) {
        list =
          list.find((p) => p.code === changeResult.value.provinceCode)
            ?.areaList || []
      }
      if (changeResult.value.cityCode && changeResult.value.cityName) {
        list =
          list.find((c) => c.code === changeResult.value.cityCode)?.areaList ||
          []
      }
      return list
    })

    const onchangeItem = (item: AreaItem) => {
      if (item.level === 0) {
        // 省
        changeResult.value.provinceCode = item.code
        changeResult.value.provinceName = item.name
      }
      if (item.level === 1) {
        // 市
        changeResult.value.cityCode = item.code
        changeResult.value.cityName = item.name
      }
      if (item.level === 2) {
        // 区
        changeResult.value.countyCode = item.code
        changeResult.value.countyName = item.name
        // 完整
        changeResult.value.fullLocation = `${changeResult.value.provinceName} ${changeResult.value.cityName} ${changeResult.value.countyName}`

        visible.value = false
        emit('change', changeResult.value)
      }
    }

    const target = ref(null)
    onClickOutside(target, () => {
      visible.value = false
    })

    return () => (
      <div class={className} ref={target}>
        <div class={bem('__input')} onClick={onToggle}>
          {props.fullLocation ? <span>{props.fullLocation}</span> : null}
          {!props.fullLocation ? <span>{props.placeholder}</span> : null}
          <Icon name="arrow-down" size={18} class={bem('__arrow')} />
        </div>
        {visible.value ? (
          <div class={bem('__popper')}>
            {loading.value ? (
              <div class="loading">
                <div class="er-loader"></div>
              </div>
            ) : null}
            {currAreaList.value.map((item) => (
              <span class="ellipsis" onClick={() => onchangeItem(item)}>
                {item.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
})
