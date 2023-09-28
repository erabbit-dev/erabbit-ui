import fse from 'fs-extra'
import path from 'node:path'

const ES_EXT = '.mjs'
const LIB_EXT = '.js'
const DTS_EXT = '.d.ts'
const EXCLUDE_DIRS = ['/composables/', '/utils/', 'node_modules']

function getDependencies(filePath: string, visitedFiles = new Set()) {
  // Check if the file has been visited to avoid circular dependencies.
  if (visitedFiles.has(filePath)) {
    return []
  }

  visitedFiles.add(filePath)

  const fileContent = fse.readFileSync(filePath, 'utf8')
  const dependencies = []

  const importRegexp =
    /import\s+(?:\{[^}]+\}|\S+)\s+from\s+['"](\.{1,2}[\\/][^'"]+)['"]/g

  let match

  while ((match = importRegexp.exec(fileContent)) !== null) {
    dependencies.push(match[1])
  }

  // Get the absolute path of the dependent file
  const resolvedDependencies = dependencies.map((dep) => {
    const depPath = path.join(path.dirname(filePath), dep)
    return fse.existsSync(depPath) ? depPath : depPath + ES_EXT
  })

  // Filter out other dependencies
  const filteredDependencies = resolvedDependencies.filter((dep) => {
    return !EXCLUDE_DIRS.some((dir) => dep.includes(path.normalize(dir)))
  })

  // Recursively get the dependencies of dependencies.
  let allDependencies = filteredDependencies.slice()

  for (const dep of filteredDependencies) {
    allDependencies = allDependencies.concat(getDependencies(dep, visitedFiles))
  }

  return Array.from(new Set(allDependencies))
}

export function getStyleDeps(filePath: string): string[] {
  const dependencies = getDependencies(filePath.replace('.scss', ES_EXT))
  const deps = dependencies
    .map((dep) => {
      const match = dep.match(/[\\/](\w+)[\\/]index.mjs$/)
      return match ? match[1] : ''
    })
    .filter((dep) => dep)
  return deps
}

export function genComponentStyleEntry(filePath: string): void {
  const componentName = filePath.match(
    /dist[\\/]es[\\/](\w+)[\\/]index.scss/
  )?.[1]
  if (componentName) {
    const deps = getStyleDeps(filePath)

    const esStyleEntryFile = filePath.replace(/index.scss/, 'style' + ES_EXT)
    const libStyleEntryFile = filePath
      .replace(/index.scss/, 'style' + LIB_EXT)
      .replace(/dist[\\/]es/, 'dist/lib')
    const esStyleEntryDts = filePath.replace(/index.scss/, 'style' + DTS_EXT)
    const libStyleEntryDts = filePath
      .replace(/index.scss/, 'style' + DTS_EXT)
      .replace(/dist[\\/]es/, 'dist/lib')

    fse.writeFileSync(
      esStyleEntryFile,
      `import '../index.css';\nimport './index.css';\n`
    )
    fse.writeFileSync(
      libStyleEntryFile,
      `require('../index.css');\nrequire('./index.css');\n`
    )
    fse.writeFileSync(esStyleEntryDts, `export {};`)
    fse.writeFileSync(libStyleEntryDts, `export {};`)

    deps.forEach((dep) => {
      fse.appendFileSync(esStyleEntryFile, `import '../${dep}/index.css';\n`)
      fse.appendFileSync(libStyleEntryFile, `require('../${dep}/index.css');\n`)
    })
  }
}
