import fse from 'fs-extra'
import { join } from 'node:path'
import color from 'picocolors'
import enquirer from 'enquirer'
import { consola } from 'consola'
import { execSync } from 'child_process'

function logCurrentVersion(cwd: string) {
  const pkgJson = join(cwd, 'package.json')
  const pkg = fse.readJSONSync(pkgJson)
  consola.success(`${color.bold('Current package:')} ${color.green(pkg.name)}`)
  consola.success(
    `${color.bold('Current version:')} ${color.green(pkg.version)}`,
  )
  return {
    pkgName: pkg.name,
    currentVersion: pkg.version,
  }
}

async function getNewVersion() {
  const { version } = await enquirer.prompt<{ version: string }>({
    type: 'input',
    name: 'version',
    message: 'Version to release:',
  })
  return version
}

function getNpmTag(version: string, forceTag?: string) {
  let tag: string

  if (forceTag) {
    tag = forceTag
  } else if (version.includes('beta')) {
    tag = 'beta'
  } else if (version.includes('alpha')) {
    tag = 'alpha'
  } else if (version.includes('rc')) {
    tag = 'rc'
  } else {
    tag = 'latest'
  }

  consola.success(`${color.bold('Npm tag:')} ${color.green(tag)}`)

  return tag
}

function setPkgVersion(version: string, cwd: string) {
  const pkgJson = join(cwd, 'package.json')
  const pkg = fse.readJSONSync(pkgJson)
  pkg.version = version
  fse.writeJSONSync(pkgJson, pkg, { spaces: 2 })
}

function buildPackage(packageManager: string) {
  const command = `${packageManager} run build`
  consola.success(`${color.bold('Build package:')} ${color.green(command)}`)
  execSync(command, { stdio: 'inherit' })
}

function publishPackage(packageManager: string, tag: string) {
  let command = `${packageManager} publish --tag ${tag}`

  if (packageManager === 'pnpm') {
    command += ' --no-git-checks'
  }

  execSync(command, { stdio: 'inherit' })
}

function commitChanges(pkgName: string, version: string, gitTag?: boolean) {
  const message = `release: ${pkgName} v${version}`
  execSync(`git add -A && git commit -m "${message}"`, { stdio: 'inherit' })

  if (gitTag) {
    execSync(`git tag -a v${version} -m "${message}"`, { stdio: 'inherit' })
  }
}

function getCurrentBranch() {
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
  return branch
}

function pushChanges(gitTag?: boolean) {
  const branch = getCurrentBranch()
  execSync(`git push origin ${branch}`, { stdio: 'inherit' })

  if (gitTag) {
    execSync(`git push origin ${branch} --tags`, { stdio: 'inherit' })
  }
}

export async function release(command: { tag?: string; gitTag?: boolean }) {
  const cwd = process.cwd()
  const { pkgName, currentVersion } = logCurrentVersion(cwd)
  const version = await getNewVersion()
  const tag = getNpmTag(version, command.tag)
  const packageManager = 'pnpm'

  setPkgVersion(version, cwd)

  try {
    buildPackage(packageManager)
  } catch (err) {
    consola.error('Failed to build package, rollback to the previous version.')
    setPkgVersion(currentVersion, cwd)
    throw err
  }

  publishPackage(packageManager, tag)
  commitChanges(pkgName, version, command.gitTag)
  pushChanges(command.gitTag)
}
