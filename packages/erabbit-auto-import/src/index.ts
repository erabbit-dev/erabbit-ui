export interface ErabbitResolverOptions {
  importStyle?: boolean
  ssr?: boolean
}

function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

function getModuleType(ssr: boolean): string {
  return ssr ? 'lib' : 'es'
}

function getSideEffects(dirName: string, moduleType: string) {
  return `erabbit/dist/${moduleType}/${dirName}/style/index`
}

export function ErabbitUIResolver(options: ErabbitResolverOptions = {}) {
  const { ssr = false, importStyle } = options

  const moduleType = getModuleType(ssr)

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith('Er')) {
        const partialName = name.slice(2)
        return {
          name: partialName,
          from: `erabbit/dist/${moduleType}`,
          sideEffects: importStyle
            ? getSideEffects(kebabCase(partialName), moduleType)
            : ''
        }
      }
    }
  }
}
