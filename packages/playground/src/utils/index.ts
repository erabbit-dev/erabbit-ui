import { computed, unref, type MaybeRef, type Ref } from 'vue'
import { gte } from 'semver'
import { useFetch } from '@vueuse/core'

export const getVersions = (pkg: MaybeRef<string>) => {
  const url = `https://data.jsdelivr.com/v1/package/npm/${unref(pkg)}`
  return useFetch(url, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
    refetch: true,
  }).json<string[]>().data as Ref<string[]>
}

export const getSupportedErabbitUIVersions = () => {
  const versions = getVersions('erabbit')
  return computed(() =>
    versions.value.filter((version) => gte(version, '0.2.6')),
  )
}

export const getImportMap = (v: string) => {
  return {
    imports: {
      '@vueuse/core': `https://cdn.jsdelivr.net/npm/@vueuse/core@latest/+esm`,
      erabbit: `https://cdn.jsdelivr.net/npm/erabbit@${v}/dist/erabbit.esm-browser.js`,
    },
  }
}
