import bole from 'bole'
import chalk from 'chalk'
import streamFile from 'stream-file-archive'
import through from 'through2'

import { ILogger } from '../types'

const levels = {
  info: chalk.green,
  error: chalk.red,
  warn: chalk.yellow,
  debug: chalk.magenta
}

const rotator = streamFile({
  path: `${__dirname}/logs/${'xarples'}-${'0.0.0'}-%Y-%m-%d.log`,
  symlink: 'logs/current.log',
  compress: true
})


const formatter = through((chunk, _, callback) => {
  try {
    let { id, level, name, message } = JSON.parse(chunk)
    // @ts-ignore
    const color = levels[level]
    id = id ? ` ${chalk.blue(id)} ` : ' '
    message = typeof message === 'object' ? JSON.stringify(message, null, 2) : message
    console.log(`${color(level)}${id}(${chalk.cyan(name)}) ${message}`)
    callback(null, chunk)
  } catch (err) {
    callback(err)
  }
})

export function getLogger (namespace: string): ILogger {

  bole.output({
    level: process.env.DEBUG ? 'debug' : 'info',
    stream: process.env.NODE_ENV === 'production' ? rotator : formatter
  })
  
  return bole(namespace)
}

export default {
  getLogger
}