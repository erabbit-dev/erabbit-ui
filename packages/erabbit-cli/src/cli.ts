import { Command } from 'commander'
import { cliVersion } from './index.js'

const program = new Command()

program.version(`erabbit-cli ${cliVersion}`)

program
  .command('build-sass')
  .description('Compile components in production mode')
  .action(async () => {
    const { buildStyle } = await import('./commands/build-sass.js')
    return buildStyle()
  })

program
  .command('release')
  .description('Compile components and release it')
  .option('--tag <tag>', 'Release tag')
  .option('--gitTag', 'Generate git tag')
  .action(async (options) => {
    const { release } = await import('./commands/release.js')
    return release(options)
  })

program.parse()
