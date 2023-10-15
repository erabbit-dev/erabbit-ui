import type { SkuItem, SkuSpecItem } from './Sku'
import powerSet from './power-set'

type PathMap = Record<string, string[]>

export const spliter = '★'

export const getPathMap = (skus: SkuItem[]) => {
  const pathMap: PathMap = {}
  skus.forEach((sku) => {
    if (sku.inventory > 0) {
      const valueArr = sku.specs.map((val) => val.valueName)
      const valueArrPowerSet = powerSet(valueArr)
      valueArrPowerSet.forEach((arr) => {
        const key = arr.join(spliter)
        if (pathMap[key]) {
          pathMap[key].push(sku.id)
        } else {
          pathMap[key] = [sku.id]
        }
      })
    }
  })
  return pathMap
}

export const getSelectedValues = (specs: SkuSpecItem[]) => {
  const arr: (string | undefined)[] = []
  specs.forEach((item) => {
    const selectedVal = item.values.find((val) => val.selected)
    arr.push(selectedVal ? selectedVal.name : undefined)
  })
  return arr
}

export const updateDisabledStatus = (
  specs: SkuSpecItem[],
  pathMap: PathMap,
) => {
  specs.forEach((item, i) => {
    const selectedValues = getSelectedValues(specs)
    item.values.forEach((val) => {
      if (val.selected) return
      selectedValues[i] = val.name
      const key = selectedValues.filter((value) => value).join(spliter)
      val.disabled = !pathMap[key]
    })
  })
}

export const updateSelectedStatus = (
  specs: SkuSpecItem[],
  skus: SkuItem[],
  skuId?: string,
) => {
  const sku = skus.find((sku) => sku.id === skuId)
  if (sku) {
    specs.forEach((item, i) => {
      const val = item.values.find((val) => val.name === sku.specs[i].valueName)
      if (val) {
        val.selected = true
      }
    })
  } else {
    specs.forEach((item) => {
      item.values.forEach((val) => {
        val.selected = false
      })
    })
  }
}
