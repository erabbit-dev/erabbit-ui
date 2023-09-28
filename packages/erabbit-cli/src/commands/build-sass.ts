import consola from 'consola'
import fse from 'fs-extra'
import { join } from 'node:path'
import { compileStyle, type Format } from '../compiler/compile-style'

const { readdir, lstatSync, copy } = fse

const ES_DIR = join(process.cwd(), 'dist/es')
const LIB_DIR = join(process.cwd(), 'dist/lib')
const SRC_DIR = join(process.cwd(), 'src')
const REG = /\.(css|scss)$/

// async function clean() {
//   return Promise.all([remove(ES_DIR), remove(LIB_DIR)])
// }

async function copySourceCode() {
  const options = {
    filter: (filePath: string) => {
      const isDir =
        lstatSync(filePath).isDirectory() && !/__tests__|demo/.test(filePath)
      return isDir || REG.test(filePath)
    },
  }
  return Promise.all([
    copy(SRC_DIR, ES_DIR, options),
    copy(SRC_DIR, LIB_DIR, options),
  ])
}

async function compileFile(filePath: string, format: Format) {
  if (REG.test(filePath)) {
    return compileStyle(filePath, format)
  }
  // return remove(filePath)
}

async function compileDir(dir: string, format: Format) {
  const files = await readdir(dir)
  await Promise.all(
    files.map((filename) => {
      const filePath = join(dir, filename)
      const isDir = lstatSync(filePath).isDirectory()
      return isDir
        ? compileDir(filePath, format)
        : compileFile(filePath, format)
    }),
  )
}

export async function buildStyle() {
  try {
    consola.start('[erabbit-cli] Building project style ...')
    await copySourceCode()
    await compileDir(ES_DIR, 'es')
    await compileDir(LIB_DIR, 'lib')
    consola.success('[erabbit-cli] Project style built!')
  } catch (error) {
    consola.error('[erabbit-cli] Project style failed!', error)
    process.exit(1)
  }
}
