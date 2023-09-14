import { Command } from 'commander'
import { cliVersion } from './index.js'

const program = new Command()

program.version(`erabbit-cli ${cliVersion}`)

program
  .command('build')
  .description('Compile components in production mode')
  .action(async () => {
    const { buildStyle } = await import('./commands/build.js')
    return buildStyle()
  })

program.parse()
