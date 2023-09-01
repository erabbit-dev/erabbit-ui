import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/cli',
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './lib',
      format: 'esm'
    }
  ],
  outDir: 'lib',
  declaration: true,
  externals: [
    'autoprefixer',
    'commander',
    'consola',
    'esbuild',
    'fs-extra',
    'postcss',
    'unbuild'
  ]
})
