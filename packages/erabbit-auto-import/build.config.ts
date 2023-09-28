import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  externals: ['unplugin-vue-components'],
})
