import consola from 'consola'
import fse from 'fs-extra'
import { parse, join } from 'node:path'
import { compileCss } from './compile-css'
import { compileSass } from './compile-sass'
export type Format = 'es' | 'lib'

const { readFileSync, writeFileSync, removeSync } = fse

async function compileFile(filePath: string) {
  const parsedPath = parse(filePath)

  try {
    if (parsedPath.ext === '.scss') {
      const source = await compileSass(filePath)
      return await compileCss(source)
    }

    const source = readFileSync(filePath, 'utf-8')
    return await compileCss(source)
  } catch (err) {
    consola.error('Compile style failed: ' + filePath)
    throw err
  }
}


const allStyleFile = join(process.cwd(), 'dist/erabbit-ui.min.css')
const allStyle: string[] = []
export async function compileStyle(filePath: string, format: Format) {
  const css = await compileFile(filePath)

  removeSync(filePath)

  if (format === 'es') {
    allStyle.push(css)
    writeFileSync(allStyleFile, allStyle.join(''))
  }

  writeFileSync(filePath.replace(/\.\w+$/, '.css'), css)
}
