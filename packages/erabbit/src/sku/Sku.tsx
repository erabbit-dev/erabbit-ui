import {
  computed,
  defineComponent,
  watch,
  type ExtractPropTypes,
  type PropType,
} from 'vue'
import { createNamespace, omit } from '../utils'
import {
  getPathMap,
  getSelectedValues,
  spliter,
  updateDisabledStatus,
  updateSelectedStatus,
} from './utils'

export type SkuSpecItemValue = {
  name: string
  picture?: string
  selected?: boolean
  disabled?: boolean
}
export type SkuSpecItem = {
  name: string
  values: SkuSpecItemValue[]
}

export type SkuSpecItemPick = {
  name: string
  valueName: string
}

export type SkuItem = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  specs: SkuSpecItemPick[]
  specsText?: string
}

const skuProps = {
  specs: {
    type: Array as PropType<SkuSpecItem[]>,
    default: () => [],
  },
  skus: {
    type: Array as PropType<SkuItem[]>,
    default: () => [],
  },
  skuId: {
    type: String,
  },
}

export type SkuProps = ExtractPropTypes<typeof skuProps>

const [className, bem] = createNamespace('sku')

export default defineComponent({
  name: 'ErSku',

  props: skuProps,

  emits: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    change: (sku: Partial<Omit<SkuItem, 'specs'>>) => true,
  },

  setup(props, { emit }) {
    const pathMap = computed(() => getPathMap(props.skus))

    watch(
      () => props.skuId,
      () => {
        updateSelectedStatus(props.specs, props.skus, props.skuId)
        updateDisabledStatus(props.specs, pathMap.value)
      },
      {
        immediate: true,
      },
    )

    const changeSku = (spec: SkuSpecItem, val: SkuSpecItemValue) => {
      if (val.disabled) return
      if (val.selected) {
        val.selected = false
      } else {
        spec.values.forEach((value) => {
          value.selected = false
        })
        val.selected = true
      }
      updateDisabledStatus(props.specs, pathMap.value)

      const validSelectedValues = getSelectedValues(props.specs).filter(
        (v) => v,
      )
      if (validSelectedValues.length === props.specs.length) {
        const skuIds = pathMap.value[validSelectedValues.join(spliter)]
        const sku = props.skus.find((sku) => sku.id === skuIds[0])
        if (sku) {
          return emit('change', {
            ...omit(sku, ['specs']),
            specsText: sku.specs
              .reduce((p, c) => `${p} ${c.name}：${c.valueName}`, '')
              .trim(),
          })
        }
      }
      emit('change', {})
    }

    return () => (
      <div class={className}>
        {props.specs.map((spec) => (
          <dl class={bem('__row')} key={spec.name}>
            <dt class={bem('__label')}>{spec.name}</dt>
            <dd class={bem('__wrapper')}>
              {spec.values.map((val) =>
                val.picture ? (
                  <img
                    class={{
                      [bem('__img')]: true,
                      'is-selected': val.selected,
                      'is-disabled': val.disabled,
                    }}
                    src={val.picture}
                    alt={val.name}
                    title={val.name}
                    key={val.name}
                    onClick={() => changeSku(spec, val)}
                  />
                ) : (
                  <span
                    class={{
                      [bem('__btn')]: true,
                      'is-selected': val.selected,
                      'is-disabled': val.disabled,
                    }}
                    key={val.name}
                    onClick={() => changeSku(spec, val)}
                  >
                    {val.name}
                  </span>
                ),
              )}
            </dd>
          </dl>
        ))}
      </div>
    )
  },
})
