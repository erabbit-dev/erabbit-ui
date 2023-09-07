export function createNamespace(
  name: string
): [string, (...mods: string[]) => string] {
  const prefixedName = `er-${name}`

  const bem = (...mods: string[]) => {
    const classNames: string[] = []
    if (mods) {
      mods.forEach((mod) => {
        if (mod) {
          if (/^__/.test(mod)) return classNames.push(`${prefixedName}${mod}`)
          else return classNames.push(`${prefixedName}--${mod}`)
        }
      })
    }
    return classNames.join(' ')
  }

  return [prefixedName, bem]
}
