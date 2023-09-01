import autoprefixer from 'autoprefixer'
import { transform } from 'esbuild'
import postcss from 'postcss'

export async function compileCss(source: string | Buffer) {
  const { css } = await postcss([autoprefixer]).process(source, {
    from: undefined
  })
  const result = await transform(css, {
    loader: 'css',
    minify: true,
    target: ['chrome53', 'safari10']
  })
  return result.code
}
