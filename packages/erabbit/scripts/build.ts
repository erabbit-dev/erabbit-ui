#!/usr/bin/env node

import color from 'picocolors'
import { exec } from 'node:child_process'
import { build } from 'vite'
import config from '../vite.config'

build(config).then(() => {
  exec('erabbit-cli build-sass', (err, stdout, stderr) => {
    if (!err) {
      console.log(color.cyan(stdout.toString()))
    } else {
      console.log(color.red(stderr.toString()))
    }
  })
})
