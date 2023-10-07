import {
  isVNode,
  shallowRef,
  type ComponentInternalInstance,
  type VNode,
  type VNodeNormalizedChildren,
} from 'vue'

function flattedChildren(children: VNodeNormalizedChildren) {
  const vNodes = Array.isArray(children) ? children : [children]
  const result: VNode[] = []

  vNodes.forEach((child) => {
    if (Array.isArray(child)) {
      result.push(...flattedChildren(child))
    } else if (isVNode(child) && Array.isArray(child.children)) {
      result.push(...flattedChildren(child.children))
    } else {
      result.push(child as VNode)
      if (isVNode(child) && child.component?.subTree) {
        result.push(
          ...flattedChildren(child.component.subTree as unknown as VNode[]),
        )
      }
    }
  })
  return result
}

const getOrderedChildren = <T>(
  vm: ComponentInternalInstance,
  childComponentName: string,
  children: Record<number, T>,
): T[] => {
  const nodes = flattedChildren(vm.subTree.children).filter(
    (n): n is VNode =>
      isVNode(n) &&
      (n.type as any)?.name === childComponentName &&
      !!n.component,
  )
  const uids = nodes.map((n) => n.component!.uid)
  return uids.map((uid) => children[uid]).filter((p) => !!p)
}

export const useChildren = <T extends { uid: number }>(
  vm: ComponentInternalInstance,
  childComponentName: string,
) => {
  const children: Record<number, T> = {}
  const orderedChildren = shallowRef<T[]>([])

  const addChild = (child: T) => {
    children[child.uid] = child
    orderedChildren.value = getOrderedChildren(vm, childComponentName, children)
  }
  const removeChild = (uid: number) => {
    delete children[uid]
    orderedChildren.value = orderedChildren.value.filter(
      (children) => children.uid !== uid,
    )
  }

  return {
    children: orderedChildren,
    addChild,
    removeChild,
  }
}
